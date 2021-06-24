import {RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP, TOGGLE_STEP} from '../actions/step_actions'

// const initialSteps = {
//   1: {
//     id: 1,
//     title: 'walk to store',
//     done: false,
//     todo_id: 1
//   },
//   2: {
//     id: 2,
//     title: 'buy soap',
//     done: false,
//     todo_id: 1
//   }
// };

const stepsReducer = (state = {}, action) => {

  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_STEPS:
      let step_map = {};
      action.steps.forEach((step) => {
        step_map[step.id] = step;
      })
      return step_map;
    case RECEIVE_STEP:
      newState[action.step.id] = action.step;
      return newState;
    case REMOVE_STEP:
      delete(newState[action.step.id]);
      return newState;
    case TOGGLE_STEP:
      newState[action.step.id].done = !newState[action.step.id].done;
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;