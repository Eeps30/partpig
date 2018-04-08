import React, {Component} from "react";
import "./sellpart.css";
import parts from '../part/partsData';
import ImageUploader from '../imageUploader/imageUploader';
import axios from  'axios';


class SellPartForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            form: {
            partTitle: '',
            partNumber: '',
            fitment: '',
            firstImage: '',
            condition: '',
            conditionBrief: '',
            username: '',
            password: '',
            brand: ''
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        event.preventDefault();
        console.log('handleSubmit called, form values are:', this.state.form);
        const listingFormData = {
                "make": "",
                "model": "",
                "year": 2015,
                "partName": this.state.form.partName,
                "brand": this.state.form.brand,
                "price": this.state.form.price,
                "location": "",
                "conditionRating": this.state.form.conditionRating,
                "conditionDetails": this.state.form.conditionDetails,
                "milage_used": "",
                "purchase_date": "",
                "category": "",
                "description": "",
                "images": [
                    this.state.form.firstImage
                ],
                "seller": this.state.form.username,
                "partNumber": this.state.form.partNumber,
            }
    }

    sendToServer(){
            const BASE_URL = "http://api.reactprototypes.com";
            const API_KEY = "?key=testuser1234";
            axios.post(`${BASE_URL}/todos${API_KEY}`, listingFormData).then(resp => {
                console.log("Server Response:", resp);
            }).catch(err => {
                console.log("There was an error:", err.message);
            });
    }
  

    render() {
        const { partName, partNumber, fitment, firstImage, conditionRating, conditionDetails, username, password, brand, price, category } = this.state.form;
            return(
                <div className="sellPartForm">
                        <form onSubmit={this.handleSubmit}>
                            <div className="part-details">
                                <h1>Part Details</h1>
                                <div className="partName">
                                    <label for="partName">Part Title</label>
                                    <input onChange={this.handleInputChange} value={partName} name="partName" type="text" />
                                </div>
                                <div className="price">
                                    <label for="price">Price</label>
                                    <input onChange={this.handleInputChange} value={price} name="price" type="text" />
                                </div>
                                <div className="partNumber">
                                    <label for="partNumber">Part Number</label>
                                    <input onChange={this.handleInputChange} value={partNumber} name="partNumber" type="text" />
                                </div>
                                <div className="brand">
                                    <label for="brand">Brand</label>
                                    <select onChange={this.handleInputChange} value={brand} name="brand" type="text">
                                        <option value="Select Year">Select Brand</option>
                                    </select>    
                                </div>
                                <div className="category">
                                    <label for="category">Category</label>
                                    <select onChange={this.handleInputChange} value={category} name="category" type="text">
                                        <option value="Select Year">Select Category</option>
                                    </select>    
                                </div>
                            </div>    
                            <div className="fitment">
                                <h1>Vehicle Fitment</h1>    
                                <div className="partYear">
                                    <label for="partYear">Year</label>
                                    <select onChange={this.handleInputChange} value={partNumber} name="partYear" type="text">
                                        <option value="Select Year">Select Year</option>
                                    </select>
                                </div>
                                <div className="partMake">
                                    <label for="partmake">Make</label>
                                    <select onChange={this.handleInputChange} value={partNumber} name="partMake" type="text">
                                        <option value="Select Make">Select Make</option>
                                    </select>
                                </div>
                                <div className="partModel">
                                    <label for="partModel">Model</label>
                                    <select onChange={this.handleInputChange} value={partNumber} name="partModel" type="text">
                                        <option value="Select Make">Select Make</option>
                                    </select>
                                </div>
                            </div>
                            <div className="part-condition">
                            <h1>Condition</h1>
                                <div className="conditionRating">
                                        <label for="conditionRating">Condition</label>
                                        <input onChange={this.handleInputChange} value={conditionRating} name="conditionRating" type="text" />
                                </div>
                                <div className="conditionDetails">
                                    <label for="conditionDetails">Condition Details</label>
                                    <textarea onChange={this.handleInputChange} value={conditionDetails} name="conditionDetails" type="text" />
                                </div>
                            </div>                               
                            <div className="location">
                                <h1>Location</h1>
                                <div className="partName">
                                    <label for="partName">Part Title</label>
                                    <input onChange={this.handleInputChange} value={partName} name="partName" type="text" />
                                </div>
                                <div className="partNumber">
                                    <label for="partNumber">Part Number</label>
                                    <input onChange={this.handleInputChange} value={partNumber} name="partNumber" type="text" />
                                </div>
                                <div className="price">
                                    <label for="price">Price</label>
                                    <input onChange={this.handleInputChange} value={price} name="price" type="text" />
                                </div>
                            </div>
                            <div className="imageUpload">
                                <h1>Pictures</h1>
                                <ImageUploader/>
                            </div>
                        </form>
                </div>          
                );
    
    }
}    

export default SellPartForm;