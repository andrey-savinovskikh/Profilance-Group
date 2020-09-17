import ActionTypes from '../constants/ActionTypes';
import eventsList from "../eventsList";

const initialState = {
  events: eventsList
}

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_EVENTS:
      return {
        ...state,
        events: action.events
      };

    case ActionTypes.ADD_EVENT:
      return {
        ...state,
        events: [
          ...state.events,
          action.event
        ]
      };


    case ActionTypes.UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map(event =>
          (event.id === action.id)
            ? {...event, ...action.data}
            : event
        )
      }

    case ActionTypes.DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.id)
      }

    default:
      return state;
  }
}
