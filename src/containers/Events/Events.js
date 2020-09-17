import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import classes from './Events.module.scss';
import {addEvent, deleteEvent, updateEvent} from "../../actions/events";
import EventsList from "../../components/EventsList/EventsList";
import EventsAddModal from "../EventsAddModal/EventsAddModal";
import Button from "../../components/UI/Button/Button";
import {show} from "redux-modal";
import EventsSearch from "../../components/EventsSearch/EventsSearch";
import PropTypes from "prop-types";

const Events = ({isAuthenticated, username, role, events, deleteEvent, updateEvent, addEvent, show}) => {
  let [filteredEvents, setFilteredEvents] = useState([]);
  let [searchString, setSearchString] = useState('');
  let [searchedEvents, setSearchedEvents] = useState([]);

  const getFilteredEvents = () => {
    let filteredData = events.filter(item => {
      return item.author === username
          || role === 'admin'
          || item.published === true;
    });

    filteredData.sort((a, b) => b.timestamp - a.timestamp);

    setFilteredEvents(filteredData);

    searchEvents(searchString, filteredData);
  }

  const searchEvents = (string, events) => {
    if (string === '') {
      setSearchedEvents(events);
      return
    }

    const filteredData = events.filter(item => {
      const title = item.title.toLowerCase(),
          text = item.text.toLowerCase(),
          str = string.toLowerCase()

      return title.indexOf(str) !== -1 || text.indexOf(str) !== -1;
    });

    setSearchedEvents(filteredData);
    setSearchString(string)
  }

  useEffect(getFilteredEvents, [username, events])

  return (
    <div className={classes.events}>
      <h1 className={classes.title}>Новости</h1>

      <div className={classes.search}>
        <EventsSearch
          onSubmit={(string) => searchEvents(string, filteredEvents)}
        />
      </div>

      <div className={classes.list}>
        {
          searchedEvents.length
            ? <EventsList
              events={searchedEvents}
              deleteEvent={deleteEvent}
              updateEvent={updateEvent}
              role={role}
            />
            : 'Новостей нет'
        }
      </div>

      {
        isAuthenticated &&
          <React.Fragment>
            <div className={classes.button}>
              <Button
                onClick={() => show('EventsAddModal')}
                color='dark'
              >
                Добавить новость
              </Button>
            </div>

            <EventsAddModal
              onSubmit={addEvent}
            />
          </React.Fragment>
      }
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    deleteEvent: (id) => dispatch(deleteEvent(id)),
    updateEvent: (id, data) => dispatch(updateEvent(id, data)),
    addEvent: (date, title, description) => dispatch(addEvent(date, title, description)),
    show: (name, props) => dispatch(show(name, props)),
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    role: state.auth.role,
    username: state.auth.username,
    events: state.events.events,
  };
}

Events.propTypes = {
  isAuthenticated: PropTypes.bool,
  role: PropTypes.string,
  username: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    published: PropTypes.bool.isRequired
  })),
  deleteEvent: PropTypes.func,
  updateEvent: PropTypes.func,
  addEvent: PropTypes.func,
  show: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
