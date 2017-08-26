import React, { Component } from 'react';
import PropTypes            from 'prop-types';

const ENTER_KEY_CODE = 13;

export default class TopicTextInput extends Component {
  constructor(props) {

    super(props);

    this.onSave    = this.onSave.bind(this);
    this.onChange  = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  // Invoke callbacks passed in as 'props', allowing the component to be used in different ways.

  onSave() {
    const { onEntrySave, value } = this.props;
    onEntrySave(value);
  }

  onChange(event) {
    const { onEntryChange } = this.props;
    onEntryChange(event.target.value);
  }

  // @param  {object} event
  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.onSave();
    }
  }

  render() {
    const { className, placeholder, value } = this.props;
    return (
      <input className   = {className}
             placeholder = {placeholder}
             onChange    = {this.onChange}
             onKeyDown   = {this.onKeyDown}
             value       = {value}
             autoFocus />
    );
  }
}

TopicTextInput.propTypes = {
                             className:     PropTypes.string,
                             placeholder:   PropTypes.string,
                             value:         PropTypes.string,
                             onEntrySave:   PropTypes.func,
                             onEntryChange: PropTypes.func
                           };
