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
      <div className={cx('project-contents')}>
        <ProjectItem1 />
        <ProjectItem2 />
      </div>
    </div>
  )
}

const ProjectItem1 = () => (
  <div className={cx('projects-item')}>
    <div className={cx('thumbnail')}>
      <img src={require('images/yongtany.png')}  alt='yongtany'/>
    </div>
    <div className={cx('name')}>
      yongtany.com
    </div>
  </div>
);

const ProjectItem2 = () => (
  <div className={cx('projects-item')}>
    <div className={cx('thumbnail')}>
      <img src={require('images/loaf.png')}  alt='yongtany'/>
    </div>
    <div className={cx('name')}>
      loaf.io
    </div>
  </div>
)

export default Projects;
