import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="Header">
        <div className="logo">
          <a href="#"><img src="images/logo.jpg" alt="Logo" /></a>
        </div>
        <div className="search-btn-wrapper">
          <span className="btn search-btn">
            <FontAwesome name="search" />
          </span>
        </div>
        <div className="search-wrapper">
          <div className="search-container">
            <FontAwesome name="search" className="left icon"/>
            <input type="search" name="top-search" placeholder="Search"/>
          </div>
        </div>
        <div className="home-btn-wrapper">
          <a href="#" className="btn home-btn">
            Home
          </a>
        </div>
        <div className="profile-btn-wrapper">
          <a href="#" className="btn profile-btn">
            <FontAwesome name="user" className="icon rounded" />
            <span className="username">ARTURARTUR</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;