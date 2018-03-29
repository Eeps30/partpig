import React from "react";
import './login_dropdown.css';
import LoginIcon from '../../assets/icons/loginicon.png'

const Login_Dropdown = () => (
    <div className="login-dropdown">
    <div><img src={LoginIcon} className="login-icon"/></div>
        <div className="login-dropdown-content">
            <a href="#">Login</a>
            <a href="#">Register</a>
        </div>
  </div>
);

export default Login_Dropdown;


