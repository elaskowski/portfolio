import React from 'react';

import './styles/NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navbar-list">
          <li className="title">EVA LASKOWSKI</li>
          <li className="job">WEB DEVELOPER</li>
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    );
  }
}

// active??

// <li><a className="active" href="#home">Home</a></li>
export default NavBar;
