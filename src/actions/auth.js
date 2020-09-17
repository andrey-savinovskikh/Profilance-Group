import ActionTypes from "../constants/ActionTypes";
import {hide} from "redux-modal";

const users = [
  {
    'username': 'admin',
    'password': 'admin',
    'role': 'admin'
  },
  {
    'username': 'default',
    'password': 'default',
    'role': 'default'
  },
  {
    'username': 'default2',
    'password': 'default2',
    'role': 'default'
  }
]

export function auth(username, password) {
  return dispatch => {
    const user = users.find((element) => element.username === username && element.password === password);

    if (user) {
      dispatch(authSuccess(user.username, user.role))
      dispatch(hide('SignInModal'))
    } else {
      dispatch(authError('Ошибка авторизации'))
    }
  }
}

export function authSuccess(username, role) {
  return {
    type: ActionTypes.AUTH_SUCCESS,
    username,
    role
  }
}

export function logout() {
  return {
    type: ActionTypes.AUTH_LOGOUT
  }
}

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    error
  }
}