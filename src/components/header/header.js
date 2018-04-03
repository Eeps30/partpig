import React from "react";
import './header.css';
import Hamburger from '../hamburger/hamburger';
import LoginIcon from '../../assets/icons/loginicon.png';
import {Link} from 'react-router-dom';

const Header = () => (
 <header>
     <div className="hamburger"><Hamburger/></div>
     <div className="logo-container">Part Pig</div>
     <div className="user-nav"><Link to="/login"><img src={LoginIcon} className="login-icon"/></Link></div>
    
 </header>
);

export default Header;

