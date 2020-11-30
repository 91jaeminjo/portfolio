import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './contact.scss'

const templateId = 'template_ETTY5Xxd';
export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
          name: '',
          email: '',
          phone: '',
          message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleMessage = this.handleMessage.bind(this)
        
        this.sendFeedback = this.sendFeedback.bind(this)
        this.clearForm = this.clearForm.bind(this)
  }
  clearForm(){
    this.setState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
  }
    handleSubmit(event) {
        
        console.log('Message has been submitted!\nThank you for contacting me!')
        
        alert('Message has been submitted!\nThank you for contacting me!')
        this.sendFeedback(templateId, { from_name: this.state.name, reply_to: this.state.email, phone: this.state.phone, message_html: this.state.message })
        event.preventDefault()
        this.clearForm()
        
    }
    sendFeedback(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
handleName(event) {
    this.setState({
        name: event.target.value
    })
}
handleEmail(event) {
    this.setState({
        email: event.target.value
    })
}
handlePhone(event) {
    this.setState({
        phone: event.target.value
    })
}
handleMessage(event) {
    this.setState({
        message: event.target.value
    })
}

    render() {
        return (
          <section id="contact" className="page-section">
            <div className="container">
              <h2 className="page-section-heading text-center text-uppercase text-dark mb-0">
                Contact
              </h2>
              <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div class="divider-custom-line"></div>
              </div>
              <h3 className="text-uppercase text-center mb-0">
                If you would like to contact me, please leave me a message!
              </h3>
              <br />
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <form
                    id="contactForm"
                    onSubmit={this.handleSubmit.bind(this)}
                  >
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Name</label>
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          required="required"
                          data-validation-required-message="Please enter your name."
                          placeholder="Name"
                          value={this.state.name}
                          onChange={this.handleName}
                        />
                        <p className="form-text text-danger help-block"></p>
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Email</label>
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          required="required"
                          data-validation-required-message="Please enter your email."
                          placeholder="Email Address"
                          value={this.state.email}
                          onChange={this.handleEmail}
                        />
                        <p className="form-text text-danger help-block"></p>
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Phone Number</label>
                        <input
                          className="form-control"
                          id="phone"
                          type="tel"
                          required="required"
                          data-validation-required-message="Please enter your phone number."
                          placeholder="Phone Number"
                          value={this.state.phone}
                          onChange={this.handlePhone}
                        />
                        <p className="form-text text-danger help-block"></p>
                      </div>
                    </div>
                    <div className="control-group">
                      <div className="form-group floating-label-form-group controls mb-5 pb-2">
                        <label>Message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          required="required"
                          data-validation-required-message="Please enter a message."
                          placeholder="Message"
                          rows="5"
                          value={this.state.message}
                          onChange={this.handleMessage}
                        ></textarea>
                        <p className="form-text text-danger help-block"></p>
                      </div>
                    </div>

                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-xl"
                        id="sendMessageButton"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );
    }
}
