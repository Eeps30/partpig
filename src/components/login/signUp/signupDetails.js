import React, { Component } from 'react';
import './signUp.css';
import axios from 'axios';
import Field from '../../tools/field';
import inputs from './addressFieldsData';


class SignUpDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            address: {
                city: "Irvine",
                first_name: "John",
                last_name: "Doe",
                phone_number: "111-222-3333",
                state_abbr: "CA",
                street_address: "1234 Street",
                zipcode: "92627",
                country:'USA'
            },
            sameAddress: false,
            addressErrors: {},
        }
        // this.userId = localStorage.getItem('user');
        this.handleBillingInputChange = this.handleBillingInputChange.bind(this);
    }



    onSubmit(event) {
        event.preventDefault();


    }
 
    handleBillingInputChange(event) {
        const { value, name } = event.target;
        const newUserInfo = { ...this.state.address };
        newUserInfo[name] = value;
        this.setState({
            address: newUserInfo
        });
    }
 

    billinghandleOnBlur(event) {
        const { name, value, placeholder, required } = event.target;
        const newBillingErrors = { ...this.state.billingErrors };
        if (value === '' && required) {
            '';
        } else {
            delete newBillingErrors[name];
            this.setState({
                addressErrors: newBillingErrors
            });
        }
    }
    buttonSubmit(){
        this.props.history.push('/login');
    }
    render() {

        let addressFields = '';
        // if (!this.state.sameAddress) {
        addressFields = inputs.map(((field, index) => {
            return <Field key={index} {...field} error={this.state.addressErrors[field.name]}
                handleInputChange={this.handleBillingInputChange} handleOnBlur={this.billinghandleOnBlur.bind(this)} value={this.state.address[field.name] || ''} />
        }).bind(this));
        // }

        console.log(this.state);

        return (
            <div>
                <div className="outer-container">
                    <div className="inner-container contactDetails-container">
                        <h1>Thanks for making an account with PartPig Beta!</h1>
                        <h2>Feel free to add additional information</h2>
                        <h2> or just go with the defaults </h2>
                        <div className="formFields">
                            {addressFields}
                            <button className="signUp_Button accountDetails_Button" onClick={this.buttonSubmit.bind(this)}>Login With My New Account!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpDetails;