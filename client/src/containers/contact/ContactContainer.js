import React, { Component } from "react";
import ContactMe from "components/landing/ContactMe";
import { toast } from "react-toastify";

import * as api from 'librarys/api';
import { validateEmail } from 'librarys/validations'

class ContactContainer extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    contacted: false,
    loading: false
  };

  render() {
    const {  name, email, subject, message, contacted, loading } = this.state;
    return (
      <ContactMe
        nameValue={name}
        emailValue={email}
        subjectValue={subject}
        messageValue={message}
        loading={loading}
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
      if (
        email !== "" &&
        name !== "" &&
        subject !== "" &&
        message !== ""
      ) {
        if(!validateEmail(email)) {
          toast.error('Not a valid Email');
        }
        else {
          this.setState({
            loading: true
          });
          await api.sendMail(RealEmail);
          this.setState({
            loading: false,
            contacted: true
          });
        }
      } else {
        toast.error('Fill in the input fields.');
      }
    } catch(e) {
      console.log(e);
    }
  };
}


export default (ContactContainer);
