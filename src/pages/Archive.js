import React from 'react';
import './Archive.css';

const Archive = () => (
  <>
    <main className="archive-main">
      <h1>Archive of Published Articles</h1>
      <p>Browse our past issues and published research articles below.</p>
      <ul className="archive-list">
        <li><a href="/issue1">Issue 1 – Spring 2025</a></li>
        <li><a href="/issue2">Issue 2 – Summer 2025</a></li>
      </ul>
      <div style={{height: '150vh'}}></div>
    </main>
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

export default Archive; 