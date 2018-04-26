import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './error.css';

class AxiosError extends Component {
    constructor(props) {
        super(props);
       
        this.onButtonClick = this.onButtonClick.bind(this);
    }
        render(){
            return  (

                <div className="errorContainer">     
                    <div className="errorMessage">
                        <div className="errorTitle">
                        <p id="errorHeader">Server Error</p>
                        </div>
                        <h1>Sorry, there was an error in retrieving your data</h1>
                        <p>Part pig is still in beta, please leave us feedback about what broke and we will fix it!
                        </p>
                        <p>
                             Thanks, 
                            the Part Pig team
                        </p>
                        <button className="button-link feedbackBtn" onClick={this.onButtonClick}>Contact Us</button>
                    
                    </div>
                </div>
            );
            
        }
        onButtonClick(){
            this.props.history.push('/contact');         }
    }

export default AxiosError;