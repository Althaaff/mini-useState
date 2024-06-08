import App from './App'
import { render } from './react-dom';
import React from './react';

function createElement(type, props, ...children) {
  const reactElement = {
    type,
    props: {
      ...props,
    },
  };

  if (children.length) reactElement.props.children = children;

  return reactElement;
}

// own useState Hook : 
let states = [];
let stateIndex = 0;

export const useState = (initialState) => {
  states[stateIndex] = states[stateIndex] ?? initialState;
  console.log(states[stateIndex]);
  const loacalIndex = stateIndex;
  // console.log(states)
  const setState = (newState) => {
    // console.log(states)
    states[loacalIndex] = newState;

    stateIndex = 0;
    // Here we should ideally cause a re-render, but since this is a simplified example, we'll omit it
    // console.log('State updated:', state);  // its Just for debugging purposes
    render(<App />, document.getElementById("root"));
  };

  stateIndex++;
  return [states[loacalIndex], setState];
};

export default {
  createElement,
};