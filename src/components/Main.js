import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';

const Home = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default Home;
