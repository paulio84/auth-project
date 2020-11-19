import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { auth } from './config/firebase';
import './styles/tailwind.output.css';

import App from './App';

let app;
auth.onAuthStateChanged((user) => {
  if (!app) {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );

    if (user) {
      store.dispatch({ type: 'auth/fetchUserProfile', payload: user });
    }
  }
});
