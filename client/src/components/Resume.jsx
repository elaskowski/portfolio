import React from 'react';

import './styles/Resume.css';

const Resume = () => (
  <div className="resume" data-aos="fade-up">
    <h2>SKILLS & EXPERIENCE</h2>
    <h3 className="skill-title">FRONT END</h3><br />
    <div className="skills-container">
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/javascript.svg" alt="JS Logo" />
        <span className="skill-text">JavaScript</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/html5.svg" alt="HTML Logo" />
        <span className="skill-text">HTML5</span>
      </div>
      <div className="skill">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS Logo" />
        <span className="skill-text">CSS3</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="React Logo" />
        <span className="skill-text">React + React Native</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="Redux Logo" />
        <span className="skill-text">Redux</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/react-router.svg" alt="React Router Logo" />
        <span className="skill-text">React Router</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/angular.svg" style={{ 'margin-top': '50%' }} alt="Angular Logo" />
        <span className="skill-text">AngularJS</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/socket-io.svg" alt="Socket.IO Logo" />
        <span className="skill-text">Socket.IO</span>
      </div>
    </div>
    <h3 className="skill-title">BACK END</h3><br />
    <div className="skills-container">
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js Logo" />
        <span className="skill-text">Node.js & Express</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/mysql.svg" alt="MySQL Logo" />
        <span className="skill-text">MySQL</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="PostgreSQL Logo" />
        <span className="skill-text">PostgreSQL</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/sequelize.svg" alt="Sequelize Logo" />
        <span className="skill-text">Sequelize</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/mongodb.svg" alt="MongoDB Logo" />
        <span className="skill-text">MongoDB</span>
      </div>
      <div className="skill">
        <img src="https://meterpreter.org/wp-content/uploads/2017/07/MongooseJS.png" alt="Mongoose Logo" />
        <span className="skill-text">Mongoose</span>
      </div>
    </div>
    <h3 className="skill-title">DEVELOPER TOOLS</h3><br />
    <div className="skills-container">
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/git.svg" style={{ 'margin-top': '35%' }} alt="Git Logo" />
        <span className="skill-text">Git</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/npm.svg" style={{ 'margin-top': '40%' }} alt="NPM Logo" />
        <span className="skill-text">npm</span>
      </div>
      <div className="skill">
        <img src="https://cdn-images-1.medium.com/max/800/1*kNZ3I_SJ8Ify_rYh8YRI7w.png" style={{ 'max-height': '40%' }} alt="yarn Logo" />
        <span className="skill-text">yarn</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg" alt="webpack Logo" />
        <span className="skill-text">webpack</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/babel-10.svg" style={{ 'margin-top': '40%' }} alt="Babel Logo" />
        <span className="skill-text">Babel</span>
      </div>
      <div className="skill">
        <img src="https://cdn.worldvectorlogo.com/logos/travis-ci.svg" alt="TravisCI Logo" />
        <span className="skill-text">TravisCI</span>
      </div>
    </div>
    <br /><br />
    <h3 className="skill-title">PROFESSIONAL EXPERIENCE</h3><br />
    <div className="exp-container">
      <h4 className="exp-comp">HACK REACTOR</h4>
      <h5 className="exp-title">SOFTWARE ENGINEERING TECHNICAL FELLOW</h5>
      <h5 className="exp-title">2018 - present</h5>
      <p>Providing technical support for rigorous JavaScript curriculum to enable graduates’ successful careers as software engineers</p>
      <p>Run weekly code reviews to ensure students use best practices & produce production ready code</p>
      <p>Conduct live-coding lectures on full-stack framworks (React/AngularJS/Node/MySQL/MongoDB</p>
    </div>
    <div className="exp-container">
      <h4 className="exp-comp">RED BULL</h4>
      <h5 className="exp-title">ADVERTISING</h5>
      <h5 className="exp-title">2016 - 2017</h5>
      <p>Planned 50+ national campaigns supporting Red Bull TV, ultimately resulting in a 90% improvement in CPC</p>
      <p>Optimized HTML templates with custom styling to drive successful email marketing campaigns</p>
    </div>
    <div className="exp-container">
      <h4 className="exp-comp">AMOBEE</h4>
      <h5 className="exp-title">SENIOR ACCOUNT MANAGER</h5>
      <h5 className="exp-title">2013 - 2016</h5>
      <p>Managed cross-platform digital advertising campaigns for multiple agency clients</p>
      <p>Lead weekly meetings with advertisers to ensure campaign success</p>
    </div>
  </div>
);

export default Resume;
