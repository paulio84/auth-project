<template>
  <section id="signup" class="signup">
    <p class="signup-title">
      Sign up for your account
    </p>
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
export default {
  name: 'SignUp',
  data() {
    return {
      fullname: '',
      location: '',
      email: '',
      password: ''
    };
  },
  methods: {
    signup() {
      const { fullname, location, email, password } = this;
      this.$store.dispatch('signup', { fullname, location, email, password });
    }
  }
};
</script>

<style lang="scss" scoped>
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
