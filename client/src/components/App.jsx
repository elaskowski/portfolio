import React from 'react';
import BrowserRouter from 'react-router-dom';
import AOS from 'aos';
import Particles from 'react-particles-js';
import 'aos/dist/aos.css';

import NavBar from './NavBar.jsx';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';

import './styles/App.css';

class App extends React.Component {
  componentDidMount() {
    AOS.init({ duration: 1000 });
  }
  render() {
    return (
      <div className="row" id="home">
        <NavBar />
        <div style={{ height: '100%', flex: '90%' }}>
          <div className="masthead-container">
            <div style={{
              position: 'absolute',
              'z-index': '10',
              margin: '25%',
            }}
            >Hello!<br />My name is Eva.<br />Full-Stack Developer.
            </div>
            <div style={{ height: '80vh' }}>
              <Particles
                params={{
                particles: {
                  number: {
                    value: 80,
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                  },
            			line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    // opacity: 0.5130918594769673,
                    width: 0,
            			},
                },
                interactivity: {
                  detect_on: 'canvas',
                  events: {
                    onhover: {
                      enable: true,
                      mode: 'repulse',
                    },
                    onclick: {
                      enable: true,
                      mode: 'push',
                    },
                    resize: true,
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1,
                      },
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                    push: {
                      particles_nb: 4,
                    },
                    remove: {
                      particles_nb: 2,
                    },
                  },
                },
            	}}
                style={{
                'z-index': '100',
              }}
              />
            </div>
          </div>
          <div id="about">
            <About />
          </div>
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="skills">
            <Resume />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
