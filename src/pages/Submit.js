import React from 'react';
import './Submit.css';

const Submit = () => (
  <>
    <main className="submit-main">
      <h1>Submit Your Research</h1>
      <p>We welcome submissions from students worldwide. Please fill out the form below to submit your research article for review.</p>
      <form className="submit-form" onSubmit={e => { e.preventDefault(); alert('Submission received! Thank you!'); }}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="title" placeholder="Article Title" required />
        <textarea name="abstract" placeholder="Article Abstract" rows={5} required></textarea>
        <button type="submit">Submit Article</button>
      </form>
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

export default Submit; 