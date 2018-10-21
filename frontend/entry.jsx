import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import createStore from './store';

document.addEventListener('DOMContentLoaded', ()=> {
  const rootEl = document.getElementById('root');
  const store = createStore({});
  // let store;
  // if (window.currentUser.id) {
  //   const preloadedState = {
  //     entities: {
  //       users: {[window.currentUser.id]: window.currentUser}
  //     },
  //     session: {id: window.currentUser.id}
  //   };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   store = configureStore({});
  // }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(
    <Root store={ store } />,
    rootEl
  );

});
