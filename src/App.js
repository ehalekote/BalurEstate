import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";
import MainCover from "./components/MainCover/MainCover";


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navbar />
        <MainCover />
      </div>
    );
  }
}

export default App;
