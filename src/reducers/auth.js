import ActionTypes from '../constants/ActionTypes';

const initialState = {
  isAuthenticated: false,
  username: null,
  role: null,
  error: null
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        username: action.username,
        role: action.role,
        isAuthenticated: true,
        error: null
      }

    case ActionTypes.AUTH_LOGOUT:
      return {
        ...state,
        username: null,
        role: null,
        isAuthenticated: false,
        error: null
      }

    case ActionTypes.AUTH_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}