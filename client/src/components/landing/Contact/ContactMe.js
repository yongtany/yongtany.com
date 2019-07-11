import React from 'react';
import styles from './ContactMe.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ContactMe = () => {
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
      <form className={cx('contact-content')}>
        <input className={cx("contact-input")} placeholder="Your Name*" />
        <input className={cx("contact-input")} placeholder="Your Email*"/>
        <input className={cx("contact-input")} placeholder="Your Subject*"/>
        <textarea className={cx("contact-message")} placeholder="Your Message*" />
        <button className={cx("button")} name="Submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactMe;
