import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Dialog } from '@headlessui/react';
import styles from './modal.module.scss';

const Modal = ({ isOpen, isClose, children, width, height, minWidth }) => {
  return (
    <div>
      <Dialog open={isOpen} onClose={isClose} className={styles.modal}>
        <div
          className={styles.modal__content}
          style={{ width: `${width}px`, minHeight: `${height}px`, minWidth: `${minWidth}px` }}>
          <div>{children}</div>
        </div>
      </Dialog>
    </div>
  );
};

Modal.defaultProps = {
  isClose: object,
  children: React.ReactNode,
  width: ''
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  isClose: PropTypes.func,
  children: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.number,
  minWidth: PropTypes.number
};

export default Modal;
