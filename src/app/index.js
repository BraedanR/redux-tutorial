import {render} from "react-dom";
import React from "react";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";

import App from "./components/App";

const initialState = {
  result: 1,
  lastValues: []
};

// Reducers must use UNIQUE actions
const mathReducer = (state = {
  result: 1,
  lastValues: []
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload
      };
      lastValues: [...state.lastValues, action.payload]
      break;
  }
  return state;
};

const userReducer = (state = {
  name: "Brae",
  age: 27
}, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
};

const myLogger = (store) => (next) => (action) => {
  console.log("Logged Action: ", action);
  next(action);
};

// If reducers key name match, this notation works! Otherwise: ({reducer: our_reducer})
const store = createStore(combineReducers({mathReducer, userReducer}), {},
  applyMiddleware(createLogger())
);

store.subscribe(() => {
  // console.log("Store updated!", store.getState());
});

render(<Provider store={store}>
          <App />
      </Provider>,
   window.document.getElementById('app'));
