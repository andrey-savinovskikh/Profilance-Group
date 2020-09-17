import {combineReducers} from 'redux';
import authReducer from './auth';
import eventsReducer from './events';
import { reducer as modal } from 'redux-modal'

export default combineReducers({
  auth: authReducer,
  events: eventsReducer,
  modal
});
