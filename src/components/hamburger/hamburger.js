import React from "react";
import './hamburger.css';

const Hamburger = () => (
      <div id="menuToggle">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="/"><li>Home</li></a>
          <a href="/partresults"><li>Part Results</li></a>
          <a href="/sellpart"><li>Sell a Part</li></a>
          <a href="/about"><li>About us</li></a>
          <a href="/contact"><li>Contact</li></a>
        </ul>
      </div>
);

export default Hamburger;