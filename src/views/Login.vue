<template>
  <div id="login">
    <form class="form" @submit.prevent>
      <div class="form-control">
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          autocomplete="off"
          required
          v-model="email"
        />
      </div>
      <div class="form-control">
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          required
          v-model="password"
        />
      </div>
      <div class="form-control">
        <button class="btn" @click="login">Log in</button>
      </div>
    </form>
    <div>
      <span>Forgot your password?</span>
    </div>
    <div>
      <span>Don't have an account? <router-link to="/signup">Sign Up</router-link></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      this.$store.dispatch('login', { email, password });
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  margin: 0 auto;
  width: 50%;
}
</style>
