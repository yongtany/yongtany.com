import React from 'react'
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Navigation from 'components/common/Navigation';
import Footer from 'components/common/Footer';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
    <div className={cx('page-template')}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
    </div>
);

export default PageTemplate;
