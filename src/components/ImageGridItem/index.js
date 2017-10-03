import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ImageGridItem.css';

class ImageGridItem extends Component {
  constructor(props) {
    super(props);
    this.handleShareBtnClick = this.handleShareBtnClick.bind(this);

    this.state = {
      tooltipClasses: 'tooltip'
    }
  }

  handleShareBtnClick(e) {
    const { showPopup, id } = this.props;
    this.props.showPopup(id);

    const classes = [];
    classes.push('tooltip');
    classes.push('open');

    var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    var height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    var x = e.clientX;
    var y = e.clientY;

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

    this.setState({
      tooltipClasses: classes.join(' ')
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.shouldShowPopup) {
      this.setState({
        tooltipClasses: 'tooltip'
      })
    }
  }

  render() {
    const { description, author, img, shouldShowPopup } = this.props;
    return (
      <div className={`grid-item ${shouldShowPopup && 'focused'}`}>
        <img src={ img } />
          <span className="btn share-btn fa fa-share-alt" onClick={this.handleShareBtnClick}>
            <span className={this.state.tooltipClasses}>
              <span className="title">
                Share this Pin
              </span>
              <div className="button-group">
                <span className="fa fa-facebook social-btn " />
                <span className="fa fa-twitter social-btn " />
                <span className="fa fa-link social-btn " />
              </div>
            </span>
          </span>
          <span className="btn save-btn">
            <i className="fa fa-thumb-tack" aria-hidden="true" />
            Save
          </span>
        <p className="img-description">
          { description }
          <a className="author" href="#">By { author }</a>
        </p>
      </div>
    );
  }
}

export default ImageGridItem;