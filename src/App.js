import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";
import MainCover from "./components/MainCover/MainCover";
import Footer from "./components/Footer/Footer"
import MainChoicePanel from './components/MainChoicePanel/MainChoicePanel';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        
        <Route path="/" component={Navbar} />

        {/* Home */}
        <Route path="/" exact component={MainCover} />
        <Route path="/" exact component={MainChoicePanel} />

        {/* Secondary */}

        {/* Coffee */}

        {/* Conservation */}

        {/* Accomodation */}

        <Route path="/" component={Footer} />
        

        </div>
      </Router>
    );
  }
}

export default App;
