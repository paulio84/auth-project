<template>
  <div class="form-control">
    <input
      id="password"
      type="password"
      placeholder="Enter password"
      required
      v-model="password"
      @blur="updatePassword"
    />
  </div>
</template>

<script>
export default {
  name: 'PasswordField',
  data() {
    return {
      password: ''
    };
  },
  methods: {
    updatePassword() {
      this.$emit('updatePassword', this.password);
    }
  }
};
</script>

<style lang="scss" scoped></style>
