<template>
    <div>
        I'm Settings
    </div>
</template>

<script>
import useAuth from "../composition/useAuth";
export default {
    setup() {
        return useAuth();
    },
    watch: {
    isAuthenticated(isAuth) {
      if(!isAuth) {
        this.$router.push('/');
      }
    }
  },
}
</script>

<style>

</style>