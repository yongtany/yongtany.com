import React from 'react';
import { Link } from "react-router-dom";
import IosCompass from 'react-ionicons/lib/IosCompassOutline';
import IosPersonOutline from 'react-ionicons/lib/IosPersonOutline';
import IosBookOutline from 'react-ionicons/lib/IosBookOutline';
import styles from "./styles.scss";

const Navigation = (props) => (
        <div className={styles.navigation}>
          <div className={styles.inner}>
              <div className={styles.column}>
                  <Link to="/">
                      <img
                          src={require("images/logo.png")}
                          className={styles.logo}
                          alt="Logo"
                      />
                  </Link>
              </div>
              <div className={styles.column}>
                  <form onSubmit={props.onSubmit}>
                      <input
                          type="text"
                          placeholder="Search"
                          className={styles.searchInput}
                          value={props.value}
                          onChange={props.onInputChange}
                      />
                  </form>
              </div>
              <div className={styles.column}>
                  <div className={styles.navIcon}>
                      <Link to="/explore">
                        <IosCompass fontSize="2rem" />
                      </Link>
                  </div>
                  <div className={styles.navIcon}>
                    <Link to="/blog">
                      <IosBookOutline fontSize="2rem" />
                    </Link>
                  </div>
                  <div className={styles.navIcon}>
                      <Link to="/profile">
                          <IosPersonOutline fontSize="2rem" />
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    );

export default Navigation;
