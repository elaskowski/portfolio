import React from 'react';

import Project from './Project.jsx';
import NotReddit from './NotReddit.jsx';
import Codesling from './Codesling.jsx';

import './styles/About.css';

class About extends React.Component {
  render() {
    return (
      <div className="portfolio" data-aos="fade-up">
        <h2>ABOUT ME</h2>
        <div className="rectangle">
          <div className="bio">Hello! <br /><br />I was drawn to software engineering because it weaves together creativity and logic. Each challenge can be solved using a unique approach.<br /><br />I have been a lead developer on multiple applications using agile development, developing feature-rich user experiences by architecting RESTful NodeJS APIs that communicate with relational and non-relational databases. Throughout my work, I strive to create engaging and intuitive UX.<br /> <br />In my spare time, I enjoy reading, spending time outside, trying (and usually failing) to cook new dishes, or catching up on Game of Thrones, Westworld, Stranger Things, or any true crime podcast.</div>
          <div className="headshot"><img className="image" src="https://i.imgur.com/BXeXWid.jpg" /></div>
        </div>
      </div>
    );
  }
}


export default About;
