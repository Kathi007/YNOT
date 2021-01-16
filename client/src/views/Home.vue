<template>
  <div class="bg">
    <v-app id="inspire">
      <v-navigation-drawer v-model="sidebar" app fixed temporary>
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>My Project</v-list-item-title>
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
          <v-btn color="grey" text>Project</v-btn>
          <v-btn color="grey" text>Messages</v-btn>
        </span>
        <!-- open dialog -->
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="pink accent-4" dark icon v-bind="attrs" v-on="on">
              <v-icon>mdi-filter</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-toolbar dark color="pink darken-3">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Filter</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn dark text @click="dialog = false">
                  SAVE
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Content filtering</v-list-item-title>
                  <v-list-item-subtitle
                    >Set the content filtering level to restrict apps that can
                    be downloaded</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Password</v-list-item-title>
                  <v-list-item-subtitle
                    >Require password for purchase or use password to restrict
                    purchase</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-dialog>
      </v-app-bar>

      <v-main>
        <v-switch
          style="float:right;"
          class="mr-10"
          color="pink darken-1"
          label="Search Users"
          v-model="switch1"
        ></v-switch>

        <SwipeCards :testingcards="projects" />
      </v-main>

      <!-- <img src="../public/img/icons/Zeichenfläche 1@0.5x.png" fixed> -->
      <!-- <v-footer class="justify-center" color="#292929" height="100">
          <div
            class="title font-weight-light grey--text text--lighten-1 text-center"
          >
            &copy; {{ new Date().getFullYear() }} — Vuetify, LLC — YNOTCOLLAB?
          </div>
        </v-footer> -->
    </v-app>
  </div>
</template>
<script>
import SwipeCards from '../components/SwipeCards';
import axios from 'axios';

export default {
  data() {
    return {
      sidebar: false,
      drawer: null,
      icons: ['mdi-instagram'],
      projects: [],
      employees: [],
      dialog: false,
      switch1: true,
    };
  },
  components: {
    SwipeCards,
  },
  methods: {
    async getEmployees() {
      try {
        let res = await axios({
        url: 'http://127.0.0.1:3000/employees',
        method: 'get',
      });
      this.employees = res.data;
      } catch (error) {
        alert(error)
      }
      
    },
    async getProjects() {
      try {
        let res = await axios({
        url: 'http://127.0.0.1:3000/projects',
        method: 'get',
      });
      this.projects = res.data;
      } catch (error) {
        alert(error)
      }
      
    },
  },
  created() {
    this.getEmployees();
    this.getProjects();
  },
};
</script>
<style>
.bg {
}
#inspire {
  background: none;
}
html {
  overflow-y: auto;
}
</style>
