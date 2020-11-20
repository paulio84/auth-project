import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, usersCollection } from '../../../config/firebase';

export const registerNewUser = createAsyncThunk('auth/register', async (newUser) => {
  console.log('AUTH/REGISTER_NEW_USER', newUser);
  const { user } = await auth.createUserWithEmailAndPassword(newUser.email, newUser.password);

  await usersCollection.doc(user.uid).set({
    fullname: newUser.fullname,
    location: newUser.location || 'Whereabouts Unknown',
    displayName: newUser.fullname
  });
});

export const login = createAsyncThunk('auth/login', async (credentials) => {
  console.log('AUTH/LOGIN', credentials);
});

export const logout = createAsyncThunk('auth/logout', async () => {
  console.log('AUTH/LOGOUT');
  await auth.signOut();
});

export const fetchUserProfile = createAsyncThunk('auth/fetchUserProfile', async (userId) => {
  console.log('AUTH/FETCH_USER_PROFILE', userId);
  try {
    const userProfile = await usersCollection.doc(userId).get();
    return { userProfile: userProfile.data() };
  } catch (error) {
    console.error('AUTH/FETCH_USER_PROFILE', error);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    error: {}
  },
  reducers: {},
  extraReducers: {
    [registerNewUser.rejected]: (state, action) => {
      console.log('AUTH/REGISTER_NEW_USER/REJECTED', action);
      state.user = {};
      state.error = action.error;
    },
    [login.fulfilled]: (state, action) => {
      console.log('AUTH/LOGIN/FULFILLED', action.payload);
    },
    [logout.fulfilled]: (state, action) => {
      console.log('AUTH/LOGOUT/FULFILLED', action.payload);
      state.user = {};
      state.error = {};
    },
    [fetchUserProfile.fulfilled]: (state, action) => {
      console.log('AUTH/FETCH_USER_PROFILE/FULFILLED', action.payload);
      state.user = action.payload.userProfile;
      state.error = {};
    }
  }
});

export default authSlice.reducer;
