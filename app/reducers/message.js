import * as types from '../types';

// Message store for global messages, i.e. Network messages / Redirect messages that need to be communicated on the page itself. 
// Ideally, messages/notifications should appear within the component to give the user more context.

export default function message(state = { message: '', type: 'SUCCESS' }, action = {}) {
  switch (action.type) {
    case types.DISMISS_MESSAGE:
      return {...state, message: '', type: 'SUCCESS'};
    default:
      return state;
  }
}
