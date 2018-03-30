import React from "react";
import './loginDropdown.css';
import LoginIcon from '../../assets/icons/loginicon.png'

const LoginDropdown = () => (
    <div className="login-dropdown">
    <div><img src={LoginIcon} className="login-icon"/></div>
        <div className="login-dropdown-content">
            <a href="/login">Login</a>
            <a href="#">Register</a>
        </div>
  </div>
);

export default LoginDropdown;


