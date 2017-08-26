import React      from 'react';
import classNames from 'classnames/bind';
import styles     from 'css/components/about.css';

const cx = classNames.bind(styles);

const About = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>About</h1>
    </div>
  );
};

export default About;
