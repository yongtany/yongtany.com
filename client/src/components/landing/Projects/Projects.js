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
        <ProjectItem
          url="https://github.com/yongtany/yongtany.com"
          title="yongtany.com"
          at="Side Project"
          tag1="react"
          tag2="nodejs"
          tag3="mongodb"
          discription="This blog is a place for me to write down what I think. By this, I can improve English which is not my native language and also help me empty my brain. By doing this I hope I can help people with some of the thinking, tutorial or whatever stuff I wrote here."
        />
        <ProjectItem
          url="https://github.com/yongtany/loaf"
          title="loaf"
          at="K-Hackathon"
          tag1="react"
          tag2="django"
          tag3="apriori"
          discription="Team member and project recommendation platform through user data analysis and project evaluation algorithm."
        />
        <ProjectItem
          url="https://github.com/yongtany/etherowd"
          title="Etherowd"
          at="KNU"
          tag1="solidity"
          tag2="nodejs"
          tag3="react"
          discription="Crowdfunding platform through etherium-based trust transactions."
        />
        <ProjectItem
          url="https://github.com/yongtany/Data-Structures-and-Algorithms"
          title="Algorithm study"
          at="Studying"
          tag1="algorithm"
          tag2="BJO"
          tag3="SWEA"
          discription="
          I'm trying to solve the problem of BOJ and SWEA and improve the algorithm ability."
        />
      </div>
    </div>
  )
}
const ProjectItem = ({url, title, at, tag1, tag2, tag3, discription}) => (
  <div className={cx('projects-item')}>
    <div className={cx('item-header')}>
      <a href={url}><h3 className={cx('title')}>{title}</h3></a>
      <h4 className={cx('project-at')}>{at}</h4>
      <div className={cx('tag-list')}>
        <span className={cx('ptag')}>{tag1}</span>
        <span className={cx('ptag')}>{tag2}</span>
        <span className={cx('ptag')}>{tag3}</span>
      </div>
    </div>
    <div className={cx('content')}>
      <p className={cx('content')}>
        {discription}
      </p>
    </div>
  </div>
);

export default Projects;
