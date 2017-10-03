import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGridItem from 'components/ImageGridItem';
import './ImageGridPage.css';

class ImageGridPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pins: [
        {
          id: '1',
          img: 'src/images/300.jpeg',
          author: 'Ethan Hein',
          description: 'Lorem Ipsum'
        },
        {
          id: '2',
          img: 'src/images/350.jpeg',
          author: 'Ethan Hein',
          description: 'Lorem Ipsum'
        },
        {
          id: '3',
          img: 'src/images/300.jpeg',
          author: 'Ethan Hein',
          description: 'Lorem Ipsum'
        },
        {
          id: '4',
          img: 'src/images/350.jpeg',
          author: 'Ethan Hein',
          description: 'Lorem Ipsum'
        },
        {
          id: '5',
          img: 'src/images/300.jpeg',
          author: 'Ethan Hein',
          description: 'Lorem Ipsum'
        },
        {
          id: '6',
          img: 'src/images/350.jpeg',
          author: 'Ethan Hein',
          description: 'Lorem Ipsum'
        }
      ]
    };

    this.renderGrid = this.renderGrid.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      // These piece of code should be rewritten
      // with custom masonry layout solution
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

  renderGrid() {
    return this.state.pins.map(pin => (
      <ImageGridItem
        key={pin.id}
        id={pin.id}
        img={pin.img}
        author={pin.author}
        description={pin.description}
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

export default ImageGridPage;