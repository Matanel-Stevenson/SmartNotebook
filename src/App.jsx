import React, { Component } from "react";
// import Moment from "react-moment";
import "moment-timezone";
import "./App.css";
import Editor from "./Components/Editor";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Editor />
      </div>
    );
  }
}

export default App;
