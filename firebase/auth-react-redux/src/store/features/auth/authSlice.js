import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, usersCollection } from '../../../config/firebase';

export const registerNewUser = createAsyncThunk('auth/register', async (newUser) => {
  const { user } = await auth.createUserWithEmailAndPassword(newUser.email, newUser.password);

  await usersCollection.doc(user.uid).set({
    fullname: newUser.fullname,
    location: newUser.location || 'Whereabouts Unknown',
    displayName: newUser.fullname
  });
});

export const login = createAsyncThunk('auth/login', async (credentials) => {
  await auth.signInWithEmailAndPassword(credentials.email, credentials.password);
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await auth.signOut();
});

export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (userId, { rejectWithValue }) => {
    const userProfile = await usersCollection.doc(userId).get({ source: 'server' });
    if (!userProfile.data()) {
      return rejectWithValue({ message: 'User profile cannot be found' });
    }

    return { userProfile: userProfile.data() };
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      isAuthenticated: false,
      profile: { error: null }
    },
    error: {}
  },
  reducers: {},
  extraReducers: {
    [registerNewUser.rejected]: (state, action) => {
      const user = { isAuthenticated: false, profile: { error: null } };
      state.user = user;
      action.error.code = process.env.NODE_ENV === 'production' ? '' : action.error.code;
      state.error = action.error;
    },
    [registerNewUser.fulfilled]: (state, action) => {
      const user = { ...state.user, isAuthenticated: true };
      state.user = user;
      state.error = {};
    },
    [login.rejected]: (state, action) => {
      const user = { isAuthenticated: false, profile: { error: null } };
      state.user = user;
      action.error.message = 'The email address and password are invalid.';
      action.error.code = process.env.NODE_ENV === 'production' ? '' : action.error.code;
      state.error = action.error;
    },
    [login.fulfilled]: (state, action) => {
      const user = { ...state.user, isAuthenticated: true };
      state.user = user;
      state.error = {};
    },
    [logout.fulfilled]: (state, action) => {
      const user = { isAuthenticated: false, profile: { error: null } };
      state.user = user;
      state.error = {};
    },
    [fetchUserProfile.rejected]: (state, action) => {
      const user = { ...state.user, profile: { error: action.payload.message } };
      state.user = user;
      state.error = {};
    },
    [fetchUserProfile.fulfilled]: (state, action) => {
      const user = {
        ...state.user,
        profile: { ...action.payload.userProfile, error: null }
      };
      state.user = user;
      state.error = {};
    }
  }
});

export default authSlice.reducer;
