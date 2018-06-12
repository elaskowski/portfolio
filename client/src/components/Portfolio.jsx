import React from 'react';

import Project from './Project.jsx';

import './styles/Portfolio.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <h2>PORTFOLIO</h2>
        <Project />
      </div>
    );
  }
}

export default Portfolio;
