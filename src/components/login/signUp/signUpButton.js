import React from "react";
// import "./registerForm.css";
import {Link} from 'react-router-dom';

const SignUpButton = () => (
    <div className="register-container">
    <p>no account? no problem! sign up now!</p>
    <Link className="buttonText" to={"/signup"}> SIGN UP </Link>
    </div>
);

export default SignUpButton;