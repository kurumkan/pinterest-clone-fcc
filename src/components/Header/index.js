import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
              <i className="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
        <div className="search-wrapper">
          <div className="search-container">
            <i className="icon left fa fa-search" aria-hidden="true"></i>
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
            <i className="icon rounded fa fa-user" aria-hidden="true"></i>
            <span className="username">ARTURARTUR</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;