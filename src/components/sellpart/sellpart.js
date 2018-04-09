import React, {Component} from "react";
import "./sellpart.css";
import SellPartForm from "./sellPartForm"

const SellPart = () => {
        return(
            <div className="sell-part-form">
                <div className="form-style-10">
                <h1>List your part for sale!<span>Complete the simple steps below!</span></h1>
                    <SellPartForm/>
                 </div>
            </div>  
        );
    
    }      


export default SellPart;