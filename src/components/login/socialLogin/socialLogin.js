import React from "react";
import "./socialLogin.css";
import FacebookIcon from "./facebooklogin.png";
import GoogleLogin from "./googlelogin.png";

const SocialLogin = () => (
    <div className="socialLogin">
        <h2>Login with social account</h2>
        <img className="socialButton" src={FacebookIcon}></img>
        <img className="socialButton" src={GoogleLogin}></img>
    </div>
);

export default SocialLogin;