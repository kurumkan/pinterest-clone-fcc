import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import LogoImg from 'images/logo.jpg';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      term: ''
    };
    this.toggleSearchbar = this.toggleSearchbar.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleSearchbar(e) {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleChange(e) {
    this.setState({
      term: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { term } = this.state;

    alert(term);

    this.setState({
      term: ''
    });
  }
  render() {
    return (
      <nav className={`Header ${this.state.isOpen && 'open'}`}>
        <div className="logo">
          <a href="#"><img src={LogoImg} alt="Logo" /></a>
        </div>
        <div className="search-btn-wrapper">
          <span className="btn search-btn" onClick={this.toggleSearchbar}>
            <FontAwesome name="search" />
          </span>
        </div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div className="search-container">
            <FontAwesome name="search" className="left icon"/>
            <input
              type="search"
              name="top-search"
              placeholder="Search"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
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