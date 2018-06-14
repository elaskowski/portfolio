import React from 'react';
import BrowserRouter from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Portfolio from './Portfolio.jsx';

import './styles/App.css';

class App extends React.Component {
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
