import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', ()=> {
  const rootEl = document.getElementById('root');
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

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  ReactDOM.render(
    <h1>Here we go</h1>
    rootEl
  );



});
