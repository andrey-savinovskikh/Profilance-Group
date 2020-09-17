import React from 'react';
import classes from './EventsList.module.scss';
import EventsItem from "../EventsItem/EventsItem";
import PropTypes from "prop-types";

const EventsList = ({events, role, deleteEvent, updateEvent}) => {
  return (
    <ul className={classes.events}>
      {events.map((event, index) => {
        return (
          <li className={classes.event} key={index}>
            <EventsItem
              event={event}
              deleteEvent={deleteEvent}
              updateEvent={updateEvent}
              role={role}
            />
          </li>
        )
      })}
    </ul>
  )
}

EventsList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    published: PropTypes.bool.isRequired
  })),
  role: PropTypes.string,
  updateEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
}

export default EventsList
