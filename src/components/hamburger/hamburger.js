import React from "react";
import './hamburger.css';
import {Link} from 'react-router-dom';

const Hamburger = (props) => {

    function hideMenu(){

    }

    let dashBoard = <Link onCLick={hideMenu} to="/dashboard"><li>User Dashboard</li></Link>
    let sellPartIcon = <Link onCLick={hideMenu} to="/sellpart"><li>Sell a Part</li></Link>  
    if(!props.userId){
        dashBoard = <Link onCLick={hideMenu} to="/login"><li>User Dashboard</li></Link>
        sellPartIcon = <Link onCLick={hideMenu} to="/login"><li>Sell a Part</li></Link> 
    }

    return(
          <div id="menuToggle">
            <input type="checkbox"/>
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <Link onCLick={hideMenu} to="/"><li>Home</li></Link>
              {dashBoard}
              {sellPartIcon}
              <Link onCLick={hideMenu} to="/about"><li>About us</li></Link>
              <Link onCLick={hideMenu} to="/contact"><li>Contact</li></Link>
            </ul>
          </div>
    );
}

export default Hamburger;