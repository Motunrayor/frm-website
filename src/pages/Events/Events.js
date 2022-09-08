import React from 'react';
// import { Button } from '../../components/common';
import Styles from './event.module.scss';

const Events = () => {
  return (
    <div>
      <div className={Styles.titleSectionWrapper}>
        <div className={Styles.titleSection}>
          <div className={Styles.titleTextWrapper}>
            <p className={Styles.title}>Events</p>
          </div>
        </div>
      </div>
      <div className={Styles.wrapper}>
        <p>Follow our events for the year as they unfold</p>
        <ol>
          <li>Christian Couples Dinner</li>
          <li>Couples Refreshment Retreat</li>
          <li>Sacred Search Conference</li>
          <li>Virtual Hangout</li>
        </ol>
        <div>
          connect to youtube{' '}
          <a href="https://www.youtube.com/channel/UCVfMpk9_8YulYYsjOvN745w">Watch Video</a>
        </div>
      </div>
    </div>
  );
};

export default Events;
