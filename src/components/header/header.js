import React from "react";
import './header.css';
import Hamburger from '../hamburger/hamburger';
import LoginDropdown from '../loginDropdown/loginDropdown';

const Header = () => (
 <header>
     <div className="hamburger"><Hamburger/></div>
     <div className="logo-container">Part Pig</div>
    <div className="user-nav">
        <div className="login-container"><LoginDropdown/></div>
    </div>    
    
 </header>
);

export default Header;