import React from "react";
import "./sellpart.css";


// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#blah')
//                 .attr('src', e.target.result)
//                 .width(150)
//                 .height(200);
//         };

//         reader.readAsDataURL(input.files[0]);
//     }
// }



const SellPart = () => (
    <div className="sell-part-form">
    <h1>Part Details</h1>
        <form id="partListing">
            <section className="partDetails">
                <div className="inputFields">
                    <div className="partNumberInput">   
                        <label for="partNumberInput">Part Number</label>       
                        <input type="text" id="partNumberInput" name="partNumberInput" placeholder="Part Number"/>
                    </div>
                    <div className="partBrandInput">   
                        <label for="partBrand">Part Brand</label>       
                        <input type="text" id="partBrandInput" name="partBrandInput" placeholder="Part Brand"/>
                    </div>     
                    <div className="partTitleInput">   
                        <label for="partTitleInput">Part Name</label>   
                        <input type="text" id="partTitleInput" name="partTitleInput" placeholder="Type part title"/>
                    </div> 
                    <div className="partNumberInput">   
                        <label for="partNumberInput">Part Number</label>       
                        <input type="text" id="partNumberInput" name="partNumberInput" placeholder="Part Number"/>
                    </div>    
                    <div className="priceInput">
                        <label for="priceInput">Your Price</label> 
                        <input type="text" id="priceInput" name="priceInput" placeholder="Price"/>
                    </div>
                 </div>
                 <div className="pictureUpload">
                        <input type="file" onchange="readURL(this);"/>
                        <img id="firstImage" src="#" alt="Upload Image"/>
                </div>    
            </section>
        </form>
    </div>    
);

export default SellPart;