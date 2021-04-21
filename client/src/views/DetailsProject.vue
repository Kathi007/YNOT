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

      <v-main>
        <!-- <div class="col-8 d-flex flex-column justify-content-center">
          <h1>{{ projects.p_name }}</h1>
        </div> -->

        <v-main class="elevation-1">
          <div class="col-8 d-flex flex-column justify-content-center ">
            <h1>{{ projects.p_name }}</h1>
            <p class="subtitle-1">Programming languages required:</p>
            <p class="body-2 grey--text">{{ projects.pl_name }}</p>
            <p class="subtitle-1">Language:</p>
            <p class="body-2 grey--text">{{ projects.p_language }}</p>
            <p class="subtitle-1">Country:</p>
            <p class="body-2 grey--text">{{ projects.p_country }}</p>
            <p class="subtitle-1">Time Zone:</p>
            <p class="body-2 grey--text">{{ projects.p_time_zone }}</p>
            <p class="subtitle-1">Short Description:</p>
            <p class="body-2 grey--text">{{ projects.p_short_description }}</p>
          </div>
          <div class="col-8">
            <v-btn to="/home" dark color="purple">Back</v-btn>
          </div>
        </v-main>
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
      projects: [],
      sidebar: false,
    };
  },
  async created() {
    let res = await axios(`http://127.0.0.1:3001/projects/${this.id}`);
    this.projects = res.data.data;
    console.log(this.projects);
  },
};
</script>

<style lang="scss" scoped></style>
