<template>
  <header class="main-header">
    <div class="ed-grid s-grid-5 lg-grid-4">
      <div class="s-cols-4 lg-cols-1 s-cross-center">
        <router-link to="/">
          <img
            src="https://ed.team/static/images/logo.svg"
            alt="EDlogo"
            class="main-logo"
          />
        </router-link>
      </div>
      <div class="s-cols-1 lg-cols-3 s-cross-center s-main-end">
        <nav class="main-menu">
          <PrivateMenu v-if="hasToken" />
          <PublicMenu v-else />
        </nav>
        <div @click="toggleMenu" class="main-menu-toggle to-l"></div>
      </div>
    </div>
  </header>
</template>

<script>
import PrivateMenu from "./PrivateMenu";
import PublicMenu from "./PublicMenu";

export default {
  name: "TheHeader",
  components: {
    PrivateMenu,
    PublicMenu
  },
  computed: {
    hasToken() {
      return localStorage.getItem("token");
    }
  },
  methods: {
    toggleMenu() {}
  }
};
</script>

<style scoped></style>
