import React from 'react';
import {Link} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import "./Navbar.css"


function Navbar(props) {
  return (
    <div className="ui fluid six item huge borderless menu top fixed">
    <div class="header item">305 Mia Places</div>
      <Link className="item" to="/">Home</Link>
      <Link className="item" to="/tours">Places</Link>
      <Link className="item" to="/about">About Us</Link>
      <Link className="item" to="/contact">Contact Us</Link>
    </div>
  );
}

export default Navbar;