import React from 'react';
import styles from './ContactMe.scss';
import classNames from 'classnames/bind';

import Loading from 'components/common/Loading';

const cx = classNames.bind(styles);

const ContactMe = props => {
  return (
    <div className={cx('contact-me')}>
      <div className={cx('contact-title')}>
        <h2 className={cx('title')}>Contact me</h2>
      </div>
      <div className={cx('container')}></div>
      <div className={cx('contact-header')}>
        <h3>Send me a message?</h3>
        <div className={cx('header-container')}>
          <p>Do you want to connect with me about anything? You can just write the message here with your name, email, and subject. I would answer you as fast as possible.</p>
          <img src={require('images/contact.png')}  alt='mail'/>
        </div>
      </div>
      {!props.contacted ? (
      <form
        className={cx('contact-content')}
        onSubmit={props.handleSubmit }
        method="post"
      >
        <input
          className={cx("contact-input")}
          value={props.nameValue}
          name="name"
          placeholder="Your Name*"
          onChange={props.handleInputChange}
        />
        <input
          className={cx("contact-input")}
          type="emal"
          value={props.emailValue}
          name="email"
          placeholder="Your Email*"
          onChange={props.handleInputChange}
        />
        <input
          className={cx("contact-input")}
          value={props.subjectValue}
          name="subject"
          placeholder="Your Subject*"
          onChange={props.handleInputChange}
        />
        <textarea
          className={cx("contact-message")}
          value={props.messageValue}
          name="message"
          placeholder="Your Message*"
          onChange={props.handleInputChange}
        />
        <input
          className={cx("cbutton")}
          type="submit"
          value="Submit"
        />
    </form>
    ) : props.loading ?  <Loading /> : (
      <div className={cx('contact-content')}>
        <div className={cx('contacted')}>
          <h4>Thank you, I will reply to you as fast as possible.</h4>
        </div>
      </div>
    )}

    </div>
  )
}

export default ContactMe;
