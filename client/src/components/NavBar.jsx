import React from 'react';

import './styles/NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-container">
          <img
            src="https://i.imgur.com/5Q5GFEY.png"
            style={{
              height: '100px',
              width: '100px',
              'padding-left': '59px',
              'padding-top': '20px',
            }}
            alt="Eva Logo"
          />
          <ul className="navbar-list">
            <li className="link"><a href="#home">Home</a></li>
            <li className="link"><a href="#about">About Me</a></li>
            <li className="link"><a href="#portfolio">Portfolio</a></li>
            <li className="link"><a href="#skills">Skills</a></li>
            <li className="link"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
