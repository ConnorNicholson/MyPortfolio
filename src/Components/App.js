import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import '../lib/css/App.css';

export default function App() {
  
  const routing = (
    <Router>
      <div>
        <ul className="navbar fixed-top justify-content-center">
          <li className="nav_link">
            <Link to="/">About Me</Link>
          </li>
          <li className="nav_link">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav_link">
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
        <Route exact path="/" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )
  return (
    routing
  );
};