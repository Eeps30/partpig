import React from 'react';
import './partInfo.css';

const PartInfo = (props) => {

    let details = '';    
    if(props.isDetails){
        details = (
            <div>
                <hr/>                
                <p className="productDescription">{props.partInfo.description}</p>
                <p className="productCondition">Condition: {props.partInfo.condition}</p>
                <p className="productLocation">Location: {props.partInfo.location}</p>
                <p className="productSize">Size: {props.partInfo.size}</p>
                <p>Selling by {props.partInfo.seller} > <a href="">Contact {props.partInfo.seller}</a></p>
                <hr/>
                <div className="addButton">                
                    <button>Add To Wishlist</button>
                </div>
            </div>           
        );
    }
    return (
        <div className={props.isDetails ? "productDetailsContainer":"productContainer"}>
            <span className="productBrand">{props.partInfo.brand}</span>
            <h3 className="productTitle">{props.partInfo.title}</h3>
            <span><b>{props.partInfo.category} - {props.partInfo.make} {props.partInfo.model} {props.partInfo.year} </b></span>
            <p>Part # {props.partInfo.partNumber} </p>
            <p className="productPrice">${props.partInfo.price}</p>
            {details}
        </div> 
    );
}

export default PartInfo;