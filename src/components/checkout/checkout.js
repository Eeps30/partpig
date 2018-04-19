import React, { Component } from "react";
import './checkout.css';
import {Link} from 'react-router-dom';
import Field from '../tools/field';
import Loading from '../loading/loading';
import axios from 'axios';
import inputs from './fieldsData';

class Checkout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            billingAddress: {},
            shippingAddress: {},
            sameAddress: false,
            shippingErrors: {},
            billingErrors: {},
            shippingPrice: 14.99,
            subtotal: 0,
            saveShippingAddress: false,
            saveBillingAddress: false
        }
        this.userId = localStorage.getItem('user');
        this.handleShippingInputChange = this.handleShippingInputChange.bind(this);
        this.handleBillingInputChange = this.handleBillingInputChange.bind(this);
    }


    componentDidMount() {
        let subtotal = 0;
        if (this.props.cartParts.length > 0) {
            this.props.cartParts.map(function (item, index) {
                subtotal += item.price_usd;
            });
        }

        const shipping = JSON.parse(localStorage.getItem('shipping'));
        const billing = JSON.parse(localStorage.getItem('billing'));
        if (this.userId) {
            if (shipping && billing) {
                //if we saved the addresses before when we went back
                this.setState({
                    isLoading: true,
                    shippingAddress: shipping,
                    billingAddress: billing,
                    sameAddress: this.compareTwoAddresses(shipping, billing),
                    subtotal: subtotal
                });
            } else {
                //Shiping Address
                const params = {
                    user_id: parseInt(this.userId),
                    addressType: 'shipping'
                };
                const url = 'http://localhost:8000/teampartpig/src/assets/php/CheckoutEndpoints/getAddressInfo.php';
                axios.get(url, { params }).then(resp => {
                    this.setState({
                        shippingAddress: resp.data.data[0]
                    });
                    //billing Address     
                    const params = {
                        user_id: parseInt(this.userId),
                        addressType: 'billing'
                    };
                    const url = 'http://localhost:8000/teampartpig/src/assets/php/CheckoutEndpoints/getAddressInfo.php';
                    axios.get(url, { params }).then(resp => {
                        this.setState({
                            isLoading: true,
                            billingAddress: resp.data.data[0],
                            sameAddress: this.compareTwoAddresses(this.state.shippingAddress, resp.data.data[0]),
                            subtotal: subtotal
                        });
                    }).catch(err => {
                        console.log('error is: ', err);
                    });
                }).catch(err => {
                    console.log('error is: ', err);
                });
            }
        } else {
            //anonymous user
            this.setState({
                isLoading: true,
                subtotal: subtotal
            });
        }

        //Change the status of the parts in the cart to incheckout
        let partsId = [];
        if (this.props.cartParts.length > 0) {
            partsId = this.props.cartParts.map(function (item, index) {
                return item.id
            });
        }
        const params = {
            status: 'incheckout',
            id: JSON.stringify(partsId)
        };
        const urlStatus = 'http://localhost:8000/teampartpig/src/assets/php/CheckoutEndpoints/multipleStatusUpdates.php';
        axios.get(urlStatus, { params }).then(resp => {
            console.log(resp.data);
        }).catch(err => {
            console.log('error is: ', err);
        });
    }

    compareTwoAddresses(address1, address2) {
        return address1.street_address === address2.street_address && address1.city === address2.city && address1.state === address2.state && address1.zipcode === address2.zipcode
    }

    handleShippingInputChange(event) {
        const { value, name } = event.target;
        const newUserInfo = { ...this.state.shippingAddress };
        newUserInfo[name] = value;
        this.setState({
            shippingAddress: newUserInfo
        });
    }

    handleBillingInputChange(event) {
        const { value, name } = event.target;
        const newUserInfo = { ...this.state.billingAddress };
        newUserInfo[name] = value;
        this.setState({
            billingAddress: newUserInfo
        });
    }

    backToCart() {
        //Change the status of the parts in the cart to available
        localStorage.setItem('shipping', JSON.stringify(this.state.shippingAddress));
        localStorage.setItem('billing', JSON.stringify(this.state.billingAddress));
        let partsId = [];
        if (this.props.cartParts.length > 0) {
            partsId = this.props.cartParts.map(function (item, index) {
                return item.id
            });
        }
        const params = {
            status: 'available',
            id: JSON.stringify(partsId)
        };
        const urlStatus = 'http://localhost:8000/teampartpig/src/assets/php/CheckoutEndpoints/multipleStatusUpdates.php';
        axios.get(urlStatus, { params }).then(resp => {
            if (resp.data.success) {
                this.props.history.push('/cart');
            }
        }).catch(err => {
            console.log('error is: ', err);
        });
    }

    handleCheckbox(event) {
        this.setState({
            sameAddress: event.target.checked
        });
    }

    completePurchase() {
        if (this.userId) {
            let partsId = [];
            if (this.props.cartParts.length > 0) {
                partsId = this.props.cartParts.map(function (item, index) {
                    return item.id
                });
            }

            const params = {
                status: 'sold',
                buyer_id: this.userId,
                id: JSON.stringify(partsId)
            };
            const urlStatus = 'http://localhost:8000/teampartpig/src/assets/php/CheckoutEndpoints/multipleStatusUpdates.php';
            axios.get(urlStatus, { params }).then(resp => {
                if (resp.data.success) {
                    localStorage.removeItem("shipping");
                    localStorage.removeItem("billing");
                    if (this.state.saveShippingAddress || this.state.saveBillingAddress) {
                        //Save addresses in the DB
                        const url = "http://localhost:8000/teampartpig/src/assets/php/CheckoutEndpoints/updateAddressInfo.php";

                        const data = {
                            "user_id": this.userId,
                            "shipping": this.state.shippingAddress,
                            "billing": this.state.sameAddress ? this.state.shippingAddress : this.state.billingAddress
                        }
                        axios({
                            url: url,
                            method: 'post',
                            data: data,
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        }).then(resp => {
                            console.log("Server Response:", resp);
                        }).catch(err => {
                            console.log("There was an error:");
                        });
                    }
                    
                    //Formatting part information for email
                    let emailPartArray = this.props.cartParts.map(x => [x.part_name, x.price_usd]);
                    let partHtmlString = '';
                    let total = parseFloat(this.state.shippingPrice); 
                    emailPartArray.forEach((part, index) => { partHtmlString += `<h3 style="text-align:center">${part[0]} for: $ ${part[1]} </h3>`; 
                    total += parseFloat(part[1])});

                    this.props.removeAllPartsFromCart(this.props.cartParts);
                    this.props.history.push('/checkoutComplete/' + resp.data.data.order_number);

                    const emailUrl = "http://localhost:8000/teampartpig/src/assets/php/Mail/transactionalEmail.php";
                    const emailData = {
                        name: `${this.state.billingAddress.first_name} ${this.state.billingAddress.last_name} `,
                        email: `${this.state.billingAddress.email}`,
                        body: `<h1 style="color:black;text-align:center">Thank you, ${this.state.billingAddress.first_name} ${this.state.billingAddress.last_name}, for participating in Part Pig's beta trial.</h1>
                        <hr/>
                        <h2 style="color:black;text-align:center">This is just a test email. No charges were made to your account</h2>
                        <h2 style="color:black;text-align:center">You bought the following parts:</h2>
                        ${partHtmlString}
                        <h3 style="color:black;text-align:center">Shipping charge is:  ${this.state.shippingPrice}</h3>
                        <h3 style="color:black;text-align:center">Your total is:  ${total.toFixed(2)}</h3>
                        <h2 style="color:black;text-align:center"> Your order number is: <span style="color:red">${resp.data.data.order_number}</span></h2>`,
                        subject: "Part Pig test",
                        receipt: true
                    };
                    console.log('information', emailData);
                    axios({
                        url: emailUrl,
                        method: 'post',
                        data: emailData,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).then(resp => {
                        console.log("Server email Response:", resp);
                    }).catch(err => {
                        console.log("There was an error:", err);
                    });
                }
            }).catch(err => {
                console.log('error is: ', err);
            });

        }
    }

    shippinghandleOnBlur(event) {
        const { name, value, placeholder, required } = event.target;
        const newShippingErrors = { ...this.state.shippingErrors };
        if (value === '' && required) {
            newShippingErrors[name] = placeholder + ' is requiered';
        } else {
            delete newShippingErrors[name];
        }
        this.setState({
            shippingErrors: newShippingErrors
        });
    }

    billinghandleOnBlur(event) {
        const { name, value, placeholder, required } = event.target;
        const newBillingErrors = { ...this.state.billingErrors };
        if (value === '' && required) {
            newBillingErrors[name] = placeholder + ' is requiered';
        } else {
            delete newBillingErrors[name];
        }
        this.setState({
            billingErrors: newBillingErrors
        });
    }

    handleShippingMethodClick(event) {
        this.setState({
            shippingPrice: parseFloat(event.target.value)
        });
    }

    handleSaveShippingAddress() {
        const flag = !event.target.value
        this.setState({
            saveShippingAddress: flag
        });
    }

    handleSaveBillingAddress() {
        const flag = !event.target.value
        this.setState({
            saveBillingAddress: flag
        });
    }

    render() {

        if (!this.state.isLoading) {
            return <Loading />;
        }

        let listParts = [];

        if (this.props.cartParts.length > 0) {
            listParts = this.props.cartParts.map(function (item, index) {
                return (
                    <li key={index} className='checkOutPart'>{item.part_name}<span>${item.price_usd}</span></li>
                )
            });
        }

        const shipingFields = inputs.map(((field, index) => {
            return <Field key={index} {...field} error={this.state.shippingErrors[field.name]} handleOnBlur={this.shippinghandleOnBlur.bind(this)} handleInputChange={this.handleShippingInputChange} value={this.state.shippingAddress[field.name] || ''} />
        }).bind(this));

        let billingFields = '';
        if (!this.state.sameAddress) {
            billingFields = inputs.map(((field, index) => {
                return <Field key={index} {...field} error={this.state.billingErrors[field.name]} handleInputChange={this.handleBillingInputChange} handleOnBlur={this.billinghandleOnBlur.bind(this)} value={this.state.billingAddress[field.name] || ''} />
            }).bind(this));
        }

        let checkoutButton = <button onClick={this.completePurchase.bind(this)} className='button-link'>Complete Purchase</button>
        if (!(Object.keys(this.state.shippingErrors).length === 0) || !(Object.keys(this.state.billingErrors).length === 0)) {
            checkoutButton = <button onClick={e => e.preventDefault()} className='disabled'>Complete Purchase</button>;
        }

        return (
            <div className='container'>
                <div className='formCheckoutContainer'>
                    <span>Checkout</span>
                    <hr />
                    <form className='shippingAddress'>
                        <span>Shipping Address</span>
                        <hr />
                        {shipingFields}
                        <input type="checkbox" checked={this.state.shippingFlag} onChange={this.handleSaveShippingAddress.bind(this)} />Save the changes in the shipping address
                    </form>
                    <form className='shippingAddress'>
                        <span>Billing Address</span>
                        <hr />
                        <div className='checkbox'>
                            <input type="checkbox" checked={this.state.sameAddress} onChange={this.handleCheckbox.bind(this)} name="sameAddress" />My billing address is the same as my shipping address
                        </div>
                        {billingFields}
                        <input type="checkbox" checked={this.state.shippingFlag} onChange={this.handleSaveBillingAddress.bind(this)} />Save the changes in the billing address
                    </form>
                    <div className='shippingAddress'>
                        <span>Shipping Method</span>
                        <hr />
                        <p>Choose your shipping option
                            <select onChange={this.handleShippingMethodClick.bind(this)}>
                                <option value={14.99}>Standard (3 days): $14.99</option>
                                <option value={19.99}>Express (2 days): $19.99</option>
                                <option value={29.99}>Premium (1 day): $29.99</option>
                            </select>
                        </p>
                    </div>
                </div>
                <div className='checkoutTotal'>
                    <div className="cartTitle"><b>CART SUMARY: ({listParts.length} items)</b> </div>
                    <div className="checkoutList">
                        <ul>
                            {listParts}
                        </ul>
                        <button onClick={this.backToCart.bind(this)} className='button-link'>Go Back</button>
                    </div>
                    <hr />
                    <div className="cartData">
                        <p>SUBTOTAL:  <span>${this.state.subtotal}</span></p>
                        <p>SHIPPING:  <span>${this.state.shippingPrice}</span></p>
                        <p>TAX: <span>$0.00</span></p>
                        <p>TOTAL:  <span>${(this.state.subtotal + this.state.shippingPrice).toFixed(2)}</span></p>
                    </div>
                    <div>
                        {checkoutButton}
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout