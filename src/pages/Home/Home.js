import React from 'react';
import { Button } from '../../components/common';
import Styles from './Home.module.scss';
// import Gallery from '../../components/common/Gallery/Gallery';
import Flier1 from '../../assets/images/Abuja2022.jpeg';
import Flier2 from '../../assets/images/Singles21.jpeg';
import Flier3 from '../../assets/images/Abeokuta2021.jpeg';
import Flier4 from '../../assets/images/ParentingCourse.jpg';
import Logo2 from '../../assets/icons/Logo.jpeg';
import { FaCross, FaBible, FaPeopleCarry, FaPray, FaAward, FaDove } from 'react-icons/fa';
import SubscribeForm from '../../components/Form/SubscribeForm';

const Home = () => {
  return (
    <div>
      <div className={Styles.landingPageImage}>
        <div className={Styles.landingPage}>
          <div className={Styles.welcomeText}>
            <p>Welcome to</p>
            <h1>FRM!</h1>
          </div>
          <i>
            <strong>...Our homes are God&apos;s base stations to disciple the nations.</strong>
          </i>
          <div>
            <Button type="button" theme="transparent">
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
      <div className={Styles.corevaluesContainer}>
        <p className={Styles.subtitle}>Our Core Values</p>
        <div className={Styles.corevalues}>
          <div className={Styles.box}>
            <div className={Styles.icon_box}>
              <figure>
                <FaCross style={{ fontSize: '25px' }} />
              </figure>
            </div>
            <h3>Christ Centered</h3>
          </div>
          <div className={Styles.box}>
            <div className={Styles.icon_box}>
              <figure>
                <FaBible style={{ fontSize: '25px' }} />
              </figure>
            </div>
            <h3> Bible Based</h3>
          </div>
          <div className={Styles.box}>
            {' '}
            <div className={Styles.icon_box}>
              <figure>
                <FaPray style={{ fontSize: '25px' }} />
              </figure>
            </div>
            <h3> Prayer Driven</h3>
          </div>
          <div className={Styles.box}>
            {' '}
            <div className={Styles.icon_box}>
              <figure>
                <FaPeopleCarry style={{ fontSize: '25px' }} />
              </figure>
            </div>
            <h3> Team Work</h3>
          </div>
          <div className={Styles.box}>
            {' '}
            <div className={Styles.icon_box}>
              <figure>
                <FaAward style={{ fontSize: '25px' }} />
              </figure>
            </div>
            <h3>Grace</h3>
          </div>
          <div className={Styles.box}>
            {' '}
            <div className={Styles.icon_box}>
              <figure>
                <FaDove style={{ fontSize: '25px' }} />
              </figure>
            </div>
            <h3> Humility in Service</h3>
          </div>
        </div>
      </div>
      <div className={Styles.aboutWrapper}>
        <img style={{ width: '100px', height: '100px' }} src={Logo2} alt="" />
        <h1>About Family Resource Ministry</h1>
        <p className={Styles.aboutDetails}>
          Family Resource Ministry was incorporated in 2014 as a Bible-based non-profit and
          non-denominational Christian group devoted to upholding the values of Biblical marriage
          and promoting skills and standards that build healthy relationships and homes as God’s
          agent of transforming the society. We believe that our homes are God’s base station to
          disciple the nations and advance His kingdom.
        </p>
        <Button type="button" theme="primary">
          <a href="/about">Learn More</a>
        </Button>
      </div>
      <div className={Styles.ministryContainer}>
        <h1>Ministry Opportunities</h1>
        <div className={Styles.ministryText}>
          <p>
            There are various departments and ministry opportunities under Family Resource Ministry.
            Feel free to indicate where you will like to serve.
          </p>
          <Button type="button" theme="secondary">
            <a href="/mi">Get More info</a>
          </Button>
        </div>
      </div>
      <div className={Styles.eventsContainer}>
        <h1>Events & Programs</h1>
        <p className={Styles.description}>
          Don’t miss out, Join us for a refreshing moment with God.
        </p>
        <div className={Styles.flierWrapper}>
          <div className={Styles.filerBox}>
            <img className={Styles.flierImage} src={Flier1} alt="" />
            <p className={Styles.flierInfo}>Couples Dinner | 2:00PM | SAT | May 7, 2022.</p>
          </div>
          <div className={Styles.filerBox}>
            <img className={Styles.flierImage} src={Flier2} alt="" />
            <p className={Styles.flierInfo}>
              Preparing for Marriage | 10:00PM | SAT | DEC 28, 2021.
            </p>
          </div>
          <div className={Styles.filerBox}>
            <img className={Styles.flierImage} src={Flier3} alt="" />
            <p className={Styles.flierInfo}>Couples Dinner | 2:00PM | SAT | May 7, 2022.</p>
          </div>
          <div className={Styles.filerBox}>
            <img className={Styles.flierImage} src={Flier4} alt="" />
            <p className={Styles.flierInfo}>Parenting Course | 2:00PM | SAT | May 7, 2022.</p>
          </div>
        </div>
      </div>
      {/* <div>
        <h1>Our Blog</h1>
      </div> */}
      {/* <Gallery /> */}
      <div className={Styles.sacredWrapper}>
        <div className={Styles.sacredTextContainer}>
          <h1>Join the Sacred Courtship & Sacred Search Classes today.</h1>
          <div>
            <Button type="submit" theme="secondary">
              <a href="/about">Sacred Courtship</a>
            </Button>
            &nbsp;
            <Button type="button" theme="secondary">
              <a href="/about">Sacred Search</a>
            </Button>
          </div>
        </div>
        <div className={Styles.whiteBackground}>
          <img src="https://familyresourceministry.org/wp-content/uploads/2022/01/15.jpg" alt />
        </div>
      </div>
      <div className={Styles.newsletterWapper}>
        <div className={Styles.newsletterTextWapper}>
          <p className={Styles.subtitle2}>Join Our Newsletter</p>
          <p className={Styles.description}>
            Subscribe to our mailing list to stay updated whenever we drop something new.
          </p>
        </div>
        <div className={Styles.formWrapper}>
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
