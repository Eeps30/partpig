import React, {Component} from 'react';
import './signUp.css';

class SignUp extends Component {
    constructor(props){
        super(props)
            
        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPass: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            email: event.target.value
        })
    }

    handleUserChange(event){
        this.setState({
            username: event.target.value
        })
    }

    handlePassChange(event){
        this.setState({
            password: event.target.value
        })
    }

    handleConfirm(event){
        this.setState({
            confirmPass: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();
        console.log('You submitted');
    }

    render(){
        return (
            <div>
                <div className="outer-container">
                    <div className="inner-container">
                        <form>
                            <h2>Create an Account</h2>
                            <label>Email Address:</label>
                            <input value={this.state.email} onChange={this.handleChange.bind(this)} type="text"/>
                            <label>Desired Username:</label>
                            <input value={this.state.username} onChange={this.handleUserChange.bind(this)} type="text"/>
                            <label>Password:</label>
                            <input value={this.state.password} onChange={this.handlePassChange.bind(this)} type="text"/>
                            <label>Confirm Password:</label>
                            <input value={this.state.confirmPass} onChange={this.handleConfirm.bind(this)} type="text"/>
                            <button onClick={this.onSubmit.bind(this)}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;