import React from 'react';
import styles from './Projects.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Projects = () => {
  return (
    <div className={cx('projects')}>
      <div className={cx('projects-header')}>
        <h2 className={cx('title')}>MY PROJECTS</h2>
      </div>
      <div className={cx('projects-contents')}>
        Projects
      </div>
    </div>
  )
}

export default Projects;
