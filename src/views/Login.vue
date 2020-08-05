<template>
  <section id="login" class="login">
    <p class="login-title">
      Log in to continue to: <strong class="login-title--strong">Auth-Vue</strong>
    </p>
    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
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
      <password-field @updatePassword="updatePassword"></password-field>
      <div class="form-control">
        <button class="btn" @click="login">Log in</button>
      </div>
    </form>
    <div class="links">
      <span class="link">Forgot your password?</span>
      <span class="link">
        Don't have an account? <router-link to="/signup">Sign Up</router-link>
      </span>
    </div>
  </section>
</template>

<script>
import { authMixin } from '@/shared/mixins';

export default {
  name: 'Login',
  methods: {
    login() {
      const { email, password } = this;
      this.$store.dispatch('login', { email, password });
    }
  },
  mixins: [authMixin]
};
</script>

<style lang="scss" scoped>
.error-message {
  background: #b84141;
  border-radius: 3px;
  color: white;
  margin-top: 2rem;
  padding: 1em;
}

.login {
  background-color: rgba(0, 0, 0, 0);
  margin: 0 auto;
  text-align: center;
  width: 320px;

  @media (min-width: 705px) {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 3px;
    box-shadow: 0 0 8px rgba(44, 62, 80, 0.3);
    padding: 2em 2.5em;
    width: 400px;
  }
}

.login-title {
  &--strong {
    display: block;
    margin-top: 0.5rem;
  }
}

.links {
  font-size: 1.4rem;
  line-height: 2;
  margin-top: 1rem;

  & > .link {
    display: block;
  }
}
</style>
