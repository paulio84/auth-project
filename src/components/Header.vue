<template>
  <header class="header">
    <nav :class="{ 'flex-container': true, loggedIn: userLoggedIn }">
      <router-link to="/"><img src="../assets/logo.svg" alt="Auth Vue"/></router-link>
      <a @click="logout" v-if="userLoggedIn">logout</a>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Header',
  computed: {
    // ...mapState({ auth: (state) => state.auth });
    // ...mapState({ auth: 'auth' });
    ...mapState(['auth']), // three ways to do the same thing
    userLoggedIn() {
      return Object.keys(this.auth.userProfile).length > 0;
    }
  },
  methods: {
    ...mapActions(['logoutAction']),
    logout() {
      this.logoutAction();
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 2em 0;
}

.loggedIn {
  justify-content: space-between;
}
</style>
