import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"

import configureStore from './store/store';
import {receiveTodo, receiveTodos, removeTodo, fetchTodos} from './actions/todo_actions';
import {receiveStep, receiveSteps, removeStep, toggleStep} from './actions/step_actions';
import {allTodos, stepsByTodoId} from './reducers/selector'

// import {fetchTodos} from './utils/todo_api_util'


document.addEventListener("DOMContentLoaded", () => {
  window.store = configureStore();
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  // window.removeTodo = removeTodo;
  // window.receiveStep = receiveStep;
  // window.receiveSteps = receiveSteps;
  // window.removeStep = removeStep;
  // window.toggleStep = toggleStep;
  // window.allTodos = allTodos;
  // window.stepsByTodoId = stepsByTodoId;
  window.fetchTodos = fetchTodos;
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

  // const initialState = {
  //   todos: {
  //     1: {
  //       id: 1,
  //       title: "wash car",
  //       body: "with soap",
  //       done: false
  //     },
  //     2: {
  //       id: 2,
  //       title: "wash dog",
  //       body: "with shampoo",
  //       done: true
  //     }
  //   },
  //   steps: {
  //     1: {
  //       id: 1,
  //       title: 'walk to store',
  //       done: false,
  //       todo_id: 1
  //     },
  //     2: {
  //       id: 2,
  //       title: 'buy soap',
  //       done: false,
  //       todo_id: 1
  //     }
  //   }
  // };