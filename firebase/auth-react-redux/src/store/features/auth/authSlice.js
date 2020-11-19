import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    error: null
  },
  reducers: {
    login(state, action) {
      console.log('LOGIN');
    },
    logout(state, action) {
      console.log('LOGOUT');
    },
    register(state, action) {
      console.log('REGISTER');
    }
  }
});

export const { login, logout, register } = authSlice.actions;

export default authSlice.reducer;
