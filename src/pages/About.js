import React from 'react';
import './About.css';

const About = () => (
  <>
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">About NextGen Scholars</h1>
        <p className="about-text">
          The Young Scientists Journal is the largest and oldest journal of its kind.<br /><br />
          We are an internationally peer-reviewed science journal, written, reviewed and produced by students aged 12 to 20. Since 2006, we have connected students from over 50 countries, providing a platform for young researchers to share their discoveries and ideas with the world.
        </p>
      </div>
    </section>
    <section className="founder-section">
      <div className="founder-container">
        <div className="founder-info">
          <h2>Our Founder</h2>
          <p>
            NextGen Scholars was founded by passionate students who believe in democratizing knowledge and empowering the next generation of global thinkers. Our mission is to make student-led research visible, valued, and impactful.
          </p>
        </div>
      </div>
    </section>
    <footer>
      <div className="subscribe-box">
        <h3>Subscribe to NextGen Scholars</h3>
        <form action="#" method="post" onSubmit={e => { e.preventDefault(); alert('Subscribed! Thank you!'); }}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  </>
);

export default About; 