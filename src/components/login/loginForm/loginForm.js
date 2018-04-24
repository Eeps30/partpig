import React, { Component } from "react";
import "./loginForm.css";
import axios from 'axios';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                user: '',
                password: ''
            },
            loginError: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = e.target['user'].value;
        const password = e.target['password'].value;
        const params = {
            user, password
        }
        const url = 'http://localhost:8000/teampartpig/src/assets/php/login/loginSubmitted.php';
        axios({
            url: url,
            method: 'post',
            data: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(resp => {
            if (resp.data.success) {
                this.props.setUserData(resp.data.data);
                this.props.history.push('/dashboard');
            }
            else {
                console.log("incorrect login");
                this.setState({
                    loginError: true
                });
            }
        }).catch(err => {
            console.log('error is: ', err);
        });
    }

    render() {
        console.log("loginError is : ", this.state.loginError);
        let errorMessage = '';
        if (this.state.loginError) {
            errorMessage = <h2 className="loginFormErrorMessage">Username or Password Incorrect</h2>;
        }

        return (
            <div className="loginForm">

                <h2>Login with username</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" id="user" name="user" placeholder="user" onChange={this.handleUserInputChange.bind(this)} required/>
                    <label>Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" onChange={this.handlePasswordInputChange.bind(this)} required/>
                    <input type="submit" value="Sign In" />
                </form>
                {errorMessage}
            </div>
        );
    }
    handleUserInputChange(e) {
        const { value } = e.target
        this.setState({
            form: {
                ...this.state.form,
                user: value
            },
            ...this.state.loginError
        });
    }
    handlePasswordInputChange(e) {
        const { value } = e.target
        this.setState({
            form: {
                ...this.state.form,
                password: value
            },
            ...this.state.loginError
        });
    }
}

export default LoginForm;