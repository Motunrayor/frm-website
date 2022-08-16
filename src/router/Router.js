import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  AboutUs,
  Blog,
  Membership,
  Courses,
  Events,
  Giving,
  MinistryOppurtunity
} from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/events" element={<Events />} />
      <Route path="/giving" element={<Giving />} />
      <Route path="/ministries" element={<MinistryOppurtunity />} />
    </Routes>
  );
};

export default Router;
