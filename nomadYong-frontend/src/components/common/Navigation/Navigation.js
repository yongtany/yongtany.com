import React from 'react';
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";
import styles from './Navigation.scss';

import IosCompass from 'react-ionicons/lib/IosCompassOutline';
import IosPersonOutline from 'react-ionicons/lib/IosPersonOutline';
import IosBookOutline from 'react-ionicons/lib/IosBookOutline';

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
                  <div className={cx('navIcon')}>
                      <Link to="/explore">
                        <IosCompass fontSize="2rem" />
                      </Link>
                  </div>
                  <div className={cx('navIcon')}>
                    <Link to="/blog">
                      <IosBookOutline fontSize="2rem" />
                    </Link>
                  </div>
                  <div className={cx('navIcon')}>
                      <Link to="/profile">
                          <IosPersonOutline fontSize="2rem" />
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    );

export default Navigation;
