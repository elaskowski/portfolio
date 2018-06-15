import React from 'react';

import Project from './Project.jsx';
import ProjectNR from './ProjectNR.jsx';

import './styles/Portfolio.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio" data-aos="fade-up">
        <h2>PORTFOLIO</h2>
        <Project />
        <ProjectNR />
        <ProjectNR />
        <ProjectNR />
      </div>
    );
  }
}

export default Portfolio;
