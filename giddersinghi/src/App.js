import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import Tracking from './components/Tracking/Tracking';
import { Pattern, PatternsList } from './components/Patterns/';
import { Tutorial, TutorialsWrapper } from './components/Tutorials';
import { Navbar } from './utilities/Navbar/';
import './App.css';

import { Form, FormControl, Button, Nav, Navbar as NavBar } from 'react-bootstrap';

function App() {
  return (
  <div>
    <Navbar/>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/tracking" component={Tracking} />
        <Route path="/tutorials" component={TutorialsWrapper} />
        <Route path="/patterns" component={PatternsList} />
        <Route path="/pattern/:stockid" component={Pattern} />
      </div>
    </Router>
  </div>
  );
}

export default App;
