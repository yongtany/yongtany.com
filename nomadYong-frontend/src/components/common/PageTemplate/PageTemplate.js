import React from 'react'
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import NavigationContainer from 'containers/common/NavigationContainer';
import Footer from 'components/common/Footer';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
    <div className={cx('page-template')}>
        <NavigationContainer />
        <main>
          {children}
        </main>
        <Footer />
    </div>
);

export default PageTemplate;
