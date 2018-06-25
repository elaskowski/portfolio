import React from 'react';

import SlideshowNR from './SlideshowNR.jsx';

import './styles/Project.css';

class NotReddit extends React.Component {
  render() {
    return (
      <div className="proj-container" data-aos="fade-up">
        <div>
          <h3>NOTREDDIT</h3>
          <h4>Recreated full-stack application with core functionality of Reddit</h4>
          <ul>
            <li>Designed relational database schema to utilize caching and single-table inheritance to lighten backend load, leading to decreased lookup times</li>
            <li>Enriched UX by developing and styling nested components and intuitive user input forms</li>
            <li>Managed development goals and project direction to meet tight deadlines through implementation of Agile practices</li>
          </ul>
          <h5>TECH USED</h5>
          <div className="tech-title">REACT</div>
          <div className="tech-title">REDUX</div>
          <div className="tech-title">REACT ROUTER</div>
          <div className="tech-title">NODE JS</div>
          <div className="tech-title">MYSQL</div>
          <div className="tech-title">SEQUELIZE</div>
          <div className="tech-title">FIREBASE</div>
          <div className="tech-title">BABEL</div>
        </div>
        <div className="slideshow-div">
          <SlideshowNR />
        </div>
      </div>
    );
  }
}

export default NotReddit;
