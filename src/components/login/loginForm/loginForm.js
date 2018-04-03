import React from "react";
import "./loginForm.css";

const LoginForm = () => (
    <div className="loginForm">
        <h2>Login with email address</h2>
            <form>
                <label>Email address</label>
                <input type="text" id="email" name="email" placeholder="Email address"/>
                <label>Password</label>
                <input type="text" id="password" name="password" placeholder="Password"/>
                <input type="submit" value="Login"/>
            </form>
    </div>
);

export default LoginForm;