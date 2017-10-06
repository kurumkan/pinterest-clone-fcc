import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'components/Masonry/Grid';

import ImageGridItem from 'components/ImageGridItem';
import './ImageGrid.css';

class ImageGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 10
    };
    this.loadMore = this.loadMore.bind(this);
    this.renderGrid = this.renderGrid.bind(this);
  }

  componentDidMount() {
    this.loadMore();
  }

  loadMore() {
    console.log('loadmore')
    this.props.getPins(this.state.offset, this.state.limit);
    this.setState({
      offset: this.state.offset + this.state.limit
    })
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
      <Grid
        columnWidth={260}
        fitWidth={true}
        gutter={5}
        loadMore={() => this.loadMore()}
        scrollThreshold={50}
      >
        { this.renderGrid() }
      </Grid>
    );
  }
}

export default ImageGrid;