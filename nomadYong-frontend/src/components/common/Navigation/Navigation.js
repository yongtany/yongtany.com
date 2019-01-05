import React from 'react';
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";
import styles from './Navigation.scss';


const cx = classNames.bind(styles);

const Navigation = (props) => (
        <div className={styles.navigation}>
          <div className={cx('inner')}>
              <div className={cx('column')}>
                  <Link to="/">
                      <img
                          src={require("images/logo.png")}
                          className={cx('logo')}
                          alt="Logo"
                      />
                  </Link>
              </div>
              <div className={cx('column')}>
                  <form onSubmit={props.onSubmit}>
                      <input
                          type="text"
                          placeholder="Search"
                          className={cx('searchInput')}
                          value={props.value}
                          onChange={props.onInputChange}
                      />
                  </form>
              </div>
              <div className={cx('column')}>
                  <div className={cx('right')}>
                    <Link to="/explore">
                      Explore
                    </Link>
                  </div>
                  <div className={cx('right')}>
                    <Link to="/blog">
                      Blog
                    </Link>
                  </div>
                  <div className={cx('right')}>
                    <Link to="/profile">
                      Profile
                    </Link>
                  </div>
              </div>
          </div>
      </div>
    );

export default Navigation;
