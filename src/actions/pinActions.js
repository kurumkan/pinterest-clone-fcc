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
    .then((data)=>{
      dispatch({
        type: GET_PINS_SUCCESS,
        data
      });
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
  id
});

export const hidePinPopup = () => ({ type: HIDE_PIN_POPUP });