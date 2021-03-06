import React from 'react';
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";
import styles from './Navigation.scss';


const cx = classNames.bind(styles);

const Navigation = (props) => (
        <div className={cx('navigation')}>
          <div className={cx('inner')}>
              <div className={cx('column')}>
                  <Link to="/" className={cx('logo')}>
                      <img
                        src={require("images/logo.png")}
                        className={cx('logo-i')}
                        alt="Logo"
                      />
                      <p className="logo-t">&lt;Yongtany /&gt;</p>
                  </Link>
              </div>
              <div className={cx('column')}>
                      <input
                          type="text"
                          placeholder="Search"
                          className={cx('searchInput')}
                          value={props.search}
                          name="search"
                          onChange={props.handleInputChange}
                          onKeyPress={props.handleKeyPress}
                      />

              </div>

              <div className={cx('column')}>
                  <div className={cx('right')}>
                    <Link to="/about">
                      About
                    </Link>
                  </div>
                  <div className={cx('right')}>
                    <Link to="/post">
                      Blog
                    </Link>
                  </div>
                  {/* {props.isLoggedIn ?
                  <div className={cx('right')}>
                  <Link to='/profile'>
                    <img
                      src={props.profile_image}
                      alt={props.name}
                      className={cx('profile_image')}
                    />
                  </Link>
                </div>
                  :
                  <div className={cx('right')}>
                    <Link to="/auth">
                      Sign in
                    </Link>
                  </div>
                  } */}

              </div>
          </div>
      </div>
    );

export default Navigation;
