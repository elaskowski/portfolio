import React from 'react';
import BrowserRouter from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NavBar from './NavBar.jsx';
import Portfolio from './Portfolio.jsx';

import './styles/App.css';

class App extends React.Component {
  componentDidMount() {
    AOS.init({ duration: 1000 });
  }
  render() {
    return (
      <div className="row">
        <NavBar />
        <Portfolio />
      </div>
    );
  }
}


export default App;
