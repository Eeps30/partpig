import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props){
        super(props)
            
        this.state = {
            
        }
    }

    render(){
        return (
            <div>
                <div className="container">
                    <form action="">
                        <h1 className="text-center">Sign Up for a Part Pig Account</h1>
                        <label>Email Address:</label>
                        <input type="text"/>
                        <label>Desired Username:</label>
                        <input type="text"/>
                        <label>Password:</label>
                        <input type="text"/>
                        <label>Confirm Password:</label>
                        <input type="text"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;