import React from "react";
import Part from '../part/part';
import './cart.css';
import {Link} from 'react-router-dom';

const Cart = (props) => {

    let total = 0;
    let list = <h1 className='emptyMessage'>You don't have any item added to the cart</h1>;
    let checkoutButton = <Link  onClick={e => e.preventDefault()} className='disabled' to={"/checkout"}>Proceed to checkout</Link>;

    if(props.cartParts.length > 0){
        list = props.cartParts.map(function(item,index){
            total += item.price;
            return ( 
                <div key={index} className='cartPart'> 
                      <Part isCart={true} removePart={props.removePart} imageClass='imageCartContainer' infoClass='productCart' partInfo={item} filters={props.filters}/>  
                </div>
            )   
        }); 
        checkoutButton = <Link className='button-link' to={"/checkout"}>Proceed to checkout</Link>;
    }
    return (
        <div className="container">
            <div className="cartPartsContainer">
                {list}                
            </div>
            <div className='cartTotal'>
                <p><b>Total ({list.length} items):</b> ${total}</p>
                {checkoutButton}
            </div>
        </div>
    );
};

export default Cart