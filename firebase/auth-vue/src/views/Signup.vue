<template>
  <section id="signup" class="signup">
    <p class="signup-title">
      Sign up for your account
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
      <div class="form-control">
        <input
          id="fullname"
          type="text"
          placeholder="Enter full name"
          autocomplete="off"
          required
          v-model="fullname"
        />
      </div>
      <div class="form-control">
        <input
          id="location"
          type="text"
          placeholder="Enter location"
          autocomplete="off"
          v-model="location"
        />
      </div>
      <password-field @updatePassword="updatePassword"></password-field>
      <div class="form-control">
        <button class="btn" @click="signup">Sign up</button>
      </div>
    </form>
    <div class="links">
      <span class="link">
        Already have an account? <router-link to="/login">Log In</router-link>
      </span>
    </div>
  </section>
</template>

<script>
import { authMixin } from '@/shared/mixins';
import { mapActions } from 'vuex';

export default {
  name: 'SignUp',
  data() {
    return {
      fullname: '',
      location: ''
    };
  },
  methods: {
    ...mapActions(['signupAction']),
    signup() {
      const { fullname, location, email, password } = this;
      this.signupAction({ fullname, location, email, password });
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

.signup {
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

.links {
  font-size: 1.4rem;
  line-height: 2;
  margin-top: 1rem;

  & > .link {
    display: block;
  }
}
</style>
