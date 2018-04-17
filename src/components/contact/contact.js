import React from "react";
import './contact.css';

const Contact = () => (
        <div>
            <div className="contact-us">
            	<h1>CONTACT US</h1>
            </div>
            <div className='contactContainer'>
				<div className="contact-header">
				    <h3>Have a question? Drop us a line!</h3>
				    <h3>Please submit your inquiry through the contact form.</h3>
				    <h3>We are committed to providing you the best part-purchasing experience!</h3>
				</div>
				<form className="contactForm">
				    <div className="input-container">
				        <label htmlFor='name'>Name:</label>
				        <input type="text" className="name" placeholder="First Name, Last Name"/>
				    </div>
				    <div className="input-container">
				        <label>Email:</label>
				        <input type="text" className="email" placeholder="Enter your email address here"/>
				    </div>
				    <div className="input-container">
				        <label>Subject:</label>
				        <input type="text" className="subject" placeholder="Enter a subject"/>
				    </div>
				    <div className="input-container">
				        <label>Message:</label>
				        <textarea className="message" placeholder="Enter your message here"></textarea>
				    </div>
				    <button type="button" className="submit">Submit Your Message</button>
				</form>
			</div>
			<div className="modal-overlay"></div>
			<div className="modal">
			    <div className="close">X</div>
			    <label>P</label>
			</div>
        </div>    
);

export default Contact