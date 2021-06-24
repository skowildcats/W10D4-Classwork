import {connect} from 'react-redux';
import StepListItem from './step_list_item';
import {removeStep, receiveStep} from '../../actions/step_actions';

const mDTP = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step)),
  removeStep: step => dispatch(removeStep(step))
});

export default connect(null, mDTP)(StepListItem);