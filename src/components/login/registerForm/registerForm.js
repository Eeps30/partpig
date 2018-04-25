import React from "react";
import "./registerForm.css";
import {Link} from 'react-router-dom';

const RegisterForm = () => (
    <div className="register-container">
    <h3>No account? No problem!</h3>
    <div className="register-button">
        <Link to={"/signup"}> SIGN UP </Link>
    </div>
    </div>
);

export default RegisterForm;