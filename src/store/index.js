import Vue from 'vue';
import Vuex from 'vuex';
import { auth, usersCollection } from '../config/firebase';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {
    SET_USER_PROFILE(state, payload) {
      state.userProfile = payload;
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
        console.dir(error);
      }
    },
  mutations: {},
  actions: {}
    async fetchUserProfile(context, user) {
      const userProfile = await usersCollection.doc(user.uid).get();

      context.commit('SET_USER_PROFILE', userProfile.data());

      if (router.currentRoute.path === '/login' || router.currentRoute.path === '/signup') {
        router.push('/');
      }
    }
  }
});
