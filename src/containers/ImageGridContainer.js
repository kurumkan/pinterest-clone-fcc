import { connect } from 'react-redux';
import ImageGrid from 'components/ImageGrid';
import { getPins, showPinPopup } from 'actions/pinActions';

const select = state => ({
  pins: state.pins.pins,
  focusedPin: state.pins.focusedPin
});

const actions = {
  getPins,
  showPinPopup
};

export default connect(select, actions)(ImageGrid);
