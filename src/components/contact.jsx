import React, { Component } from 'react'

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
            <section id="contact">
                <div className="container">
                    <h2 className="text-uppercase text-center section-title-2 mb-0">Contact</h2>
                    <h3 className="text-uppercase text-center mb-0">If you would like to contact me, please leave me a message!</h3>
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <form id="contactForm" onSubmit={this.handleSubmit.bind(this)}>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <input type="text" className="form-control" id="name" required placeholder="Name" value={this.state.name} onChange={this.handleName} />
                                        <small className="form-text text-danger help-block"></small>
                                        </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <input type="email" className="form-control" id="email" required placeholder="Email Address" value={this.state.email} onChange={this.handleEmail} />
                                        <small className="form-text text-danger help-block"></small>
                                        </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <input type="tel" className="form-control" id="phone" required placeholder="Phone Number" value={this.state.phone} onChange={this.handlePhone} />
                                        <small className="form-text text-danger help-block"></small>
                                        </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-5 pb-2">
                                        <textarea className="form-control" id="message" required placeholder="Message" rows="5" value={this.state.message} onChange={this.handleMessage}>
                                            </textarea><small className="form-text text-danger help-block"></small>
                                            </div>
                                </div>
                                
                                <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
