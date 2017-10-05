import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tooltip from 'components/Tooltip';

import './ImageGridItem.css';

class ImageGridItem extends Component {
  constructor(props) {
    super(props);
    this.handleShareBtnClick = this.handleShareBtnClick.bind(this);
  }

  handleShareBtnClick(e) {
    const { showPopup, id } = this.props;
    this.props.showPopup(id);
  }

  render() {
    const { description, author, img, shouldShowPopup } = this.props;
    return (
      <div className={`grid-item ${shouldShowPopup && 'focused'}`}>
        <img src={ img } />
          <span className="btn share-btn fa fa-share-alt" onClick={this.handleShareBtnClick} ref={(el) => { this.shareBtn = el; }}>
            <Tooltip
              targetElement={this.shareBtn}
              isOpen={shouldShowPopup}
              width={190}
              height={90}
            >
              <span className="title">
                Share this Pin
              </span>
              <div className="button-group">
                <span className="fa fa-facebook social-btn " />
                <span className="fa fa-twitter social-btn " />
                <span className="fa fa-link social-btn " />
              </div>
            </Tooltip>
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