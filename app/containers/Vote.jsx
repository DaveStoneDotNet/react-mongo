import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { connect }          from 'react-redux';
import classNames           from 'classnames/bind';

import EntryBox             from '../components/EntryBox';
import MainSection          from '../components/MainSection';
import Scoreboard           from '../components/Scoreboard';

import { createTopic }      from '../store/actions/topics';
import { typing }           from '../store/actions/topics';
import { incrementCount }   from '../store/actions/topics';
import { decrementCount }   from '../store/actions/topics';
import { destroyTopic }     from '../store/actions/topics';

import styles               from '../css/components/vote.css';

const cx = classNames.bind(styles);

class Vote extends Component {

  render() {

    console.log('VOTE CONTAINER PROPS', this.props);

    const { newTopic, topics, typing, createTopic, destroyTopic, incrementCount, decrementCount } = this.props;

    return (
      <div className={cx('vote')}>
        <EntryBox    topic         = {newTopic}
                     onEntryChange = {typing}
                     onEntrySave   = {createTopic} />
        <MainSection topics        = {topics}
                     onIncrement   = {incrementCount}
                     onDecrement   = {decrementCount}
                     onDestroy     = {destroyTopic} />
        <Scoreboard  topics        = {topics} />
      </div>
    );
  }
}

Vote.propTypes = {
                   topics:         PropTypes.array.isRequired,
                   typing:         PropTypes.func.isRequired,
                   createTopic:    PropTypes.func.isRequired,
                   destroyTopic:   PropTypes.func.isRequired,
                   incrementCount: PropTypes.func.isRequired,
                   decrementCount: PropTypes.func.isRequired,
                   newTopic:       PropTypes.string
                 };

function mapStateToProps(state) {
  return {
           topics:   state.topic.topics,
           newTopic: state.topic.newTopic
         };
}

// mapDispatchToProps (Object or Function): 
// If an object is passed, as it is here, each function inside it is assumed to be a Redux action creator.
// An object with the same function names, but with every action creator wrapped into a dispatch call so they may be 
// invoked directly, will be merged into the component’s props.

export default connect(mapStateToProps, { createTopic, typing, incrementCount, decrementCount, destroyTopic })(Vote);
