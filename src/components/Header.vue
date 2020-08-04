<template>
  <header class="header">
    <nav :class="{ 'flex-container': true, loggedIn: userLoggedIn }">
      <router-link to="/"><img src="../assets/logo.svg" alt="Auth Vue"/></router-link>
      <a @click="logout" v-if="userLoggedIn">logout</a>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState(['auth']),
    userLoggedIn() {
      return Object.keys(this.auth.userProfile).length > 0;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
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
