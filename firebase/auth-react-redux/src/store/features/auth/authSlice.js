import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const registerNewUser = createAsyncThunk('auth/register', async (newUser) => {
  console.log('REGISTER_NEW_USER/THUNK', newUser);
});

export const login = createAsyncThunk('auth/login', async (credentials) => {
  console.log('LOGIN/THUNK', credentials);
});

export const logout = createAsyncThunk('auth/logout', async () => {
  console.log('LOGOUT/THUNK');
});

export const fetchUserProfile = createAsyncThunk('auth/fetchUserProfile', async (user) => {
  console.log('FETCH_USER_PROFILE/THUNK', user);
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    error: null
  },
  reducers: {},
  extraReducers: {
    [registerNewUser.fulfilled]: (state, action) => {
      console.log('EXTRA - REGISTER');
    },
    [login.fulfilled]: (state, action) => {
      console.log('EXTRA - LOGIN');
    },
    [logout.fulfilled]: (state, action) => {
      console.log('EXTRA - LOGOUT');
    },
    [fetchUserProfile.fulfilled]: (state, action) => {
      console.log('FETCH_USER_PROFILE');
    }
  }
});

export default authSlice.reducer;
