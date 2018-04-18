import React, {Component} from 'react';
import './userHome.css';
import {Link} from 'react-router-dom';
import Loading from '../../loading/loading';
import axios from 'axios';


class UserHome extends Component {
        
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
            <div className="userDashboard">     
                <div className="dashboardTitle">
                    <h1>Welcome to your user dashboard!</h1>
                </div>
                <Link to={"/dashboard/activeparts"}>
                    <div className="statContainer">
                        Active Listings 
                    </div>
                </Link>
                <Link to={"/dashboard/partdrafts"}>
                    <div className="statContainer">
                        Saved Drafts 
                    </div>
                </Link>
                <Link to={"/dashboard/activeparts"}>
                    <div className="statContainer">
                        Sold Parts 
                    </div>
                </Link>
            </div>     
        );
                    
    }
}

export default UserHome