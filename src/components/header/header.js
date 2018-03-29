import React from "react";
import './header.css';
import Hamburger from '../hamburger/hamburger';
import Login_Dropdown from '../login_dropdown/login_dropdown';

const Header = () => (
 <header>
     <div className="hamburger"><Hamburger/></div>
     <div className="logo-container">Part Pig</div>
    <div className="user-nav">
        <div className="login-container"><Login_Dropdown/></div>
    </div>    
    
 </header>
);

export default Header;