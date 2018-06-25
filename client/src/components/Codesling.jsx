import React from 'react';

import SlideshowCS from './SlideshowCS.jsx';

import './styles/Project.css';

class Codesling extends React.Component {
  render() {
    return (
      <div className="proj-container" data-aos="fade-up">
        <div>
          <h3>CODESLING.IO</h3>
          <h4>Open source, online code-sharing platform</h4>
          <ul>
            <li>Optimized application functionality by finding and fixing bugs that caused application crashes</li>
            <li>Implemented enhanced features to existing codebase, such as ability to add user-created test cases</li>
            <li>Deployed peer-to-peer, real-time chat to React front-end using Socket.IO, allowing for seamless integration of social functionality</li>
          </ul>
          <h5>TECH USED</h5>
          <div className="tech-title">REACT</div>
          <div className="tech-title">REDUX</div>
          <div className="tech-title">REACT ROUTER</div>
          <div className="tech-title">NODE JS</div>
          <div className="tech-title">POSTGRESQL</div>
          <div className="tech-title">SOCKET.IO</div>
          <div className="tech-title">BABEL</div>
        </div>
        <div className="slideshow-div">
          <SlideshowCS />
        </div>
      </div>
    );
  }
}

export default Codesling;
