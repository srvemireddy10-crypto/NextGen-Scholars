import React from 'react';
import './Contact.css';

const Contact = () => (
  <>
    <main className="contact-main">
      <h1>Contact Us</h1>
      <p>Have questions or want to get in touch? Fill out the form below and our team will respond as soon as possible.</p>
      <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Message sent! Thank you!'); }}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
        <button type="submit">Send Message</button>
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

export default Contact; 