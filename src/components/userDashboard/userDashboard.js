import React, {Component} from 'react';
import './userDashboard.css';
import {Link} from 'react-router-dom';
import Loading from '../loading/loading';
import axios from 'axios';
import UserParts from './userParts'


const UserDashboard = (props) => {

        return (
            <div className="container">
                <div className="cartPartsContainer"> 
                <UserParts/>             
                </div>
            
            </div>
        );
    };
    
    export default UserDashboard