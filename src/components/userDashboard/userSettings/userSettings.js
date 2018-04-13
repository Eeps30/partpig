import React, {Component} from 'react';
import './userSettings.css';
import {Link} from 'react-router-dom';
import Loading from '../../loading/loading';
import axios from 'axios';


class UserSettings extends Component {
        
    constructor(props){
        super(props);
        this.state = {
            // partInfo:{},
            // isLoading: false,  
            // seller_id: 2          
        }
    }
    
        render(){
            return  (

                <div className="userPartsContainer">     
                    <div className="userPartsList">
                        <h2>Your Settings</h2>
                        
                    </div>
                </div>
            );
                    
    }
}

export default UserSettings