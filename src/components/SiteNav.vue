<template>
  <header>
    <nav :class="{ 'flex-container': true, loggedIn: userLoggedIn }">
      <router-link to="/"><img src="../assets/logo.svg" alt="Auth Vue"/></router-link>
      <a @click="logout" v-if="userLoggedIn">logout</a>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SiteNav',
  computed: {
    ...mapState(['userProfile']),
    userLoggedIn() {
      return Object.keys(this.userProfile).length > 0;
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
.loggedIn {
  justify-content: space-between;
}
</style>
