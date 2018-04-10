import React, {Component} from "react";
import "./sellpart.css";

import ImageUpload from '../imageUploader/imageUploader';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ListingSuccess from "../listingSuccess/listingSuccess";



class SellPartForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            form: {
            part_name: '',
            part_number: '',
            fitment: '',
            images: '',
            part_condition: '',
            description: '',
            username: '',
            password: '',
            brand: '',
            file: '',
            imagePreviewUrl: '',
            year: '',
            make: '',
            model: '',
            price: ''
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }      

    handleInputChange(event) {
        const { value, name } = event.target;
        const { form } = this.state;
        form[name] = value;
        this.setState({
            form: {...form}
        });
    }

    handleSubmit(event) {
        const newPartData = this.state.form;
        console.log('handle uploading-', this.state.file)
        event.preventDefault();
        console.log('handleSubmit called, form values are:',  newPartData);
        const listingFormData = {
                "make":  newPartData.make,
                "model":  newPartData.model,
                "year":  newPartData.year,
                "part_name":  newPartData.part_name,
                "brand": newPartData.brand,
                "price":  newPartData.price,
                "location": "",
                "part_condition":  newPartData.part_condition,
                "description":  newPartData.description,
                "milage_used": "",
                "category":  newPartData.category,
                "images": {imagePreviewUrl:newPartData.imagePreviewUrl, file:newPartData.file},
                "seller_id":  newPartData.username,
                "part_number":  newPartData.part_number,
            }
        console.log('handleSubmit called, form values are:', listingFormData);

        this.sendToServer(listingFormData);

    }

    sendToServer(listingFormData){

            const url = "http://localhost:8000/teampartpig/src/assets/php/listPart.php";
            axios.post(url,{listingFormData}).then(resp=>{
                console.log("Server Response:", this);
                // this.props.history.push('/listingsuccess');
            }).catch(err => {
                console.log("There was an error:");
                // this.props.history.push('/listingsuccess');
            });
    }

    validate(listingFormData){
        const {partName, price} = listingFormData;
        const errors = {};
        if(!listingFormData.partName){
            console.log('Please input a part name');
        }
        if(!price){
            console.log(errors);
        }
    
        console.log("no errors found");
    }
  
    handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
        
        reader.onloadend = () => {
            const { form } = this.state;
            form['file'] = file;
            form['imagePreviewUrl'] = reader.result;
            this.setState({
                form: {...form}
            });         
        }
    
        reader.readAsDataURL(file);
      }

    render() {
        const { part_name, part_number, fitment, firstImage, part_condition, description, username, password, brand, price, category, year, make, model,imagePreviewUrl } = this.state.form;

        return(
                <div className="sellPartForm">
                        <form onSubmit={this.handleSubmit}>
                            <div className="part-details">
                                <h1>Part Details</h1>
                                <div className="partName">
                                    <label htmlFor="part_name">Part Title<a className="required">*</a></label>
                                    <input onChange={this.handleInputChange} value={part_name} name="part_name" type="text" />
                                </div>
                                <div className="price">
                                    <label htmlFor="price">Price<a className="required">*</a></label>
                                    <input onChange={this.handleInputChange} value={price} name="price" type="text" />
                                </div>
                                <div className="partNumber">
                                    <label htmlFor="part_number">Part Number</label>
                                    <input onChange={this.handleInputChange} value={part_number} name="part_number" type="text" />
                                </div>
                                <div className="brand">
                                    <label htmlFor="brand">Brand</label>
                                    <select onChange={this.handleInputChange} value={brand} name="brand" type="text">
                                        <option value="brand">Select Brand</option>
                                        <option value="Perrin">Perrin</option>
                                        <option value="Cosworth">Cosworth</option>
                                        <option value="Forman">Forman</option>
                                    </select>    
                                </div>
                                <div className="category">
                                    <label htmlFor="category">Category</label>
                                    <select onChange={this.handleInputChange} value={category} name="category" type="text">
                                        <option value="category">Select Category</option>
                                        <option value="Exhaust">Exhaust</option>
                                        <option value="Suspension">Suspension</option>
                                    </select>    
                                </div>
                            </div>    
                            <div className="fitment">
                                <h1>Vehicle Fitment</h1>    
                                <div className="partYear">
                                    <label htmlFor="year">Year</label>
                                    <select onChange={this.handleInputChange} value={year} name="year" type="text">
                                    <option value="year">Select Year</option>
                                    <option value="2019">2019</option>
                                    <option value="1904">1904</option>
                                    </select>
                                </div>
                                <div className="partMake">
                                    <label htmlFor="make">Make</label>
                                    <select onChange={this.handleInputChange} value={make} name="make" type="text">
                                        <option value="make">Select Make</option>
                                        <option value="Subaru">Subaru</option>
                                        <option value="Ferrari">Ferrari</option>
                                        
                                    </select>
                                </div>
                                <div className="partModel">
                                    <label htmlFor="model">Model</label>
                                    <select onChange={this.handleInputChange} value={model} name="model" type="text">
                                        <option value="model">Select Make</option>
                                        <option value="Impreza WRX STI">Impreza WRX STI</option>
                                        <option value="Focus">Focus</option>
                                    </select>
                                </div>
                            </div>
                            <div className="part-condition">
                            <h1>Condition</h1>
                                <div className="conditionRating">
                                        <label htmlFor="part_condition">Condition<a className="required">*</a></label>
                                        <select onChange={this.handleInputChange} value={part_condition} name="part_condition" type="text">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        
                                    </select>
                                </div>
                                <div className="conditionDetails">
                                    <label htmlFor="description">Condition Details</label>
                                    <textarea onChange={this.handleInputChange} value={description} name="description" type="text" />
                                </div>
                            </div>
                            <div className="imageUpload">
                                <h1>Pictures</h1>
                                <ImageUpload imagePreviewUrl={imagePreviewUrl} handleImageChange={this.handleImageChange}/>
                            </div>                               
                            <div className="saleOptions">
                                <h1>Pickup and Delivery</h1>
                                <div className="checkboxItem">
                                    <p>Local Pickup Available</p>
                                    <input onChange={this.handleInputChange} id="localPickup" value="false" name="localPickup" type="checkbox"/>
                                    <div className="toggleButton">
                                        <label htmlFor="localPickup"><i></i></label>
                                    </div>
                                </div>
                                <div className="checkboxItem">
                                    <p>Shipping Available</p>
                                    <input onChange={this.handleInputChange} id="shippingAvailable" value="false" name="shippingAvailable" type="checkbox"/>
                                    <div className="toggleButton">
                                        <label htmlFor="shippingAvailable"><i></i></label>
                                    </div>
                                </div>
                                <div className="checkboxItem">
                                    <p>Returns Accepted</p>
                                    <input onChange={this.handleInputChange} id="returnsAccepted" value="false" name="returnsAccepted" type="checkbox"/>
                                    <div className="toggleButton">
                                        <label htmlFor="returnsAccepted"><i></i></label>
                                    </div>
                                </div>
                            </div>
                            <div className="buttonContainer">
                                <button className="postPart">List Your Part Now!</button>
                            </div>
                        </form>
                </div>          
                );
    
    }
}    

export default SellPartForm;