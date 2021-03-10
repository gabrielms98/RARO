<template>
  <LandingPage />
</template>

<script>
import LandingPage from './views/LandingPage.vue';

export default {
  components: {
    LandingPage,
  },
  setup() {},
};
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
  background: $white;
}
</style>
