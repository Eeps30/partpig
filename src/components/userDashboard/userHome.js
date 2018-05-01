import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loading from '../tools/loading/loading';
import axios from 'axios';


class UserHome extends Component {
        
 
        render(){

        return  (
            <div className="userDashboard">     
                <div className="dashboardTitle">
                    <h1>{this.props.userData} Welcome to your user dashboard!</h1>
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
            </div>     
        );
                    
    }
}

export default UserHome