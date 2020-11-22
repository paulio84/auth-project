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

export const fetchUserProfile = createAsyncThunk('auth/fetchUserProfile', async (userId) => {
  const userProfile = await usersCollection.doc(userId).get({ source: 'server' });
  return { userProfile: userProfile.data() };
  // console.log(userProfile.data());
  // if (!userProfile.data()) {
  //   console.log('REJECT');
  //   return rejectWithValue({ error: { message: 'User profile cannot be found' } });
  // }
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
      state.user = {};
      action.error.code = process.env.NODE_ENV === 'production' ? '' : action.error.code;
      state.error = action.error;
    },
    [login.rejected]: (state, action) => {
      state.user = {};
      action.error.message = 'The email address and password are invalid.';
      action.error.code = process.env.NODE_ENV === 'production' ? '' : action.error.code;
      state.error = action.error;
    },
    [logout.fulfilled]: (state, action) => {
      state.user = {};
      state.error = {};
    },
    [fetchUserProfile.rejected]: (state, action) => {
      console.log(action);
      state.user = {};
      action.error.code = process.env.NODE_ENV === 'production' ? '' : action.error.code;
      state.error = action.error;
    },
    [fetchUserProfile.fulfilled]: (state, action) => {
      state.user = action.payload.userProfile;
      state.error = {};
    }
  }
});

export default authSlice.reducer;
