<template>
  <div class="app">
    <NavSidebar />
    <router-view />
  </div>
</template>

<script>
import NavSidebar from "./components/NavSidebar.vue";
export default {
  name: 'App',
  components: {
    NavSidebar,
  },
};
</script>

<style lang="scss">
@import "assets/styles/variables.scss";
@import "~bulma/bulma.sass";
@import "assets/styles/main.scss";
@import "material-icons/iconfont/material-icons.css";

</style>
