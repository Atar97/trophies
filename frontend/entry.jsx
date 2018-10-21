import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store';

import * as actions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', ()=> {
  const rootEl = document.getElementById('root');
  let store;
  if (window.currentUser.id) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore({});
  }

  window.actions = actions;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(
    <Root store={ store } />,
    rootEl
  );

});
