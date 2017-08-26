import React          from 'react';
import PropTypes      from 'prop-types';
import classNames     from 'classnames/bind';

import TopicTextInput from '../components/TopicTextInput';
import styles         from '../css/components/entrybox.css';

const cx = classNames.bind(styles);

// Takes callback functions from props and passes it down to 'TopicTextInput'.
// Essentially this is passing the callback function two levels down from parent
// to the grandchild. To make it cleaner, you could consider:
// 
//   1. moving 'connect' down to this component so you could 'mapStateToProps' and dispatch.
//   2. Move 'TopicTextInput' up to 'EntryBox' so it's less confusing.

const EntryBox = ({onEntryChange, onEntrySave, topic}) => {

  return (
    <div className={cx('entrybox')}>
      <TopicTextInput placeholder   = "Enter Item..."
                      className     = { cx('input') }
                      value         = { topic }
                      onEntryChange = { onEntryChange }
                      onEntrySave   = { onEntrySave}  />
    </div>
  );
};

EntryBox.propTypes = {
                       topic:         PropTypes.string,
                       onEntryChange: PropTypes.func.isRequired,
                       onEntrySave:   PropTypes.func.isRequired
                     };

export default EntryBox;
