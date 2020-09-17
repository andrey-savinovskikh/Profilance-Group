import React from 'react';
import classes from './EventsItem.module.scss';
import Button from "../UI/Button/Button";
import moment from 'moment';
import PropTypes from 'prop-types';

const EventsItem = ({event, role, updateEvent, deleteEvent}) => {
  return (
    <div className={classes.item}>
      <h3 className={classes.title}>
        {event.title}
      </h3>

      <div className={classes.date}>
        <span className={classes.tag}>
          {moment(event.timestamp).format('DD.MM.yyyy')}
        </span>
      </div>

      <p className={classes.text}>
        {event.text}
      </p>

      {renderButtons({event, role, updateEvent, deleteEvent})}
    </div>
  )
}

const renderButtons = ({event, role, updateEvent, deleteEvent}) => {
  if (role !== 'admin') return null;

  return (
    <div className={classes.buttons}>
      <div className={classes.button}>
        <Button
          onClick={() => updateEvent(event.id, {published: !event.published})}
          color='dark'
        >
          {
            event.published
              ? 'Отменить публикацию'
              : 'Опубликовать'
          }
        </Button>
      </div>

      <div className={classes.button}>
        <Button
          onClick={() => deleteEvent(event.id)}
          color='red'
        >
          Удалить
        </Button>
      </div>
    </div>
  )
}

EventsItem.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    published: PropTypes.bool.isRequired
  }).isRequired,
  role: PropTypes.string,
  updateEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
}

export default EventsItem
