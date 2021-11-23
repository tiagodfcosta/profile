import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './components/Intro.js';
import NavBar from './components/Navbar.js';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Intro />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();