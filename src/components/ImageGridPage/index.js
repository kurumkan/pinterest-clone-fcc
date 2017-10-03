import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ImageGridPage.css';

class ImageGridPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      // These piece of code should be rewritten
      const elem = document.querySelector('.grid');
      const msnry = new Masonry( elem, {
        // options
        horizontalOrder: true, // keep horizontal order
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer', // this element is used to define grid element size
        gutter: 5, // horizontal space between grid elements
        fitWidth: true // centering the grid container
      });
    }, 10);
  }

  render() {
    return (
      <div className="grid">
        <div className="grid-sizer"></div>
        <div className="grid-item">
          <img src="src/images/300.jpeg" />
          <span className="btn share-btn fa fa-share-alt">
            <span className="tooltip">
              <span className="title">
                Share this Pin
              </span>
              <div className="button-group">
                <span className="fa fa-facebook social-btn "></span>
                <span className="fa fa-twitter social-btn "></span>
                <span className="fa fa-link social-btn "></span>
              </div>
            </span>
          </span>
          <span className="btn save-btn">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            Save
          </span>
          <p className="img-description">
            Lorem Ipsum
            <a className="author" href="#">By Ethan Hein</a>
          </p>
        </div>
        <div className="grid-item">
          <img src="src/images/350.jpeg" />
          <span className="btn share-btn fa fa-share-alt">
            <span className="tooltip">
              <span className="title">
                Share this Pin
              </span>
              <div className="button-group">
                <span className="fa fa-facebook social-btn "></span>
                <span className="fa fa-twitter social-btn "></span>
                <span className="fa fa-link social-btn "></span>
              </div>
            </span>
          </span>
          <span className="btn save-btn">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            Save
          </span>
          <p className="img-description">
            Lorem Ipsum
            <a className="author" href="#">By Alexander Morozov</a>
          </p>
        </div>
        <div className="grid-item">
          <img src="src/images/300.jpeg" />
          <span className="btn share-btn fa fa-share-alt">
            <span className="tooltip">
              <span className="title">
                Share this Pin
              </span>
              <div className="button-group">
                <span className="fa fa-facebook social-btn "></span>
                <span className="fa fa-twitter social-btn "></span>
                <span className="fa fa-link social-btn "></span>
              </div>
            </span>
          </span>
          <span className="btn save-btn">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            Save
          </span>
          <p className="img-description">
            Lorem Ipsum
            <a className="author" href="#">By Ethan Hein</a>
          </p>
        </div>
        <div className="grid-item">
          <img src="src/images/350.jpeg" />
          <span className="btn share-btn fa fa-share-alt">
            <span className="tooltip">
              <span className="title">
                Share this Pin
              </span>
              <div className="button-group">
                <span className="fa fa-facebook social-btn "></span>
                <span className="fa fa-twitter social-btn "></span>
                <span className="fa fa-link social-btn "></span>
              </div>
            </span>
          </span>
          <span className="btn save-btn">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            Save
          </span>
          <p className="img-description">
            Lorem Ipsum
            <a className="author" href="#">By Alexander Morozov</a>
          </p>
        </div>
        <div className="grid-item">
          <img src="src/images/300.jpeg" />
          <span className="btn share-btn fa fa-share-alt">
            <span className="tooltip">
              <span className="title">
                Share this Pin
              </span>
              <div className="button-group">
                <span className="fa fa-facebook social-btn "></span>
                <span className="fa fa-twitter social-btn "></span>
                <span className="fa fa-link social-btn "></span>
              </div>
            </span>
          </span>
          <span className="btn save-btn">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            Save
          </span>
          <p className="img-description">
            Lorem Ipsum
            <a className="author" href="#">By Ethan Hein</a>
          </p>
        </div>
        <div className="grid-item">
          <img src="src/images/350.jpeg" />
          <span className="btn share-btn fa fa-share-alt">
            <span className="tooltip">
              <span className="title">
                Share this Pin
              </span>
              <div className="button-group">
                <span className="fa fa-facebook social-btn "></span>
                <span className="fa fa-twitter social-btn "></span>
                <span className="fa fa-link social-btn "></span>
              </div>
            </span>
          </span>
          <span className="btn save-btn">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            Save
          </span>
          <p className="img-description">
            Lorem Ipsum
            <a className="author" href="#">By Alexander Morozov</a>
          </p>
        </div>
        <div className="grid-item">
          <img src="src/images/300.jpeg" />
          <span className="btn share-btn fa fa-share-alt">
            <span className="tooltip">
              <span className="title">
                Share this Pin
              </span>
              <div className="button-group">
                <span className="fa fa-facebook social-btn "></span>
                <span className="fa fa-twitter social-btn "></span>
                <span className="fa fa-link social-btn "></span>
              </div>
            </span>
          </span>
          <span className="btn save-btn">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            Save
          </span>
          <p className="img-description">
            Lorem Ipsum
            <a className="author" href="#">By Ethan Hein</a>
          </p>
        </div>
        <div className="grid-item">
          <img src="src/images/350.jpeg" />
          <span className="btn share-btn fa fa-share-alt">
            <span className="tooltip">
              <span className="title">
                Share this Pin
              </span>
              <div className="button-group">
                <span className="fa fa-facebook social-btn "></span>
                <span className="fa fa-twitter social-btn "></span>
                <span className="fa fa-link social-btn "></span>
              </div>
            </span>
          </span>
          <span className="btn save-btn">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            Save
          </span>
          <p className="img-description">
            Lorem Ipsum
            <a className="author" href="#">By Alexander Morozov</a>
          </p>
        </div>
        <div className="grid-item">
          <img src="src/images/300.jpeg" />
          <span className="btn share-btn fa fa-share-alt">
            <span className="tooltip">
              <span className="title">
                Share this Pin
              </span>
              <div className="button-group">
                <span className="fa fa-facebook social-btn "></span>
                <span className="fa fa-twitter social-btn "></span>
                <span className="fa fa-link social-btn "></span>
              </div>
            </span>
          </span>
          <span className="btn save-btn">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            Save
          </span>
          <p className="img-description">
            Lorem Ipsum
            <a className="author" href="#">By Ethan Hein</a>
          </p>
        </div>
        <div className="grid-item">
          <img src="src/images/350.jpeg" />
          <span className="btn share-btn fa fa-share-alt">
            <span className="tooltip">
              <span className="title">
                Share this Pin
              </span>
              <div className="button-group">
                <span className="fa fa-facebook social-btn "></span>
                <span className="fa fa-twitter social-btn "></span>
                <span className="fa fa-link social-btn "></span>
              </div>
            </span>
          </span>
          <span className="btn save-btn">
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            Save
          </span>
          <p className="img-description">
            Lorem Ipsum
            <a className="author" href="#">By Alexander Morozov</a>
          </p>
        </div>
      </div>
    );
  }
}

export default ImageGridPage;