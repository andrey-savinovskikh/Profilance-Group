import keyMirror from 'key-mirror'

const ActionTypes = keyMirror({
  AUTH_SUCCESS: null,
  AUTH_LOGOUT: null,
  AUTH_ERROR: null,

  GET_EVENTS: null,
  ADD_EVENT: null,
  UPDATE_EVENT: null,
  DELETE_EVENT: null,

  HIDE_MODAL: null,
  SHOW_MODAL: null,
})

export default ActionTypes