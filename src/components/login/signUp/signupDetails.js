import React, { Component } from 'react';
import './signUp.css';
import axios from 'axios';
import Field from '../../tools/field';
import inputs from './addressFieldsData';
import states, { abbrState } from '../../tools/states';
import '../../userDashboard/media4.css';

class SignUpDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            address: {
                city: "Irvine",
                first_name: "John",
                middle_name: '',
                last_name: "Doe",
                phone_number: "111-222-3333",
                apt_suite: '',
                state_abbr: "CA",
                state:'California',
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

    handleAddressInputChange(event) {
        const { value, name } = event.target;
        const newUserInfo = { ...this.state.address };

        if(name === 'state_abbr'){
            let state = abbrState(value, 'abbr');
            newUserInfo.state = state;
            }

        newUserInfo[name] = value;
        if (name === 'first_name' || name === 'last_name' || name === 'middle_name' || name === 'phone_number') {
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
        const userId = this.props.match.params.userId;
        const {
            address: {
                city,
                first_name,
                middle_name,
                last_name,
                phone_number,
                state_abbr,
                state,
                street_address,
                apt_suite,
                zipcode
            },
            nameChange,
            addressChange
        } = this.state;

        let promiseArray = [];

        if (nameChange) {
            let params = {
                first_name, middle_name, last_name, phone_number, userId
            }
            const url = 'http://localhost:8000/teampartpig/src/assets/php/login/updateUserName.php';
            promiseArray.push(axios({
                url: url,
                method: 'post',
                data: params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }))
        }

        if (addressChange) {
            let params = {
                city, state_abbr, state, apt_suite, street_address, zipcode, userId
            }
            const url = 'http://localhost:8000/teampartpig/src/assets/php/login/newAddress.php';
            promiseArray.push(axios({
                url: url,
                method: 'post',
                data: params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }))

        }
        Promise.all(promiseArray)
            .then(resp => {
                console.log('response is: ', resp);
                
                this.props.history.push('/login');

            }).catch(err => {
                console.log('error is: ', err);
                this.props.history.push('/error');
            });

    }
    
    render() {
        let addressFields = '';
        addressFields = inputs.map(((field, index) => {
            return <Field key={index} {...field} error={this.state.addressErrors[field.name]}
                handleInputChange={this.handleAddressInputChange} handleOnBlur={this.handleAddressOnBlur.bind(this)} value={this.state.address[field.name] || ''} />
        }).bind(this));

        return (
            <div>
                <div className="outer-container">
                    <div className="inner-container contactDetails-container">
                        <h1>Thanks for making an account with PartPig Beta!</h1>
                        <h2>Feel free to add additional information</h2>
                        <h2> or just go with the defaults </h2>
                        <div className="formFields">
                            {addressFields}
                            <button className="accountDetails_Button button-link" onClick={this.buttonSubmit.bind(this)}>Login Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpDetails;