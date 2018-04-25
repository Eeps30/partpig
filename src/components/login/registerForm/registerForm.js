import React from "react";
import "./registerForm.css";
import {Link} from 'react-router-dom';

const RegisterForm = () => (
    <div className="register-container">
    <Link className="buttonText" to={"/signup"}> SIGN UP </Link>
    </div>
);

export default RegisterForm;