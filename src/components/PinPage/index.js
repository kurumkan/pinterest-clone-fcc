import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PinPage.css';

class PinPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('PinPage constructor');
    return (
     <div>PINPAGE</div>
    );
  }
}

PinPage.propTypes = {
};

PinPage.defaultProps = {
};

export default PinPage;