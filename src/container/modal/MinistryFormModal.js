import React from 'react';
import { ReactComponent as Close } from '../../assets/icons/closeModal.svg';
import Modal from '../../components/Modal/Modal';
import PropTypes from 'prop-types';
import MinistryForm from '../../components/Form/MinistryForm';
import styles from '../../pages/Ministry/ministry.module.scss';

const MinistryFormModal = ({ isOpen, onClick }) => {
  return (
    <div>
      <Modal isOpen={isOpen}>
        <div className={styles.header}>
          <h2>Registration Form</h2>
          <div aria-hidden onClick={onClick} className={styles.icon}>
            <Close />
          </div>
        </div>
        <p>
          Below is the list of the various departments and ministry opportunities under Family
          Resource Ministry. Feel free to indicate where you will like to serve, please.
        </p>
        <div>
          <MinistryForm />
        </div>
      </Modal>
    </div>
  );
};
MinistryFormModal.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func
};

export default MinistryFormModal;
