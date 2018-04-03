import React from "react";
import "./sellpart.css";



const SellPart = () => (
    <div className="sell-part-form">
        <div className="form-style-10">
            <h1>List your part for sale!<span>Complete the simple steps below!</span></h1>
            <form>
                <div className="section"><span>1</span>Part Details and Price</div>
                <div className="inner-wrap">
                    <label>Part Title<input type="text" name="field1" /></label>
                    <label>Part Number<input type="text" name="field2" /></label>
                    <label>Price <input type="text" name="field4" /></label>
                    <label>Fitment <input type="text" name="field4" /></label>
                </div>

                <div className="section"><span>2</span>Pictures and Condition</div>
                <div className="inner-wrap">
                    <div className="pictureUpload">
                            <input type="file" onchange="readURL(this);"/>
                            <img id="firstImage" src="#" alt="Upload Image"/>
                     </div>
                     <label>Condition 1-10<input type="text" name="field5" /></label> 
                     <label>Condition Brief <input type="text" name="field5" /></label>    
                </div>

                <div className="section"><span>3</span>Contact Information</div>
                    <div className="inner-wrap">
                    <label>Username<input type="password" name="field5" /></label>
                    <label>Password <input type="password" name="field6" /></label>
                </div>
                <div className="section"><span>4</span>Shipping and Location</div>
                    <div className="inner-wrap">
                    <label>Username <input type="password" name="field5" /></label>
                    <label>Password <input type="password" name="field6" /></label>
                </div>
                <div className="button-section">
                    <input type="submit" name="List Part Now!" />
                    <span className="privacy-policy">
                    <input type="checkbox" name="field7"/>You agree to our Terms and Conditions.
                    </span>
                </div>
            </form>
        </div>
    </div>    
);

export default SellPart;