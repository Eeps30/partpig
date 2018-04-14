import React, {Component} from "react";
import "./sellpart.css";

import ImageUpload from '../imageUploader/imageUploader';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ListingSuccess from "../listingSuccess/listingSuccess";
import InputField from "./inputField";
import {connect} from 'react-redux';
import {formError, signUp} from '../../actions';
import requiredFields from './formData'


class SellPartForm extends Component{
    handleSellPartSubmit(event){
        event.preventDefault();
        const inputs = this.props.values;
        // console.log('my image file object', newPartData.images[0].imagePreviewUrl);
        const listingFormData = {
                // "make":  inputs.make,
                // "model":  inputs.model,
                // "year":  inputs.year,
                "part_name": inputs.part_name,
                "brand": inputs.brand,
                "price_usd":  inputs.price,
                // "location": "",
                // "part_condition":  inputs.part_condition,
                // "description":  inputs.description,
                // "milage_used": "",
                // "category":  inputs.category,
                // "images": [
                //     inputs.images[0].imagePreviewUrl
                // ],
                // "seller_id": inputs.userId,
                "part_number": inputs.part_number,
            }
        console.log('handleSubmit called, form values are:', listingFormData);
        this.inputValidation(listingFormData);
       
    }

    inputValidation(listingFormData){     
        event.preventDefault();   
        const {part_name, price_usd, part_number, brand} = listingFormData;
        const errors = [];

        if(!part_name){
            errors.push('Please enter a valid part name');
        }

        if(!price_usd){
            errors.push('Please enter a valid price')
        }

        if(!part_number){
            errors.push('Enter a part number');
        }
        if(!brand){
            errors.push('Enter a brand');
        }        

        this.props.formError(errors);

        if(errors.length === 0){
            this.sendToServer(listingFormData);
        }
        console.log(errors)
     
    }

    handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
        
        reader.onloadend = () => {
            const { form } = this.state;
            form['images'].push({imagePreviewUrl:reader.result, file:file});
            this.setState({
                form: {...form}
            });         
        }
    
        reader.readAsDataURL(file);
      }

    
    sendToServer(listingFormData){

            const url = "http://localhost:8000/teampartpig/src/assets/php/sellPart.php";
            axios({
                url: url,
                method: 'post',
                data: {listingFormData}, 
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(resp=>{
                console.log("Server Response:", resp);
                // this.props.history.push('/listingsuccess');
            }).catch(err => {
                console.log("There was an error:");
                // this.props.history.push('/listingsuccess');
            });
    }

    formValidation(listingFormData){ event.preventDefault();

        const {email, password, confirmPassword} = this.props.values;
        const errors = [];

        if(!part_name){
            errors.push('Please enter a part name');
        }

        this.props.formError(errors);

        if(errors.length === 0){
            this.props.signUp({email, password});
        }
        
    }
  
    render() {
    const formInputs = [
        {
            label: "Part Title",
            htmlFor: "part_name",
            name: "part_name",
            type: "text",
            placeholder: "Enter a part title",
            className: "partName",
            required: "true"
        },
    
        {
            label: "Price",
            htmlFor: "price",
            name: "price",
            type: "text",
            placeholder: "$",
            className: "price",
            required: "true"
        },
    
        {
            label: "Part Number",
            htmlFor: "part_number",
            name: "part_number",
            type: "text",
            placeholder: "Manufacture Part Number",
            className: "partNumber",
            required: "false"
        },
    
        {
            label: "Brand",
            htmlFor: "brand",
            name: "brand",
            type: "text",
            placeholder: "Brand",
            className: "brand",
            required: "false"
        },
    
    ]
    

    const {values, errors} = this.props;

    const fields = formInputs.map((inputObj,index) => {
        return <InputField key={index} {...inputObj} value={values[inputObj.name] || ''}/>
    });
    


        return(
                <div className="sellPartForm">
                        <form onSubmit={this.handleSellPartSubmit.bind(this)}>
                            <div className="part-details">
                                <h1>Part Details</h1>
                                {fields}
                            </div> 
                            <div className="buttonContainer">
                                <button className="postPart">List Your Part Now!</button>
                            </div>
                        </form>
                </div>          
                );
    
    }
}    

function mapStateToProps(state){
    return{
        values: state.form.values,
        errors: state.form.errors
    }
}

export default connect(mapStateToProps, {formError, signUp})(SellPartForm);