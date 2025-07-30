# NextGen Scholars Research Journal

A modern research journal website with an AI-powered research topic generator for students.

## 🚀 Features

- **AI Research Topic Generator** - Generate unique, niche research topics using GPT-4
- **Beautiful, Modern UI** - Responsive design with smooth animations
- **Multiple Research Fields** - Psychology, Education, Biology, Chemistry, Physics, Computer Science, Sociology, Economics, Environmental Science, Medicine
- **Academic Level Support** - High School, Undergraduate, Graduate, PhD
- **Interest Customization** - Tailor topics to specific interests and methodologies
- **Real AI Integration** - Backend server with OpenAI API for truly unique topics

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- OpenAI API key

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your OpenAI API key**
   
   **Option A: Environment Variable (Recommended)**
   ```bash
   # On Windows
   set OPENAI_API_KEY=your-api-key-here
   
   # On Mac/Linux
   export OPENAI_API_KEY=your-api-key-here
   ```

   **Option B: Direct in server.js**
   - Open `server.js`
   - Replace `'your-openai-api-key-here'` with your actual API key
   - ⚠️ **Warning**: Don't commit your API key to version control

4. **Get your OpenAI API key**
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create a new API key
   - Copy the key and use it in step 3

### Running the Application

1. **Start the server**
   ```bash
   npm start
   ```

2. **Open your browser**
   - Go to `http://localhost:3000`
   - The AI generator will be available at `http://localhost:3000/ai-generator.html`

3. **For development (auto-restart on changes)**
   ```bash
   npm run dev
   ```

## 🤖 How the AI Generator Works

### Real AI Mode (Default)
- Uses GPT-4 to generate truly unique research topics
- Each generation produces completely different results
- Topics are tailored to the selected field, level, and interests
- Includes detailed research outlines and methodologies

### Fallback Mode
- If the AI server is unavailable, uses the built-in generator
- Still provides good variety with randomized topics
- No external dependencies required

## 📁 Project Structure

```
Website/
├── server.js              # Backend server with AI integration
├── ai-generator.html      # AI research topic generator
├── Home.html             # Main homepage
├── about.html            # About page
├── submit.html           # Submission guidelines
├── archive.html          # Research archive
├── contact.html          # Contact page
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🔧 Configuration

### Changing the Server URL
If you deploy the server to a different URL, update the `serverUrl` in `ai-generator.html`:

```javascript
this.serverUrl = 'https://your-server-url.com'; // Change this
```

### Environment Variables
- `PORT` - Server port (default: 3000)
- `OPENAI_API_KEY` - Your OpenAI API key

## 🚀 Deployment Options

### Option 1: Local Development
- Run `npm start` and access at `http://localhost:3000`

### Option 2: Heroku
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy with `git push heroku main`

### Option 3: Vercel/Netlify
- Deploy the static files (HTML, CSS, JS)
- Set up a separate backend server for the AI functionality

### Option 4: Railway/Render
- Deploy the entire Node.js application
- Set environment variables in the platform dashboard

## 🔒 Security Notes

- Never expose your OpenAI API key in client-side code
- Use environment variables for sensitive data
- Consider rate limiting for production use
- Monitor API usage to control costs

## 💡 Usage Tips

1. **For Best Results**: Use specific interests and preferred methodologies
2. **Topic Variety**: Each generation produces unique topics
3. **Academic Level**: Choose the appropriate level for your research
4. **Field Selection**: Select the field that best matches your interests

## 🐛 Troubleshooting

### Common Issues

**"AI server unavailable"**
- Check if the server is running (`npm start`)
- Verify the server URL in `ai-generator.html`
- Check console for error messages

**"OpenAI API error"**
- Verify your API key is correct
- Check your OpenAI account has sufficient credits
- Ensure the API key has the necessary permissions

**"CORS error"**
- The server includes CORS middleware
- If issues persist, check browser console for specific errors

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the console for error messages
3. Verify your OpenAI API key and account status

## 🎯 Features in Detail

### AI Research Generator
- **Real-time AI generation** using GPT-4
- **Niche topic creation** with specific research areas
- **Academic level adaptation** for different student levels
- **Interest customization** for personalized topics
- **Methodology specification** for research approach
- **Detailed outlines** with 6-step research process
- **Fallback system** for offline/error scenarios

### Website Features
- **Responsive design** for all devices
- **Modern UI** with smooth animations
- **Navigation sidebar** with all pages
- **Contact forms** and subscription features
- **Research archive** for published papers
- **Submission system** for new research

---

**Built with ❤️ for NextGen Scholars** 