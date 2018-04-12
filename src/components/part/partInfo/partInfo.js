import React from 'react';
import './partInfo.css';
import {Link} from 'react-router-dom';
import fb from '../../../assets/images/facebook.png';
import email from '../../../assets/images/email.png';

function addCart(props){
    props.addCart(props.partInfo);
    if(props.history){
        props.history.push('/partresults/'+props.filters);
    }   
}

function containsObject(obj, list) {        
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === obj.id) {
            return true;
        }
    }    
    return false;
}

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
        
        share = (
            <div className='share'>
                Share this <img src={email} /> <img src={fb} />
            </div>
        );
    }
    if(props.isCart){
        removeButton = <button className='button-link' onClick={()=>props.removePart(props.partInfo)}>Remove</button>
    }else{
        if(containsObject(props.partInfo,props.cartParts)){
            buyButton = <button className='disabled addButton'>Added</button>;            
        }else{
            buyButton = <button className='button-link addButton' onClick={()=>{addCart(props)}}>Add to Cart</button>;
        }
    }
    return (
        <div className={props.infoClass}>
            {share}
            <span>{props.partInfo.brand}</span> <span className="partNumber">P/N: {props.partInfo.partNumber} </span>
            <h3 className="productTitle">{props.partInfo.title}</h3>
            <span><b>{props.partInfo.category} - {props.partInfo.make} {props.partInfo.model} {props.partInfo.year} </b></span>
            
            <p className="productPrice">${props.partInfo.price} {buyButton} {removeButton}</p>           
            {details}
        </div> 
    );
}


export default PartInfo;