import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { fetchUserProfile } from './store/features/auth/authSlice';
import { auth } from './config/firebase';
import './styles/tailwind.output.css';

import App from './App';

auth.onAuthStateChanged((user) => {
  console.log('ON_AUTH_STATE_CHANGED', user);
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

  if (user) {
    store.dispatch(fetchUserProfile(user.uid));
    // TODO: CAN THIS BE CANCELLED IF THE USER IS ALREADY LOADED
  }
});
