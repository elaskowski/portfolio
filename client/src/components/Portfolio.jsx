import React from 'react';

import Project from './Project.jsx';
import NotReddit from './NotReddit.jsx';
import Codesling from './Codesling.jsx';

import './styles/Portfolio.css';

const Portfolio = () => (
  <div className="portfolio" data-aos="fade-up">
    <h2>PORTFOLIO</h2>
    <Project />
    <Codesling />
    <NotReddit />
  </div>
);

export default Portfolio;
