import React from 'react';
import Styles from './contact.module.scss';

const ContactUs = () => {
  return (
    <div className={Styles.ContactWrapper}>
      <div className={Styles.Contact}>
        <h1>Contact Us</h1>
        <p className={Styles.ItemText}>
          Head Office: Suite 305, Nwukpabi Plaza, Plot 14, Waziri Ibrahim Crescent, Gudu, Abuja.
          Nigeria.
        </p>
        <p className={Styles.ItemText}>
          Call us today: &nbsp;
          <a href="tel:+2348091336036">+234 809 133 6036</a>,{' '}
          <a href="tel:+2348162341724">+234 816 234 1724</a>,{' '}
          <a href="tel:+2348024304823">+234 802 430 4823</a>.
        </p>
        {/* <p>Free Counseling</p>
      <p>
        In the multitude of counsel, there is safety! We offer free confidential Bible-based
        counseling on marriage, relationship and courtship.
      </p>
      <p>Prayer Request</p>
      <p>
        Again, I say unto you, that if two of you shall agree on earth as touching anything that
        they shall ask, it shall be done for them of my Father which is in heaven Matt 18:19.
      </p> */}
      </div>
    </div>
  );
};

export default ContactUs;
