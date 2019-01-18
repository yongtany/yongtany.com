import React from 'react';
import styles from './AboutWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AboutWrapper = ({children}) => (
    <div className={cx('about-wrapper')}>
        {children}
    </div>
);

export default AboutWrapper;
