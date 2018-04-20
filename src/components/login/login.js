import React from 'react';
import LoginForm from "./loginForm/loginForm";
import RegisterForm from "./registerForm/registerForm";
import SocialLogin from "./socialLogin/socialLogin";
import "./login.css";

const Login = (props) => (
            <div className="login-container">
               {/* <SocialLogin/>  */}
               <LoginForm {...props}/>
               <RegisterForm/>
            </div>
        );


export default Login;