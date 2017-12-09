import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(e) {
    if (this.modal && !this.modal.contains(e.target) &&  this.props.show) {
      this.props.hide();
    }
  }

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="modal" style={{...this.props.styles}}  ref={el => this.modal = el }>
        {this.props.children}
      </div>
    );
  }
}

export default Modal;