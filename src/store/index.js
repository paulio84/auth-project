import Vue from 'vue';
import Vuex from 'vuex';
import { auth, usersCollection } from '../config/firebase';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      userProfile: {},
      error: {}
    }
  },
  mutations: {
    SET_USER_PROFILE(state, payload) {
      state.auth = payload;
    }
  },
  actions: {
    async signup(context, formData) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          formData.email,
          formData.password
        );

        // create a user profile
        await usersCollection.doc(user.uid).set({
          fullname: formData.fullname,
          location: formData.location || 'Whereabouts Unknown',
          displayName: formData.fullname
        });

        context.dispatch('fetchUserProfile', user);
      } catch (error) {
        const errorMessage = { message: error.message };
        if (error.code === 'auth/invalid-email') {
          errorMessage.message = 'The email address is invalid.';
        } else if (error.code === 'auth/email-already-in-use') {
          errorMessage.message = 'This email address is already in use.';
        }

        context.commit('SET_USER_PROFILE', {
          userProfile: {},
          error: errorMessage
        });
      }
    },
    async login(context, formData) {
      try {
        const { user } = await auth.signInWithEmailAndPassword(formData.email, formData.password);

        context.dispatch('fetchUserProfile', user);
      } catch (error) {
        context.commit('SET_USER_PROFILE', {
          userProfile: {},
          error: { message: 'Incorrect email address and/or password.' }
        });
      }
    },
    async logout(context) {
      await auth.signOut();

      context.commit('SET_USER_PROFILE', { userProfile: {}, error: {} });
      router.push('/login');
    },
    async fetchUserProfile(context, user) {
      const userProfile = await usersCollection.doc(user.uid).get();

      context.commit('SET_USER_PROFILE', { userProfile: userProfile.data(), error: {} });

      if (router.currentRoute.path === '/login' || router.currentRoute.path === '/signup') {
        router.push('/');
      }
    }
  }
});
