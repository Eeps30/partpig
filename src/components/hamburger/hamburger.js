import React from "react";
import './hamburger.css';

const Hamburger = () => (
      <div id="menuToggle">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Sell a part</li></a>
          <a href="#"><li>Buy a part</li></a>
          <a href="#"><li>About us</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
      </div>
);

export default Hamburger;