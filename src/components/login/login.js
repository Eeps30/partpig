import React from 'react';
import LoginForm from "./loginForm";
import "./login.css";

const Login = (props) => (
            <div className="login-container">
               <LoginForm {...props}/>
            </div>
        );
        
export default Login;