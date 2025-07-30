const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files

// Your OpenAI API key (store this securely in production)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || 'your-openai-api-key-here';

// Connect to MongoDB (for Railway, use process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/research_journal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Submission Schema
const SubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  title: String,
  abstract: String,
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }, // 'pending', 'published'
});
const Submission = mongoose.model('Submission', SubmissionSchema);

// Published Article Schema
const PublishedArticleSchema = new mongoose.Schema({
  name: String,
  email: String,
  title: String,
  abstract: String,
  date: { type: Date, default: Date.now },
});
const PublishedArticle = mongoose.model('PublishedArticle', PublishedArticleSchema);

// AI Research Topic Generator Endpoint
app.post('/api/generate-topics', async (req, res) => {
  try {
    const { field, level, interests, methodology } = req.body;

    const levelDescriptions = {
      'high-school': 'high school level (ages 14-18)',
      'undergraduate': 'undergraduate university level',
      'graduate': 'graduate/master\'s level',
      'phd': 'PhD/doctoral level'
    };

    const prompt = `Generate 3 unique, niche, and innovative research topics for ${field} at ${levelDescriptions[level]}. ${
      interests ? `The student is particularly interested in: ${interests}. ` : ''
    }${
      methodology ? `Preferred methodology: ${methodology}. ` : ''
    }

Requirements:
1. Topics must be highly specific and niche - avoid generic topics
2. Focus on current trends, emerging technologies, or unexplored areas
3. Include topics that combine multiple disciplines or novel approaches
4. Make topics relevant to the student's academic level
5. Provide detailed research outlines and methodologies

For each topic, provide:
- A specific, innovative title
- Detailed description of the research
- 6-step research outline
- Recommended methodology with specific techniques

Format the response as JSON with this structure:
{
  "topics": [
    {
      "title": "Specific research title",
      "description": "Detailed description",
      "outline": ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"],
      "methodology": "Detailed methodology description"
    }
  ]
}`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert research advisor specializing in generating unique, niche, and innovative research topics for students. Always provide specific, detailed, and cutting-edge research ideas that have not been extensively studied before.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.9,
        max_tokens: 1500
      })
    });

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error.message);
    }

    // Parse the AI response
    const aiResponse = data.choices[0].message.content;
    const topics = parseAIResponse(aiResponse);

    res.json({ success: true, topics });
  } catch (error) {
    console.error('AI generation failed:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      fallback: true 
    });
  }
});

// Parse AI response function
function parseAIResponse(response) {
  try {
    // Try to extract JSON from the response
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return parsed.topics || [];
    }
    
    // Fallback parsing if JSON extraction fails
    return fallbackParse(response);
  } catch (error) {
    console.error('Failed to parse AI response:', error);
    return fallbackParse(response);
  }
}

// Fallback parsing for non-JSON responses
function fallbackParse(response) {
  const topics = [];
  const sections = response.split(/(?=Topic|Research|Study)/i);
  
  sections.forEach(section => {
    if (section.trim().length > 50) {
      const lines = section.split('\n').filter(line => line.trim());
      if (lines.length >= 3) {
        topics.push({
          title: lines[0].replace(/^[0-9\.\s]+/, '').trim(),
          description: lines[1] || 'AI-generated research topic',
          outline: [
            'Introduction and Literature Review',
            'Research Questions and Hypotheses',
            'Methodology and Experimental Design',
            'Data Collection Procedures',
            'Statistical Analysis Methods',
            'Results Interpretation and Discussion'
          ],
          methodology: 'AI-generated methodology with specialized techniques and analysis methods.'
        });
      }
    }
  });

  return topics.slice(0, 3);
}

// API endpoint to submit a new article
app.post('/api/submit', async (req, res) => {
  try {
    const { name, email, title, abstract } = req.body;
    const submission = new Submission({ name, email, title, abstract });
    await submission.save();
    res.status(201).json({ success: true, submission });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// API endpoint to get all submissions
app.get('/api/submissions', async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.json({ success: true, submissions });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// API endpoint to publish an article (move from submissions to published)
app.post('/api/publish/:id', async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) return res.status(404).json({ success: false, error: 'Submission not found' });
    const published = new PublishedArticle({
      name: submission.name,
      email: submission.email,
      title: submission.title,
      abstract: submission.abstract,
    });
    await published.save();
    submission.status = 'published';
    await submission.save();
    res.json({ success: true, published });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// API endpoint to get all published articles
app.get('/api/published', async (req, res) => {
  try {
    const published = await PublishedArticle.find();
    res.json({ success: true, published });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'AI Research Generator Server is running' });
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/ai-generator.html');
});

app.listen(PORT, () => {
  console.log(`🚀 AI Research Generator Server running on port ${PORT}`);
  console.log(`📝 Visit http://localhost:${PORT} to use the generator`);
}); 