import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import Tooltip from 'components/Tooltip';
import Modal from 'components/Modal';

import { GridItem } from 'react-masonry-infinite-scroll';

import './ImageGridItem.css';

class ImageGridItem extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handleShareBtnClick = this.handleShareBtnClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  handleShareBtnClick(e) {
    const { showPopup, id } = this.props;
    this.props.showPopup(id);
  }

  handleClickOutside(e) {
    if (this.shareBtn && !this.shareBtn.contains(e.target) &&  this.props.shouldShowPopup) {
      this.props.hidePinPopup();
    }
  }

  handleSaveClick(e) {
    alert('save clicked');
  }

  render() {
    const { description, author, img, shouldShowPopup } = this.props;
    return (
      <GridItem className={`${shouldShowPopup && 'focused'}`}>
        <div onClick={this.toggleModal}>
          <img src={ img }/>
            <span
              className={`btn share-btn fa fa-share-alt ${shouldShowPopup ? 'visible' : ''}`}
              onClick={this.handleShareBtnClick}
              ref={el => this.shareBtn = el }
            >
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
            <span className="btn save-btn" onClick={this.handleSaveClick}>
              <FontAwesome name="thumb-tack" className="icon" />
              Save
            </span>
          <p className="img-description">
            { description } {this.props.id}
            <Link className="author" to="#">By { author }</Link>
          </p>
          <Modal styles={{ padding: 10 }} show={this.state.showModal} hide={this.toggleModal}>
            <div className="detailed-pin">
              <img src={ img }/>
            </div>
          </Modal>
        </div>
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

  hidePinPopup: PropTypes.func.isRequired,
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