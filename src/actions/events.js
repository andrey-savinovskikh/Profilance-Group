import ActionTypes from '../constants/ActionTypes';
import {hide} from "redux-modal";
import {v4 as uuidv4} from 'uuid';

export const addEvent = (title, text) => {
  return (dispatch, getState) => {
    const event = {
      id: uuidv4(),
      title,
      text,
      timestamp: + new Date(),
      author: getState().auth.username,
      published: false
    }
    dispatch(addEventSuccess(event))
    dispatch(hide('EventsAddModal'))
  }
}

export const addEventSuccess = (event) => {
  return {
    type: ActionTypes.ADD_EVENT,
    event
  }
}

export const deleteEvent = (id) => {
  return {
    type: ActionTypes.DELETE_EVENT,
    id
  }
}

export const updateEvent = (id, data) => {
  return {
    type: ActionTypes.UPDATE_EVENT,
    id,
    data
  }
}