import React, {Component} from "react";
import './checkout.css';
import {Link} from 'react-router-dom';

class Checkout extends  Component {


    render(){

        let total = 0;
        let listParts = [];
        if(this.props.cartParts.length > 0){
            listParts = this.props.cartParts.map(function(item,index){
                total += item.price_usd;
                return ( 
                    <div key={index} className='checkOutPart'> 
                          <p>{item.part_name}<span>${item.price_usd}</span></p>
                    </div>
                )   
            }); 
        }

        return (
            <div className='container'>
                <div className='formCheckoutContainer'>
                    <span>Checkout</span>
                    <hr/>
                </div>
                <div className='checkoutTotal'>
                    <div className="cartTitle"><b>CART SUMARY: ({listParts.length} items)</b> </div>
                    <div className="checkoutList">
                        {listParts}
                        <Link to={"/cart"}>EDIT CART</Link>
                    </div>
                    <hr/>
                    <div className="cartData">
                        <p>SUBTOTAL:  <span>${total}</span></p> 
                        <p>SHIPPING:  <span>$0.00</span></p> 
                        <p>TAX: <span>$0.00</span></p>                   
                        <p>TOTAL:  <span>${total}</span></p> 
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Checkout