import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer, Header } from './components';
import { ContactUs } from './components/common';
import Router from './router';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Router />
        </div>
        <ContactUs />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
