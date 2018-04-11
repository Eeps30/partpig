import React from "react";
import "./loginForm.css";

const LoginForm = () => (
    <div className="loginForm">
        <h2>Login with username</h2>
            <form action="http://localhost:8000/teampartpig/src/assets/php/login/loginSubmitted.php" method="POST">
                <label>user</label>
                <input type="text" id="email" name="user" placeholder="user"/>
                <label>Password</label>
                <input type="text" id="password" name="password" placeholder="Password"/>
                <input type="submit" value="Submit"/>
            </form>
    </div>
);

export default LoginForm;