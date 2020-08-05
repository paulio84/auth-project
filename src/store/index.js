import Vue from 'vue';
import Vuex from 'vuex';
import { auth, usersCollection } from '../config/firebase';
import router from '../router';
import { SET_USER_PROFILE } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      userProfile: {},
      error: {}
    }
  },
  mutations: {
    [SET_USER_PROFILE](state, payload) {
      state.auth = payload;
    }
  },
  actions: {
    async signupAction({ commit, dispatch }, formData) {
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

        dispatch('fetchUserProfileAction', user);
      } catch (error) {
        const errorMessage = { message: error.message };
        if (error.code === 'auth/invalid-email') {
          errorMessage.message = 'The email address is invalid.';
        } else if (error.code === 'auth/email-already-in-use') {
          errorMessage.message = 'This email address is already in use.';
        }

        commit(SET_USER_PROFILE, {
          userProfile: {},
          error: errorMessage
        });
      }
    },
    async loginAction({ commit, dispatch }, formData) {
      try {
        const { user } = await auth.signInWithEmailAndPassword(formData.email, formData.password);

        dispatch('fetchUserProfileAction', user);
      } catch (error) {
        commit(SET_USER_PROFILE, {
          userProfile: {},
          error: { message: 'Incorrect email address and/or password.' }
        });
      }
    },
    async logoutAction({ commit }) {
      await auth.signOut();

      commit(SET_USER_PROFILE, { userProfile: {}, error: {} });
      router.push('/login');
    },
    async fetchUserProfileAction({ commit }, user) {
      const userProfile = await usersCollection.doc(user.uid).get();

      commit(SET_USER_PROFILE, { userProfile: userProfile.data(), error: {} });

      if (router.currentRoute.path === '/login' || router.currentRoute.path === '/signup') {
        router.push('/');
      }
    }
  }
});
