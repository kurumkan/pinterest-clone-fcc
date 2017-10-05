import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.loaderCalled = false;
    this.renderGrid = this.renderGrid.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    setTimeout(this.renderGrid, 100);
    window.addEventListener("resize", this.renderGrid);
    window.addEventListener("scroll", this.handleScroll);
  }

  renderGrid() {
    const { gutter = 0, fitWidth = false, columnWidth = 100 } = this.props;

    // checking the props:
    if (Number(parseFloat(gutter)) !== gutter) {
      throw 'Error: gutter should be a number';
    }
    if (typeof fitWidth !== 'boolean') {
      console.warn('Warning: fitWidth should be a boolean value');
    }
    if (Number(parseFloat(columnWidth)) !== columnWidth) {
      throw 'Error: columnWidth should be a number';
    }

    const gridItems = document.getElementsByClassName('grid-item');
    const rowLen = Math.floor(window.innerWidth / columnWidth);

    let gridOffsetLeft = 0;
    if (fitWidth) {
      gridOffsetLeft = (window.innerWidth - rowLen * columnWidth) / 2;
    }

    for(let i = 0, col = 0; i < gridItems.length; i++, col++) {
      const topIndex = i - rowLen;
      let topOffset = 0;
      if (topIndex >= 0) {
        const topRect = gridItems[topIndex].getBoundingClientRect();
        topOffset = +gridItems[topIndex].style.top.slice(0, -2) + topRect.height + gutter;
      }

      if ((col + 1) * columnWidth  > window.innerWidth) {
        col = 0;
      }

      const leftOffset = col * columnWidth + gridOffsetLeft;
      gridItems[i].style.width = `${columnWidth}px`;
      gridItems[i].style.left = `${leftOffset}px`;
      gridItems[i].style.top = `${topOffset}px`;
    }
  }

  handleScroll(e) {
    const bottomLimit = 100;
    const windowHeight = window.innerHeight;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;


    if(scrollTop > windowHeight - document.get) {
      console.log('call funcion')
    }

    // const gap = scrollTop % windowHeight;
    // console.log(this.loaderCalled)
    // if(gap > windowHeight - bottomLimit && !this.loaderCalled) {
    //   this.loaderCalled = true;
    //   console.log('call')
    // } else {
    //   this.loaderCalled = false;
    // }
  }

  render() {
    return (
      <div className="grid">
        {this.props.children}
      </div>
    );
  }
}

Grid.propTypes = {
  gutter: PropTypes.number,
  fitWidth: PropTypes.bool,
  columnWidth: PropTypes.number
};

Grid.defaultProps = {
  gutter: 5,
  fitWidth: false,
  columnWidth: 100
};

export default Grid;