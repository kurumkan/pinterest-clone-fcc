import {
  GET_PINS_REQUEST,
  GET_PINS_SUCCESS,
  GET_PINS_FAILURE,
  SHOW_PIN_POPUP,
  HIDE_PIN_POPUP,
  SHOW_ERROR
} from 'constants/actionTypes';

import api from 'api';

export const getPins = () => (dispatch, getState) => {
  dispatch({ type: GET_PINS_REQUEST });

  api.getPins()
    .then((res) => {
      dispatch({
        type: GET_PINS_SUCCESS,
        payload: res.data.pins
      });

      function Masonry(elem, props) {
        const { itemSelector, gutter = 0, fitWidth = false, columnWidth = 100 } = props;

        // checking the props:
        if (typeof itemSelector !== 'string') {
          throw 'Error: itemSelector should be a string representing a classname';
        }
        if (Number(parseFloat(gutter)) !== gutter) {
          throw 'Error: gutter should be a number';
        }
        if (typeof fitWidth !== 'boolean') {
          console.warn('Warning: fitWidth should be a boolean value');
        }
        if (Number(parseFloat(columnWidth)) !== columnWidth) {
          throw 'Error: columnWidth should be a number';
        }


        const gridItems = document.getElementsByClassName(itemSelector.substring(1));

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
            topOffset = +gridItems[topIndex].style.top.substring(0, -2) + topRect.height + gutter;
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

      // setTimeout(() => {
      //   const elem = document.querySelector('.grid');
      //   const msnry = new Masonry( elem, {
      //     // options
      //     horizontalOrder: true, // keep horizontal order
      //     itemSelector: '.grid-item',
      //     columnWidth: 260,
      //     gutter: 5 , // horizontal space between grid elements
      //     fitWidth: true // centering the grid container
      //   });
      // }, 50);

    })
    .catch(e => {
      console.log(e)
      dispatch({
        type: 'SHOW_ERROR',
        payload: 'Error: Cannot load pins'
      });
    });
};

export const showPinPopup = id => ({
  type: SHOW_PIN_POPUP,
  payload: id
});

export const hidePinPopup = () => ({ type: HIDE_PIN_POPUP });