import React from 'react';
import styles from './AboutMyself.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AboutMyself = () => (
  <div className={cx('about-myself')}>
    <div className={cx('about-header')}>
      <span>About myslef</span>
    </div>
    <div className={cx('paper')}>
      <h4>Intro</h4>
      <p>I’m from Seoul, a city in the beautiful country call South Korea. My current studies it’s
       <strong> Full-stack Web & Mobile Development skills</strong>. I work mainly with this techs
      </p>
      <ul className={cx('list')}>
        <li>React</li>
        <li>React-Native</li>
        <li>NodeJS</li>
        <li>Django</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Mysql</li>
      </ul>
      <p>
      I studied Computer Science at Kyungpook National University. When I was in school, I was interested in web development so I studied intensively.
      </p>
      <p>
      Besides that, I own a Blog where I study web development. I try my best to give a good insight into how I think about working with certain problems. I help then getting into Javascript as well with server-side stuff.
      </p>
      <p>
        When I’m not working I still code some of my personal projects. Programming is more than just a work for me, this is a hobby, it’s a passion. But if I’m not in front of a computer I pass all my time doing excercise.<span role="img" aria-label="Snowman">😃</span>.
      </p>
      <h4>Why having this blog?</h4>
      <p>
      This blog is a place for me to write down what I think. This helps me first with my English who is not my native language, and that also help me empty my brain. By doing this I hope I can help people with some of the thinking, tutorial or whatever stuff I wrote here.
      </p>
    </div>
  </div>
);

export default AboutMyself;
