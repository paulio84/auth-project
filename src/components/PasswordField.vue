<template>
  <div class="form-control password-field">
    <input
      id="password"
      :type="showPassword ? 'text' : 'password'"
      placeholder="Enter
    password"
      required
      v-model="password"
      @blur="updatePassword"
    />
    <span @click="togglePassword">
      <img :src="imgUrl" width="24" height="24" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'PasswordField',
  computed: {
    imgUrl() {
      const imgUrl = this.showPassword ? './hide-password.svg' : './show-password.svg';

      const images = require.context('../assets/', false, /\.svg$/);
      return images(imgUrl);
    }
  },
  data() {
    return {
      password: '',
      showPassword: false
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    updatePassword() {
      this.$emit('updatePassword', this.password);
    }
  }
};
</script>

<style lang="scss" scoped>
.password-field {
  position: relative;
}

.password-field input {
  padding-right: 2.5em;
}

.password-field span {
  display: inline-flex;
  cursor: pointer;
  margin-right: 0.5em;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
