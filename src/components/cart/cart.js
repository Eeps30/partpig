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
            <Link to={props.urlBack}><div>Back to results</div></Link>
            <div className="cartPartsContainer">
                {list}                
            </div>
            <div className='cartTotal'>
                <div className="cartTitle"><b>SUBTOTAL ({list.length} items)</b> ${total}</div>
                <div className="cartData">
                    <p>TAX: <span>$0.00</span></p>
                    <hr/>
                    <p>TOTAL:  <span>${total}</span></p>
                    <hr/>
                    {checkoutButton}
                </div>
            </div>
        </div>
    );
};

export default Cart