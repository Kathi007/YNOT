<template>
  <div class="bg" id="app">
    <v-app >
      <v-navigation-drawer v-model="sidebar" app fixed temporary>
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Messages</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        color="grey lighten-5"
        dark
        app
        class="default-layout__navbar"
        extended
        extension-height="3"
      >
        <span class="hidden-sm-and-up">
          <v-app-bar-nav-icon
            color="grey"
            @click.stop="sidebar = !sidebar"
          ></v-app-bar-nav-icon>
        </span>
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

        <v-spacer></v-spacer>
        <span class="hidden-xs-only">
          <v-btn color="grey" text>Profile</v-btn>
          <v-btn to="/chat" color="grey" text>Messages</v-btn>
        </span>
      </v-app-bar>
      <br />
      <br /><br />
      <h1 class="text-center my-3"> Joshua48's Account</h1>
      <div class="mx-auto d-block">
        <router-link to="/home">Home</router-link> |
        <router-link to="/logout">Logout</router-link>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebar: false,
      user: {
        id: '',
        name: '',
      },
    };
  },
  async created() {
    this.user.id = localStorage.getItem('id');
    this.user.name = localStorage.getItem('name');
  },
};
</script>

<style lang="scss" scoped></style>
