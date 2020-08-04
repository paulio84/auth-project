<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  color: #2c3e50;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body,
input,
button {
  font-family: 'Lato', sans-serif;
  font-size: 1.6rem;
}

a {
  cursor: pointer;
  line-height: 0;
}

#app {
  background-color: rgb(255, 255, 255);
  height: 100%;

  @media (min-width: 705px) {
    background-color: rgb(245, 246, 245);
  }
}

.container {
  margin: 0 auto;
  max-width: 60em;
  padding: 0 1em;
}

.flex-container {
  @extend .container;
  align-items: center;
  display: flex;
  justify-content: space-around;
}

.form {
  border-bottom: 1px solid rgba(44, 62, 80, 0.3);
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
}

.form-control {
  margin-bottom: 2rem;
}

.form-control input,
.form-control .btn {
  border: 1px solid rgba(44, 62, 80, 0.3);
  border-radius: 3px;
  outline: none;
  padding: 0.5em;
  width: 100%;
}

.btn {
  background-color: #41b883;
  color: white;
  cursor: pointer;
  padding: 0.5em;
}
</style>
