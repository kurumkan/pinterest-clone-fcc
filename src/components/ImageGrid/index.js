import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGridItem from 'components/ImageGridItem';
import './ImageGrid.css';

class ImageGrid extends Component {
  constructor(props) {
    super(props);

    this.renderGrid = this.renderGrid.bind(this);
  }

  componentDidMount() {
    this.props.getPins();
  }

  renderGrid() {
    return this.props.pins.map(pin => (
      <ImageGridItem
        key={pin.id}
        id={pin.id}
        img={pin.img}
        author={pin.author}
        description={pin.description}
        showPopup={this.props.showPinPopup}
        shouldShowPopup={this.props.focusedPin === pin.id}
      />
    ));
  }

  render() {
    return (
      <div className="grid">
        <div className="grid-sizer"></div>
        { this.renderGrid() }
      </div>
    );
  }
}

export default ImageGrid;