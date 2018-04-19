import React, { Component } from "react";
// import './checkout.css';
// import {Link} from 'react-router-dom';
// import Field from './field';
// import Loading from '../loading/loading';
import axios from 'axios';
// import inputs from './fieldsData';

import contact_pig from '../../assets/images/AndrewPartPig.jpg'

// import React from "react";
import './contact.css';

class Contact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			form: {
				name: "",
				email: "",
				subject: "",
				body: ""
			}
		}
	}
	render() {
		let submitButton = <button className='button-link'>Submit Your Message</button>

		const { name, email, subject, body } = this.state.form;

		return (
			<div>
				<div className="contact-us">
					<h1>CONTACT US</h1>
				</div>
				<div className='container contactContainer'>
					<div className="contact-header">
						<h3>Have a question? Drop us a line!</h3>
						<h3>Please submit your inquiry through the contact form.</h3>
						<h3>We are committed to providing you the best part-purchasing experience!</h3>
						{/* <img className="contact_image" src={contact_pig} alt=""/> */}
					</div>
					<form className="contactForm" onSubmit={e => this.handleSubmit(e)}>
						<div className="input-container">
							<label htmlFor='name'>Name:</label>
							<input type="text" className="name" value={name} placeholder="First Name, Last Name" onChange={this.handleNameInputChange.bind(this)} required />
						</div>
						<div className="input-container">
							<label>Email:</label>
							<input type="text" className="email" value={email} placeholder="Enter your email address here" onChange={this.handleEmailInputChange.bind(this)} required />
						</div>
						<div className="input-container">
							<label>Subject:</label>
							<input type="text" className="subject" value={subject} placeholder="Enter a subject" onChange={this.handleSubjectInputChange.bind(this)} required />
						</div>
						<div className="input-container">
							<label>Message:</label>
							<textarea className="message" value={body} placeholder="Enter your message here" onChange={this.handleMessageInputChange.bind(this)} required></textarea>
						</div>
						{submitButton}

					</form>
				</div>
				<div className="modal-overlay"></div>
				<div className="modal">
					<div className="close"></div>
					<label></label>
				</div>
			</div>
		)
	}
	reset() {
		this.setState({
			form: {
				name: '',
				email: '',
				subject: '',
				body: ''
			}
		});
	}
	handleSubmit(event) {
		event.preventDefault();

		const url = 'http://localhost:8000/teampartpig/src/assets/php/Mail/transactionalEmail.php';
		const data = { ...this.state.form };
		this.reset();
		axios({
			url: url,
			method: 'post',
			data: data,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).then(resp => {
			console.log("Server Response:", resp);
		}).catch(err => {
			console.log("There was an error:");
		});
	}
	handleNameInputChange(e) {
		const { value } = e.target
		this.setState({
			form: {
				...this.state.form,
				name: value
			}
		});
	}
	handleEmailInputChange(e) {
		const { value } = e.target
		this.setState({
			form: {
				...this.state.form,
				email: value
			}
		});
	}
	handleSubjectInputChange(e) {
		const { value } = e.target
		this.setState({
			form: {
				...this.state.form,
				subject: value
			}
		});
	}
	handleMessageInputChange(e) {
		const { value } = e.target
		this.setState({
			form: {
				...this.state.form,
				body: value
			}
		});
	}

}

export default Contact

