import React from 'react';
import styles from './LandingWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LandingWrapper = ({children}) => (
    <div className={cx('landing-wrapper')}>
        {children}
    </div>
);

export default LandingWrapper;
