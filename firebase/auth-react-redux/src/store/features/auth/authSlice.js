import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    error: null
  },
  reducers: {
    login: () => {
      console.log('LOGIN');
    },
    logout: () => {
      console.log('LOGOUT');
    },
    register: () => {
      console.log('REGISTER');
    }
  }
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
