import React from 'react';

import './styles/Contact.css';

const Contact = () => (
  <div className="contact" data-aos="fade-up">
    <h2>CONTACT ME</h2>
    <form method="POST" action="https://formspree.io/evalaskows@gmail.com">
      <input type="email" name="email" placeholder="Email" /><br /><br />
      <textarea name="message" placeholder="Message" /><br /><br />
      <button type="submit">SEND</button>
    </form>
  </div>
);

export default Contact;
