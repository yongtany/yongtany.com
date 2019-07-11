import React, { Component } from "react";
import ContactMe from "components/landing/ContactMe";
import * as api from 'librarys/api';

class ContactContainer extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    contacted: false,
  };

  render() {
    const {  name, email, subject, message, contacted} = this.state;
    return (
      <ContactMe
        nameValue={name}
        emailValue={email}
        subjectValue={subject}
        messageValue={message}
        contacted={contacted}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />
    );
  }
  _handleInputChange = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    });
  };

   _handleSubmit = async event  => {
    const { email, name, subject, message } = this.state;

    const RealEmail = {
      name: name,
      fromEmail: email,
      subject: subject,
      message: message
    };

    try {
      event.preventDefault();
      await api.sendMail(RealEmail);
      this.setState({
        contacted: true
      });
    } catch(e) {
      console.log(e);
    }
  };
}


export default (ContactContainer);
