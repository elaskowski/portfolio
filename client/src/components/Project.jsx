import React from 'react';

import Slideshow from './Slideshow.jsx';

import './styles/Project.css';

class Project extends React.Component {
  render() {
    return (
      <div className="proj-container">
        <div>
          <h3>RHYME DOCTOR</h3>
          <h4>Lyric composition web and mobile app with custom rhyme search algorithm</h4>
          <ul>
            <li>Designed scalable front-end architecture for user profiles using React and Redux</li>
            <li>Structured efficient database queries for persisting data with MySQL and Sequelize, resulting in fewer queries and fasting lookup times</li>
            <li>Built and launched companion mobile app in Google Play store using React Native, elevating application's audience reach</li>
          </ul>
          <h5>TECH USED</h5>
          <div className="tech-title">REACT</div>
          <div className="tech-title">REDUX</div>
          <div className="tech-title">REACT ROUTER</div>
          <div className="tech-title">NODE JS</div>
          <div className="tech-title">MYSQL</div>
          <div className="tech-title">SEQUELIZE</div>
          <div className="tech-title">SOCKET.IO</div>
          <div className="tech-title">PASSPORT</div>
          <div className="tech-title">DROPZONE</div>
          <div className="tech-title">CLOUDINARY</div>
          <div className="tech-title">BABEL</div>
          <div className="tech-title">BABEL</div>
          <div className="tech-title">AWS EC2</div>
        </div>
        <div className="slideshow-div">
          <Slideshow />
        </div>
      </div>
    );
  }
}

export default Project;
