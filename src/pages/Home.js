import React from 'react';
import './Home.css';

const Home = () => (
  <>
    <section className="home-banner">
      <div className="banner-content">
        <h1 className="banner-quote">INSPIRING THE NEXT GENERATION OF SCIENTISTS</h1>
        <a href="/archive" className="banner-button">Visit our Archive</a>
      </div>
    </section>
    <section className="mission-section">
      <h2 className="mission-title">Our Mission</h2>
      <p className="mission-text">
        At <strong>NextGen Scholars</strong>, our mission is to provide a platform where young researchers and students from around the world can share their discoveries, ideas, and academic passions. We believe in democratizing knowledge, encouraging intellectual curiosity, and nurturing the next wave of global thinkers by making student-led research visible, valued, and impactful.
      </p>
    </section>
    <section className="recent-posts">
      <h2 className="posts-title">Recent Posts</h2>
      <div className="posts-container">
        <div className="post-box">
          <div className="post-placeholder">Post 1</div>
          <a href="#" className="visit-button">Visit</a>
        </div>
        <div className="post-box">
          <div className="post-placeholder">Post 2</div>
          <a href="#" className="visit-button">Visit</a>
        </div>
        <div className="post-box">
          <div className="post-placeholder">Post 3</div>
          <a href="#" className="visit-button">Visit</a>
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

export default Home; 