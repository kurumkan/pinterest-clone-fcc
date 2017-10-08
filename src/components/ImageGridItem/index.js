import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Tooltip from 'components/Tooltip';

import { GridItem } from 'react-masonry-infinite-scroll';

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
      <GridItem className={`${shouldShowPopup && 'focused'}`}>
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
                <FontAwesome name="facebook" className="social-btn" />
                <FontAwesome name="twitter" className="social-btn" />
                <FontAwesome name="link" className="social-btn" />
              </div>
            </Tooltip>
          </span>
          <span className="btn save-btn">
            <FontAwesome name="thumb-tack" className="icon" />
            Save
          </span>
        <p className="img-description">
          { description } {this.props.id}
          <a className="author" href="#">By { author }</a>
        </p>
      </GridItem>
    );
  }
}

ImageGridItem.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  img: PropTypes.string,
  shouldShowPopup: PropTypes.bool,

  showPopup: PropTypes.func.isRequired
};

ImageGridItem.defaultProps = {
  author: '',
  description: '',
  id: '',
  img: '',
  shouldShowPopup: false
};

export default ImageGridItem;