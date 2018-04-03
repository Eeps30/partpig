import React, {Component} from "react";
import "./sellpart.css";
import parts from '../part/partsData'


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
        parts.push(
            {
                "make": "",
                "model": "",
                "year":2015,
                "title": this.state.form.partTitle,
                "brand": this.state.form.brand,
                "price": this.state.form.price,
                "location": "",
                "condition": this.state.form.condition,
                "milage_used": "",
                "purchase_date": "",
                "category": "",
                "description": "",
                "images": [
                    this.state.form.firstImage
                ],
                "size": "",  
                "seller": this.state.form.username,
                "partNumber": '',
                "display":{'brand':true,'price':true}
            }

        );
    }
  

    render() {
        const { partTitle, partNumber, fitment, firstImage, condition, conditionBrief, username, password, brand } = this.state.form;

            return(
                        <form onSubmit={this.handleSubmit}>
                            <div className="section"><span>1</span>Part Details and Price</div>
                            <div className="inner-wrap">
                                <label>Part Title<input onChange={this.handleInputChange} value={partTitle} name="partTitle" type="text" /></label>
                                <div> 
                                    <label>Brand<input  onChange={this.handleInputChange} value={brand} name="brand" type="text" /></label>
                                    <label>Part Number<input  onChange={this.handleInputChange} value={partNumber} name="partNumber" type="text" /></label>                
                                    <label>Price<input type="text" name="field4" /></label>
                                </div>    
                                <label>Fitment <input onChange={this.handleInputChange} value={fitment} name="fitment" type="text" /></label>
                            </div>
        
                            <div className="section"><span>2</span>Pictures and Condition</div>
                            <div className="inner-wrap">
                                <div className="pictureUpload">
                                        <input type="file" onChange={this.handleInputChange} value={firstImage} name="firstImage"/>
                                        <img id="firstImage" src="#" alt="Upload Image"/>
                                </div>
                                <label>Condition 1-10<input onChange={this.handleInputChange} value={condition} name="condition"type="text" /></label> 
                                <label>Condition Brief <input onChange={this.handleInputChange} value={conditionBrief} name="conditionBrief"type="text" /></label>    
                            </div>
        
                            <div className="section"><span>3</span>Contact Information</div>
                                <div className="inner-wrap">
                                <label>Username<input onChange={this.handleInputChange} value={username} type="text" name="username" /></label>
                                <label>Password <input onChange={this.handleInputChange} value={password} type="password" name="password" /></label>
                            </div>
                            {/* <div className="section"><span>4</span>Shipping and Location</div>
                                <div className="inner-wrap">
                                <label>Username <input type="password" name="field5" /></label>
                                <label>Password <input type="password" name="field6" /></label>
                            </div> */}
                            <div className="button-section">
                                <input type="submit" name="List Part Now!" />
                                <span className="privacy-policy">
                                <input type="checkbox" name="field7"/>You agree to our Terms and Conditions.
                                </span>
                            </div>
                        </form>  
                );
    
    }
}    

export default SellPartForm;