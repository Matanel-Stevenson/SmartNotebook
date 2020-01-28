import React, { Component } from "react";
import Moment from "react-moment";
import "moment-timezone";

class Header extends Component {
  render() {
    return (
      <div id="container">
        <Moment />
      </div>
    );
  }
}

export default Header;
