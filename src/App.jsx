import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './views/Navbar';
import About from './views/About';
import Feedback from './components/Feedback';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-app">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}
