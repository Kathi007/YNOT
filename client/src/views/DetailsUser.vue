<template>
  <div class="container d-flex flex-column min-vh-100">
    <v-app>
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
          <v-btn to="/profile" color="grey" text>Profile</v-btn>
          <v-btn to="/chat" color="grey" text>Messages</v-btn>
        </span>
      </v-app-bar>

      <v-main class="elevation-1">
        <div class="col-8 d-flex flex-column justify-content-center ">
          <h1>{{ users.u_firstname }} {{ users.u_surename }}</h1>
          <p class="subtitle-1">Programming languages mastered:</p>
          <p class="body-2 grey--text">{{ users.pl_name }}</p>
          <p class="subtitle-1">Contact:</p>
          <p class="body-2 grey--text">{{ users.u_email }}</p>
          <p class="subtitle-1">Country:</p>
          <p class="body-2 grey--text">{{ users.u_country }}</p>
          <p class="subtitle-1">Time Zone:</p>
          <p class="body-2 grey--text">{{ users.u_time_zone }}</p>
          <p class="subtitle-1">Short Introduction::</p>
          <p class="body-2 grey--text">{{ users.u_about_me }}</p>
        </div>
        <div class="col-8">
          <v-btn to="/home" dark color="purple">Back</v-btn>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      users: [],
      sidebar: false,
    };
  },
  async created() {
    let res = await axios(`http://127.0.0.1:3001/users/${this.id}`);
    this.users = res.data.data;
    console.log(this.users);
  },
};
</script>

<style lang="scss" scoped></style>
