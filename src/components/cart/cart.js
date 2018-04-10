import React from "react";
import Part from '../part/part';
import './cart.css';
import {Link} from 'react-router-dom';

const Cart = (props) => {

    let total = 0;
    let list = <h1 className='emptyMessage'>You don't have any item added to the cart</h1>;

    if(props.cartParts.length > 0){
        list = props.cartParts.map(function(item,index){
            total += item.price;
            return ( 
                <div key={index} className='cartPart'> 
                      <Part isCart={true} removePart={props.removePart} imageClass='imageCartContainer' infoClass='productCart' partInfo={item} filters={props.filters}/>  
                </div>
            )   
        }); 
    }
    return (
        <div className="container">
            <div className="cartPartsContainer">
                {list}                
            </div>
            <div className='cartTotal'>
                <p><b>Total ({list.length} items):</b> ${total}</p>
                <Link className='button-link' to={"/checkout"}>Proceed to checkout</Link>
            </div>
        </div>
    );
};

export default Cart