import React from "react";
import './hamburger.css';
import {Link} from 'react-router-dom';

const Hamburger = () => (
      <div id="menuToggle">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <Link to="/"><li>Home</li></Link>
          <Link to="/userdashboard"><li>User Dashboard</li></Link>
          <Link to="/partresults"><li>Part Results</li></Link>
          <Link to="/sellpart"><li>Sell a Part</li></Link>
          <Link to="/about"><li>About us</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>
);

export default Hamburger;