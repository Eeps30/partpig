import React from "react";
import './header.css';
import Hamburger from '../hamburger/hamburger';
import LoginIcon from '../../assets/icons/loginicon.png';
import {Link} from 'react-router-dom';
import cartIcon from '../../assets/images/cart.png';
import CartMessage from './../cart/cartMessage';

const Header = (props) => (
 <header>
     <div className="hamburger"><Hamburger/></div>     
     <div className="logo-container">Part Pig</div>
     <div className="user-nav">
        <Link className="sellPartButton" to="/sellpart"> Sell Part</Link>
        <span className='cartCount'>0</span>
        <Link to={"/cart"}><img src={cartIcon} className="cartIcon" /></Link>
        <Link to="/login"><img src={LoginIcon} className="login-icon"/></Link>
    </div>
    <CartMessage/>
    
 </header>
);

export default Header;

