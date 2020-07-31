import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from './config/firebase';

Vue.config.productionTip = false;

// ensure firebase initialises before loading the app when a user refreshes a page
let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App)
    }).$mount('#app');
  }
});
