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
                country: 'USA'
            },
            addressErrors: '',
            nameChange: false,
            addressChange: false
        }
        this.handleAddressInputChange = this.handleAddressInputChange.bind(this);
    }



    onSubmit(event) {
        event.preventDefault();


    }

    handleAddressInputChange(event) {
        const { value, name } = event.target;
        const newUserInfo = { ...this.state.address };
        newUserInfo[name] = value;
        if (name === 'first_name' || name === 'last_name') {
            this.setState({
                address: newUserInfo,
                nameChange: true
            });
        }
        else {
            this.setState({
                address: newUserInfo,
                addressChange: true
            });
        }
    }


    handleAddressOnBlur(event) {
        const { name, value, placeholder, required } = event.target;
        const newAddressErrors = { ...this.state.addressErrors };
        if (value === '' && required) {
            '';
        } else {
            delete newAddressErrors[name];
            this.setState({
                addressErrors: newAddressErrors
            });
        }
    }
    buttonSubmit() {
        const {
            city,
            first_name,
            last_name,
            phone_number,
            state_abbr,
            street_address,
            zipcode,
            nameChange,
            addressChange
        } = this.state;

        if (nameChange) {
            const url = 'http://localhost:8000/teampartpig/src/assets/php/login/newAddress.php';
            axios({
                url: url,
                method: 'post',
                data: params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(resp => {
                console.log('response is: ', resp);

            }).catch(err => {
                console.log('error is: ', err);
                this.props.history.push('/error');
            });

        }

        if (addressChange) {
            const url = 'http://localhost:8000/teampartpig/src/assets/php/login/newAddress.php';
            axios({
                url: url,
                method: 'post',
                data: params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(resp => {
                console.log('response is: ', resp);

            }).catch(err => {
                console.log('error is: ', err);
                this.props.history.push('/error');
            });

        }


        // this.props.history.push('/login');
    }
    render() {

        let addressFields = '';
        // if (!this.state.sameAddress) {
        addressFields = inputs.map(((field, index) => {
            return <Field key={index} {...field} error={this.state.addressErrors[field.name]}
                handleInputChange={this.handleAddressInputChange} handleOnBlur={this.handleAddressOnBlur.bind(this)} value={this.state.address[field.name] || ''} />
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