import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

    function App() {
      return (
            <Router>
              <div className="App">
                <NavBar />
                <div className="containerBanner">
                  <img className="banner" src="./fullstack.png" alt="FullStack" />
                  <h3>Hello I'm a Full Stack Developer based in Portugal</h3>
                </div>  
                  <div className="content" >
                    <Switch>
                      <Route exact path="/">
                        <Home />
                      </Route>
                      <Route path="/components/About">
                        <About />
                      </Route>
                      <Route path="/components/Projects">
                        <Projects />
                      </Route>
                      <Route path="/components/Contacts">
                        <Contacts />
                      </Route>
                    </Switch>
                  </div>
            </div>
            </Router>
      );
    }
    

export default App;
