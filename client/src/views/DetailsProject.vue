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

      <!-- <div class="col-8 d-flex flex-column justify-content-center">
          <h1>{{ projects.p_name }}</h1>
        </div> -->

      <v-main class="elevation-1" height="100%">

        <div class="d-flex flex-column justify-content-center ">
          <h1 class="ml-3">{{ projects.p_name }}</h1>
          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                >Programming languages required:</v-list-item-title
              >
              <v-list-item-subtitle class="body-2 grey--text">{{
                projects.pl_name
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Language:</v-list-item-title>
              <v-list-item-subtitle class="body-2 grey--text">{{
                projects.p_language
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Country:</v-list-item-title>
              <v-list-item-subtitle class="body-2 grey--text">{{
                projects.p_country
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Time Zone:</v-list-item-title>
              <v-list-item-subtitle class="body-2 grey--text">{{
                projects.p_time_zone
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Short description:</v-list-item-title>
              <v-list-item-subtitle class="body-2 grey--text">{{
                projects.p_short_description
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-tile-action>
              <v-btn to="/home" dark color="purple">Back</v-btn>
            </v-list-tile-action>
          </v-list-item>
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
      projects: [],
      sidebar: false,
    };
  },
  async created() {
    let res = await axios(`/projects/${this.id}`);
    // let res = await axios(`http://193.170.162.166:3001/projects/${this.id}`);
    this.projects = res.data.data;
    console.log(this.projects);
  },
};
</script>

<style lang="scss" scoped></style>
