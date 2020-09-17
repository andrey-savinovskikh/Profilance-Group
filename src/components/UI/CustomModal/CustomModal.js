import React from 'react';
import classes from './CustomModal.module.scss';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
    background: 'transparent'
  }
}

const CustomModal = ({children, onRequestClose, ...props}) => {
  return (
    <Modal
      ariaHideApp={false}
      style={customStyles}
      onRequestClose={onRequestClose}
      {...props}
    >
      <div className={classes.content}>
        <div
          className={classes.close}
          onClick={onRequestClose}
        >
          <i className="fas fa-times"/>
        </div>

        {children}
      </div>
    </Modal>
  )
}

CustomModal.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  props: PropTypes.object
}

export default CustomModal
