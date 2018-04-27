import React from "react";
import Part from '../part/part';
import './cart.css';
import {Link} from 'react-router-dom';
import emptyCart from '../../assets/images/cartEmpty.png'

const Cart = (props) => {

    const userId = localStorage.getItem('user');
    let total = 0;
    let list = (<div className='emptyMessage'>
                    <img src={emptyCart}/>
                    <p>Your Shopping Cart is Empty</p>
                    <Link  className='button-link' to={props.urlBack}>Keep Shopping</Link>
                </div>
                );
    let checkoutButton = <Link  onClick={e => e.preventDefault()} className='disabled' to={"/checkout"}>Proceed to checkout</Link>;

    function checkIfUserIsLogin(){
        if(userId){
            props.history.push('/checkout');
        }else{
            props.history.push('/login');
        }
    }

    if(props.cartParts.length > 0){
        list = props.cartParts.map(function(item,index){
            total += item.price_usd;
            return ( 
                <div key={index} className='cartPart'> 
                      <Part isCart={true} removePart={props.removePart} imageClass='imageCartContainer' infoClass='productCart' partInfo={item} filters={props.filters}/>  
                </div>
            )   
        }); 
        checkoutButton = <button onClick={checkIfUserIsLogin.bind(this)} className='button-link'>Proceed to checkout</button>;
    }
    return (
        <div className="container">
            <div className="goBack">
                <Link  className='button-link' to={props.urlBack}>Go Back</Link>
            </div>
            <div className="cartPartsContainer">            
                <span>YOUR SHOPPING CART</span>
                {list}                
            </div>
            <div className='cartTotal'>
                <div className="cartTitle"><b>SUBTOTAL ({list.length} items)</b> ${total}</div>
                <div className="cartData">
                    <p>TAX: <span>$0.00</span></p>
                    <hr/>
                    <p>TOTAL:  <span>${total}</span></p>
                    <hr/>
                    <div className="cartCheckout">
                        {checkoutButton}
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default Cart