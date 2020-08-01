<template>
  <div id="app">
    <SiteNav />
    <router-view />
  </div>
</template>

<script>
import SiteNav from '@/components/SiteNav';

export default {
  name: 'App',
  components: {
    SiteNav
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  cursor: pointer;
}

.flex-container {
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 960px;
}

.form {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.form-control {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-control input {
  outline: none;
  padding: 8px;
}

.btn {
  background-color: #41b883;
  border: 1px solid #2c3e50;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  padding: 8px;
}
</style>
