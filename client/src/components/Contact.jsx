import React from 'react';

import './styles/Contact.css';

const Contact = () => (
  <div className="contact" data-aos="fade-up">
    <h2>CONTACT ME</h2>
    <div style={{ 'text-align': 'center' }}>
      <a href="https://github.com/elaskowski">
        <img className="github-icon" src="https://image.flaticon.com/icons/svg/25/25231.svg" style={{ height: '50px', width: '50px' }} alt="Github Logo" />
      </a>
      <a className="github-prof" href="https://github.com/elaskowski">/elaskowski</a>
    </div>
    <br />
    <div style={{ 'text-align': 'center' }}>
      <a href="https://www.linkedin.com/in/eva-laskowski/">
        <img className="github-icon" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" style={{ height: '55px', width: '55px', 'padding-left': '24px' }} alt="Github Logo" />
      </a>
      <a className="github-prof" href="https://www.linkedin.com/in/eva-laskowski/">/eva-laskowski</a>
    </div>
    <br />
    <form method="POST" action="https://formspree.io/evalaskows@gmail.com">
      <input type="email" name="email" placeholder="YOUR EMAIL" /><br /><br />
      <textarea name="message" placeholder="MESSAGE" /><br /><br />
      <button type="submit">SEND</button>
    </form>
  </div>
);

export default Contact;
