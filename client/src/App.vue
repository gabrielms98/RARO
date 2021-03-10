<template>
  <Header/>
  <ThinkAbout/>
  <Blog/>
</template>

<script>
import Header from './components/Header';
import ThinkAbout from './components/ThinkAbout';
import Blog from './components/Blog';

export default {
  name: 'App',
  components: {
    Header,
    ThinkAbout,
    Blog
  }
}
</script>

<style lang="scss">
@import "./scss/styles";

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Poppins, sans-serif;
}
body {
  width: 100vw;
  height: 100vh;
  background: $white;
}
</style>
