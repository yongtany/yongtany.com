import React from 'react'
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import NavigationContainer from 'containers/common/NavigationContainer';
import FooterContainer from 'containers/common/FooterContainer';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
    <div className={cx('page-template')}>
        <NavigationContainer />
        <main>
          {children}
        </main>
        <FooterContainer />
    </div>
);

export default PageTemplate;
