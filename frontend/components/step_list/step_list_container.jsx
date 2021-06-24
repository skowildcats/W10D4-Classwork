import {connect} from 'react-redux';
import StepList from './step_list';
import {stepsByTodoId} from '../../reducers/selector';

const mSTP = (state, {todo_id}) => ({
  steps: stepsByTodoId(state, todo_id)
});

const mDTP = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step))
});

export default connect(mSTP, mDTP)(StepList);