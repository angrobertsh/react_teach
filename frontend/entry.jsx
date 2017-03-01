import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as ACTIONS from './actions/item_actions';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, rootEl);
});
