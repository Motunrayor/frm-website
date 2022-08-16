import React, { useState, useEffect } from 'react';
import Styles from '../NavBar/Navbar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <nav>
      <div className={navbar ? 'changeBackground' : 'navbarContainer'}>
        <ul className={Styles.navItem}>
          <a href="/">
            <li>Home</li>
          </a>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/ministries">
            <li>Ministries</li>
          </Link>
          <Link to="/events">
            <li>Events</li>
          </Link>
        </ul>
        <div>
          <Link to="/">
            <img
              style={{ width: '80px', height: '80px' }}
              src="https://i0.wp.com/familyresourceministry.org/wp-content/uploads/2022/01/2.png?resize=226%2C249&ssl=1"
              alt=""
            />
          </Link>
        </div>
        <ul className={Styles.navItem}>
          <Link to="/courses">
            <li>Courses</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/giving">
            <li>Giving</li>
          </Link>
          <Link to="/membership">
            <li>Membership</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
