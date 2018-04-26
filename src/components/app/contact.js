import React, { Component } from "react";
import axios from 'axios';


class Contact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			form: {
				name: "",
				email: "",
				subject: "",
				body: ""
			},
			submitted: ""
		}
	}
	render() {
		let submitButton = <button className='button-link'>Submit Your Message</button>;
		if(this.state.submitted){
			submitButton = <button type="button" className='button-link'>Submitted</button>;
		} 

		let result = "";
		if(this.state.submitted){
			result = <div className="submitted"><h3>Your message has been submitted.</h3><h3> Thank you for your feedback</h3></div>;
		}
		const { name, email, subject, body } = this.state.form;

		return (
			<div>
				<div className="contact-us">
					<h1>CONTACT US</h1>
				</div>
				<div className='container contactPageContainer'>
					<div className="contact-header">
						<h3>Have a question? Drop us a line!</h3>
						<h3>Please submit your inquiry through the contact form.</h3>
						<h3>We are committed to providing you the best part-purchasing experience!</h3>
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
						{result}

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
			},
			submitted:'true'
		});
		this.submitMessageTimer();
	}
	submitMessageTimer(){
		setTimeout(() => {
			if(this.props.history.location.pathname === "/contact"){
				this.setState({
					...this.state,
					submitted:''
				})
			};
		}, 3000);
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
			console.log("There was an error:", err);
			this.props.history.push('/error');
		});
	}
	handleNameInputChange(e) {
		const { value } = e.target
		this.setState({
			form: {
				...this.state.form,
				name: value
			},
			...this.state.submitted
		});
	}
	handleEmailInputChange(e) {
		const { value } = e.target
		this.setState({
			form: {
				...this.state.form,
				email: value
			},
			...this.state.submitted
		});
	}
	handleSubjectInputChange(e) {
		const { value } = e.target
		this.setState({
			form: {
				...this.state.form,
				subject: value
			},
			...this.state.submitted
		});
	}
	handleMessageInputChange(e) {
		const { value } = e.target
		this.setState({
			form: {
				...this.state.form,
				body: value
			},
			...this.state.submitted
		});
	}

}

export default Contact

