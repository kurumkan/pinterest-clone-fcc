import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Tooltip.css';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.getClasses = this.getClasses.bind(this);
  }

  getClasses() {
    if(!this.props.isOpen) {
      return 'tooltip';
    }

    const classes = [];
    classes.push('tooltip');
    classes.push('open');

    var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    var height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    const targetRect = this.props.targetElement.getBoundingClientRect();

    const x = targetRect.x;
    const y = targetRect.y;

    // check screen width
    if(width < 525 ) {
      // small width
      if(y < height/2) {
        classes.push('south');
      } else {
        classes.push('north');
      }
    } else {
      // wider screens
      if(x < width/2) {
        classes.push('east');
      } else {
        classes.push('west');
      }

      if(y < height/2) {
        classes.push('arrow-top');
      } else {
        classes.push('arrow-bottom');
      }
    }

    return classes.join(' ');
  }

  render() {
    return (
      <span className={this.getClasses()}>
        {this.props.children}
      </span>
    );
  }
}

export default Tooltip;