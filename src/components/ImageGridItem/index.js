import React from 'react';
import PropTypes from 'prop-types';

const ImageGridItem = ({ description, author, img, id }) => (
  <div className="grid-item">
    <img src={ img } />
          <span className="btn share-btn fa fa-share-alt">
            <span className="tooltip">
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

export default ImageGridItem;