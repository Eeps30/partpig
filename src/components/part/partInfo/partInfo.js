import React from 'react';
import './partInfo.css';
import {Link} from 'react-router-dom';
import fb from '../../../assets/images/facebook.png';
import email from '../../../assets/images/email.png';

const PartInfo = (props) => {

    let details = '';   
    let buyButton = '';    
    let share = '';  
    let removeButton = '';
    if(props.isDetails){
        details = (
            <div>
                <hr/>                
                <p className="productDescription">{props.partInfo.description}</p>
                <p className="productCondition">Condition: {props.partInfo.condition}</p>
                <p className="productLocation">Location: {props.partInfo.city + ', '+ props.partInfo.state}</p>               
                <p>Seller: {props.partInfo.seller} <Link className='button-link' to={"/contactSeller"}>Contact</Link> </p>
            </div>           
        );
        buyButton = (
            <div className="addButton">                
                <button className='button-link' onClick={()=>props.addCart(props.partInfo)}>Add to Cart</button>
                <Link className='button-link' to={"/checkout"}>Buy Now</Link>
            </div>
        );
        share = (
            <div className='share'>
                Share this <img src={email} /> <img src={fb} />
            </div>
        );
    }
    if(props.isCart){
        removeButton = <button className='button-link' onClick={()=>props.removePart(props.partInfo)}>Remove</button>
    }
    return (
        <div className={props.infoClass}>
            {share}
            <span>{props.partInfo.brand}</span> <span className="partNumber">P/N: {props.partInfo.partNumber} </span>
            <h3 className="productTitle">{props.partInfo.title}</h3>
            <span><b>{props.partInfo.category} - {props.partInfo.make} {props.partInfo.model} {props.partInfo.year} </b></span>
            {buyButton}
            <p className="productPrice">${props.partInfo.price} {removeButton}</p> 
           
            {details}
        </div> 
    );
}

export default PartInfo;