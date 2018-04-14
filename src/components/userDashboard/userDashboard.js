import React, {Component} from 'react';
import './userDashboard.css';
import Loading from '../loading/loading';
import axios from 'axios';
import UserParts from './userParts/userParts';
import UserHistory from './userHistory/userHistory';
import UserSettings from './userSettings/userSettings';
import UserDrafts from './userDrafts/userDrafts';
import UserHome from './userHome/userHome';
import WatchList from './watchList/watchList';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class UserDashboard extends Component {
        
    constructor(props){
        super(props);
        const userId = localStorage.getItem('user');
        this.state = {
            isLoading: false,  
            seller_id: userId,
            activeTab: "userParts"          
        }
    }
  
    render(){

        return (            
            <div className="userDashboard">
                <div className="dashboardHeader"><h2>User Dashboard</h2></div>  
                <div className="dashboardTabs">
                    <Link className="tabLinks" to="/dashboard/activeparts"><div className="tabButton">Active</div></Link>
                    <Link className="tabLinks" to="/dashboard/partdrafts" ><div className="tabButton">Drafts</div></Link>
                    <Link className="tabLinks" to="/dashboard/watchlist" ><div className="tabButton">Watching</div></Link>
                    <Link className="tabLinks" to="/dashboard/searchhistory" ><div className="tabButton">History</div></Link>
                    <Link className="tabLinks" to="/dashboard/accountsettings" ><div className="tabButton">Settings</div></Link>  
                </div>                   
                <div className="tabContent">
                    <Route path='/dashboard/activeparts' render={props => <UserParts userId={this.state.seller_id} {...props}/>}/>
                    <Route path='/dashboard/partdrafts' component={UserDrafts}/>
                    <Route path='/dashboard/searchhistory' component={UserHistory}/>
                    <Route path='/dashboard/watchlist' component={WatchList}/>
                    <Route path='/dashboard/accountsettings' component={UserSettings}/>
                </div>
            </div> 
        )    
    }
}
    
export default UserDashboard