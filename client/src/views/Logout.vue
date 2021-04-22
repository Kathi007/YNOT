<template>
  <div class="container">
    <v-app class="app">
      <v-app-bar
        color="grey lighten-5"
        dark
        app
        class="default-layout__navbar"
        extended
        extension-height="3"
      >
        <div class="d-flex align-center">
          <v-img
            alt="YNOTCOLLAB Logo"
            class="shrink mr-2"
            contain
            src="../assets/Logo-gradient.svg"
            transition="scale-transition"
            width="230"
          />
        </div>
      </v-app-bar>
      <v-container class="mt-15">
        <div class="d-flex flex-column justify-content-center">
          <div class="mx-auto">
            <router-link to="/">Back to Login Page</router-link>
          </div>
          <h1 class="text-center my-3 text-danger">
            You are are logged out!
          </h1>
          <p class="text-center mt-3">Bye!</p>
        </div>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  async created() {
    localStorage.clear();
  },
};
</script>
