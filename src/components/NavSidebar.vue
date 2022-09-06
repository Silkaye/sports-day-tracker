<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img :src="logoURL" alt="logo"/>
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="nav-button" to="/">
        <span class="material-icons">dashboard</span>
        <span class="text">Dashboard</span>
      </router-link>
      <router-link class="nav-button" to="/Events">
        <span class="material-icons">event_note</span>
        <span class="text">Events</span>
      </router-link>
      <router-link class="nav-button" to="/Results">
        <span class="material-icons">search</span>
        <span class="text">Search</span>
      </router-link>
      <router-link v-if="isAuthenticated && admin" class="nav-button" to="/admin">
        <span class="material-icons">admin_panel_settings</span>
        <span class="text">Admin</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <!-- <div class="menu">
      <button
        style="width: 300px; font-size: 1rem"
        v-if="$store.state.user"
        class="nav-button"
        @click="$store.dispatch('logout')"
      >
        <span class="material-icons">logout</span>
        <span class="text">Logout</span>
      </button>

      <router-link v-else class="nav-button" to="/login">
        <span class="material-icons">login</span>
        <span class="text">Login</span>
      </router-link>

      <router-link v-if="$store.state.user" class="nav-button" to="/settings">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div> -->

    <div class="menu">
      <template v-if="isAuthenticated">
        <button
          style="width: 300px; font-size: 1rem"
          class="nav-button"
          @click="() => $store.dispatch('user/logout')"
        >
          <span class="material-icons">logout</span>
          <span class="text">Logout</span>
        </button>

        <router-link class="nav-button" to="/settings">
          <span class="material-icons">settings</span>
          <span class="text">Settings</span>
        </router-link>
      </template>
      
      <template v-else>
        <router-link class="nav-button" to="/Register">
          <span class="material-icons">how_to_reg</span>
          <span class="text">Register</span>
        </router-link>
        <router-link class="nav-button" to="/login">
          <span class="material-icons">login</span>
          <span class="text">Login</span>
        </router-link>
      </template>
    </div>
  </aside>
</template>


<script>
import useAuth from "../composition/useAuth"
import { ref } from "vue";
import logoURL from "../assets/logo.png";

export default {
  data() {
    return {
      is_expanded: ref(false),
      logoURL: logoURL,
    };
  },
  setup() {
    return {
      ...useAuth(),
    };
  },
  methods: {
    ToggleMenu() {
      this.is_expanded = !this.is_expanded;
    },
  },
};
// const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
// const ToggleMenu = () => {
//   is_expanded.value = !is_expanded.value;
//   localStorage.setItem("is_expanded", is_expanded.value);
// };
</script>



<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
@import "../assets/styles/sidebar.scss";

img {
  width: 120%;
  height: 120%;
  object-fit: contain;
}


</style>