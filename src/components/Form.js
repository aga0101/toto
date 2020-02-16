import React from 'react';
import Axios from 'axios';

class Form extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			name: '',
			email: '',
			message: '',
			isDisabled: true
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.subscribe = this.subscribe.bind(this);
	
	}

	handleChange(event) {
    this.setState({
			[event.target.name]: event.target.value,
			isDisabled: !(this.state.name && this.state.email && this.state.message)
    })
	}

	async subscribe(newSubscribee) {
    try {
      await Axios.post('https://xnxm2hxmwa.execute-api.us-east-1.amazonaws.com/v1/subscribe', newSubscribee)
    } catch (error) {
      console.log(error)
    }
  }
	
	async handleSubmit(e) {
		e.preventDefault();

		await this.subscribe({
			name: this.state.name,
			email: this.state.email,
			message: this.state.message
		})
		alert(`Thank you for caring ${this.state.name}!`);
	}
		
	render() {
		return <section class="page-section" id="subscribe">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 text-center">
					<br />
						<h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Get Involved!</h2>
						{/* <!-- Icon Divider --> */}
						<div class="divider-custom">
							<div class="divider-custom-line"></div>
							<div class="divider-custom-icon">
								<i class="fas fa-star"></i>
							</div>
							<div class="divider-custom-line"></div>
						</div>

						<h4 class="section-subheading text-muted">Subscribe to receive updates.</h4>
					</div>
				</div>
				
				<div class="row">
					<div class="col-lg-8 mx-auto">
						<form name="sentMessage" id="contactForm" novalidate="novalidate">
							<div class="control-group">
								<div class="form-group floating-label-form-group controls mb-0 pb-2">
									<label>Name</label>
									<input
										class="form-control"
										name="name"
										id="name"
										type="text"
										placeholder="Name"
										required="required" 
										data-validation-required-message="Please enter your name." 
										value={this.state.name} 
										onChange={this.handleChange}
										/>
									<p class="help-block text-danger"></p>
								</div>
							</div>
							<div class="control-group">
								<div class="form-group floating-label-form-group controls mb-0 pb-2">
									<label>Email Address</label>
									<input 
										class="form-control" 
										name="email" 
										id="email" 
										type="email" 
										placeholder="Email Address" 
										required="required" 
										data-validation-required-message="Please enter your email address."
										value={this.state.email} 
										onChange={this.handleChange} 
										/>
									<p class="help-block text-danger"></p>
								</div>
							</div>
							<div class="control-group">
								<div class="form-group floating-label-form-group controls mb-0 pb-2">
									<label>Message</label>
									<textarea 
										class="form-control" 
										name="message" 
										id="message" 
										rows="3" 
										placeholder="Message" 
										required="required" 
										data-validation-required-message="Please enter a message."
										onChange={this.handleChange}
										>
										{this.state.message} 
									</textarea>
									<p class="help-block text-danger"></p>
								</div>
							</div>
							<br />
							<div id="success"></div>
							<div class="form-group">
								<button onClick={this.handleSubmit} class="btn btn-primary btn-xl" id="sendMessageButton" disabled={this.state.isDisabled}>Subscribe</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>;
	}
	

};

export default Form;