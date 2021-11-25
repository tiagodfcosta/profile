import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';

    function App() {
      return (
            <div className="App">
                <NavBar />
                  <div className="content">
                    <Home />
                  </div>
            </div>
      );
    }
    

export default App;
