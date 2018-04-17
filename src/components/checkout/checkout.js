import React, {Component} from "react";
import './checkout.css';
import {Link} from 'react-router-dom';
import Field from './field';
import Loading from '../loading/loading';
import axios from 'axios';
import inputs from './fieldsData';

class Checkout extends  Component {

    constructor(props){
        super(props);

        this.state = { 
            isLoading: false,
            userInfo:{}
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    componentDidMount(){
        const userId = localStorage.getItem('user');
        if(userId){
            const params = {             
                user_id: parseInt(userId)
            };
            const url = 'http://localhost:8000/teampartpig/src/assets/php/CheckoutEndpoints/shippingInfo.php';        
            axios.get(url,{params}).then(resp=>{
                this.setState({  
                    isLoading: true,
                    userInfo:resp.data.data[0]
                });                                
            }).catch(err => {
                console.log('error is: ', err);
            });
        }else{
            this.setState({  
                isLoading: true
            }); 
        }   
       
        //Change the status of the parts in the cart to incheckout
        let partsId = [];
        if(this.props.cartParts.length > 0){
            partsId = this.props.cartParts.map(function(item,index){                
                return item.id
            }); 
        }
        const paramsStatus = {             
            status: 'incheckout',
            id:partsId
        };
        const url = 'http://localhost:8000/teampartpig/src/assets/php/CheckoutEndpoints/multipleStatusUpdates.php';        
        axios.get(url,{paramsStatus}).then(resp=>{
            console.log(resp.data);
        }).catch(err => {
            console.log('error is: ', err);
        });    
    }

    handleInputChange(event){
        const {value,name} = event.target;
        const newUserInfo = {...this.state.userInfo};
        newUserInfo[name] = value;
        this.setState({
            userInfo:newUserInfo
        });
        
    }

    render(){

        if (!this.state.isLoading) {
            return <Loading />;
        }
        let total = 0;
        let listParts = [];

        const fields = inputs.map(((field, index) => {                    
            return <Field key={index} {...field} handleInputChange={this.handleInputChange} value={this.state.userInfo[field.name] || ''}/>
        }).bind(this));

        if(this.props.cartParts.length > 0){
            listParts = this.props.cartParts.map(function(item,index){
                total += item.price_usd;
                return (                     
                    <li key={index} className='checkOutPart'>{item.part_name}<span>${item.price_usd}</span></li>                    
                )   
            }); 
        }

        return (
            <div className='container'>
                <div className='formCheckoutContainer'>
                    <span>Checkout</span>
                    <hr/>
                    <div className='shippingAddress'>                        
                        <span>Shipping Address</span>
                        <hr/>
                        {fields}
                    </div> 
                    <div className='shippingAddress'>                        
                        <span>Billing Address</span>
                        <hr/>
                        {fields}
                    </div>                   
                </div>
                <div className='checkoutTotal'>
                    <div className="cartTitle"><b>CART SUMARY: ({listParts.length} items)</b> </div>
                    <div className="checkoutList">
                        <ul>
                            {listParts}
                        </ul>
                        <Link className='button-link' to={"/cart"}>EDIT CART</Link>
                    </div>
                    <hr/>
                    <div className="cartData">
                        <p>SUBTOTAL:  <span>${total}</span></p> 
                        <p>SHIPPING:  <span>$0.00</span></p> 
                        <p>TAX: <span>$0.00</span></p>                   
                        <p>TOTAL:  <span>${total}</span></p> 
                    </div>
                    <div>
                        <Link className='button-link' to={"/"}>Complete Purchase</Link>
                    </div>                   
                </div>
            </div>
        );
    }
}
 
export default Checkout