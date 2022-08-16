import React from 'react';
import Styles from '../Footer/footer.module.scss';
// import Logo from '../../assets/icons/download.png';
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className={Styles.footerContainer}>
        <div className={Styles.footerItems}>
          <Link to="/">
            <img
              style={{ width: '150px' }}
              src="https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/01/2.png?resize=226%2C249&ssl=1"
              alt=""
            />
          </Link>
          <p className={Styles.footerItemText}>Follow us</p>
          <div className={Styles.socialLogo}>
            <a href="https://www.facebook.com/familyresourceministry">
              <AiFillFacebook className={Styles.footerIcon} />
            </a>
            <a href="https://twitter.com/familyResourceM">
              <AiFillTwitterCircle className={Styles.footerIcon} />
            </a>
            <a href="https://www.instagram.com/familyresourceministry/">
              <AiFillInstagram className={Styles.footerIcon} />
            </a>
            <a href="https://www.youtube.com/channel/UCVfMpk9_8YulYYsjOvN745w">
              <AiFillYoutube className={Styles.footerIcon} />
            </a>
          </div>
        </div>
        <div className={Styles.footerItems}>
          <p className={Styles.footerLinkHeading}>Quick Links</p>
          <a href="/" className={Styles.footerItemText}>
            Home
          </a>
          <a href="/about" className={Styles.footerItemText}>
            About Us
          </a>
          <a href="/membership" className={Styles.footerItemText}>
            Membership
          </a>
          <a href="/giving" className={Styles.footerItemText}>
            Giving
          </a>
        </div>
        <div className={Styles.footerItems}>
          <p className={Styles.footerLinkHeading}>Learn more</p>
          <a href="/ministries" className={Styles.footerItemText}>
            Ministries
          </a>
          <a href="/events" className={Styles.footerItemText}>
            Events
          </a>
          <a href="/courses" className={Styles.footerItemText}>
            Courses
          </a>
          <a href="/blog" className={Styles.footerItemText}>
            Blog
          </a>
        </div>
        <div className={Styles.footerItems}>
          <p className={Styles.footerLinkHeading}>CONTACT Info</p>
          <p className={Styles.footerItemText}>
            <span>Address:</span>
            <br />
            Suite 305, Nwukpabi Plaza, Plot 14,
            <br /> Waziri Ibrahim Crescent, Gudu, Abuja. <br />
            Nigeria.
          </p>
          <p className={Styles.footerItemText}>
            <span>Phone Number:</span>
            <br />
            <a href="tel:08091336036">+234 809 133 6036, +234 802 430 4823</a>
          </p>
          <p className={Styles.footerItemText}>
            <span>Email:</span>
            <br />
            <a href="">familyresourceministry@gmail.com</a>
          </p>
        </div>
      </div>
      <p className={Styles.copyright}>
        Copyright © 2022 Family Resource Ministry - All Rights Reserved.
      </p>
    </div>
  );
};
export default Footer;
