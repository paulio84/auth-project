import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { fetchUserProfile } from './store/features/auth/authSlice';
import { auth } from './config/firebase';
import './styles/tailwind.output.css';

import App from './App';

auth.onAuthStateChanged(async (user) => {
  if (user) {
    await store.dispatch(fetchUserProfile(user.uid));
  }

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
