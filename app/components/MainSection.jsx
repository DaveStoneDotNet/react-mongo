import React      from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames/bind';
import TopicItem  from '../components/TopicItem';

import styles     from '../css/components/main-section.css';

const cx = classNames.bind(styles);

const MainSection = ({ topics, onIncrement, onDecrement, onDestroy }) => {
  const topicItems = topics.map((topic, key) => {
    return (
      <TopicItem index          = { key }
                 key            = { key }
                 id             = { topic.id }
                 text           = { topic.text }
                 incrementCount = { onIncrement }
                 decrementCount = { onDecrement }
                 destroyTopic   = { onDestroy } />);
  });

  return (
    <div className={cx('main-section')}>
      <h3 className={cx('header')}>Items</h3>
      <ul className={cx('list')}>{topicItems}</ul>
    </div>
  );
};

MainSection.propTypes = {
                          topics:      PropTypes.array.isRequired,
                          onIncrement: PropTypes.func.isRequired,
                          onDecrement: PropTypes.func.isRequired,
                          onDestroy:   PropTypes.func.isRequired
                        };

export default MainSection;
