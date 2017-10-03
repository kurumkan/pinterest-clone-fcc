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

      // These piece of code should be rewritten
      // with custom masonry layout solution
      setTimeout(() => {
        const elem = document.querySelector('.grid');
        const msnry = new Masonry( elem, {
          // options
          horizontalOrder: true, // keep horizontal order
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer', // this element is used to define grid element size
          gutter: 5, // horizontal space between grid elements
          fitWidth: true // centering the grid container
        });
      }, 50);
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