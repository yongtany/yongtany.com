import React from 'react'
import styles from './ProfileBoard.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const ProfileBoard = (props) => (
  <div className={cx('profile-board')}>
    {props.profile_image ?
      <img src={props.profile_image} alt={props.name} />
      :
      <img src={require('images/nonImage.jpeg')} alt={props.name} />
    }
    <p className={cx('welcome')}>
        Welcome,
        <span className={cx('name')}> {props.name}</span>
        <span className={cx('icon')} onClick={props.signOut}>
        <i className={cx("fas fa-sign-out-alt fa-1.5x")}></i>
        </span>
    </p>
    <h2 className={cx('bio')}>
        Add a bio.
    </h2>
  </div>
);

export default ProfileBoard;
