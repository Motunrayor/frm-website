import React from 'react';
import Styles from './giving.module.scss';

const Giving = () => {
  return (
    <div>
      <div className={Styles.titleSectionWrapper}>
        <div className={Styles.titleSection}>Giving</div>
      </div>
      <div className={Styles.givingSectionWrapper}>
        <div className={Styles.givingSection}>
          <p>
            FRM is fueled by the prayers and generosity of God’s people. God, the Owner of the work
            is our primary source. We believe that God uses people and so, we would be glad to
            receive your gifts if the LORD has placed in your hand resources for this work. We
            consider every gift as a trust from God and we would be diligent and faithful stewards.
          </p>
          <p>
            We believe God calls our ministry to be transparent, authentic, and accountable, not
            only in relationships, but also with time and other resources. We are committed to being
            wise stewards before God and others (2 Corinthians 8:21).
          </p>{' '}
        </div>
        <div className={Styles.givingImage}>
          <img
            src="https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/01/funding-frm.jpg?fit=253%2C199&ssl=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Giving;
