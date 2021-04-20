<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="sidebar" app fixed temporary>
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Sign Up</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Messages</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        color="grey lighten-5"
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
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="grey" text v-bind="attrs" v-on="on">
                Sign Up
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-btn text>User</v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-btn text>Project</v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn to="/chat" color="grey" text>Messages</v-btn>
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
            <template>
              <v-container fluid>
                <v-subheader>Search by User Ability</v-subheader>
                <v-row class="ml-5">
                  <v-col>
                    <v-checkbox
                      v-model="u_abilities"
                      label="CSS"
                      value="CSS"
                    ></v-checkbox>
                  </v-col>
                  <v-col>
                    <v-checkbox
                      v-model="u_abilities"
                      label="HTML"
                      value="HTML"
                    ></v-checkbox>
                  </v-col>
                  <v-col>
                    <v-checkbox
                      v-model="u_abilities"
                      label="VUE"
                      value="VUE"
                    ></v-checkbox>
                  </v-col>
                  <v-col>
                    <v-checkbox
                      v-model="u_abilities"
                      label="MYSQL"
                      value="MYSQL"
                    ></v-checkbox
                  ></v-col>
                </v-row>
              </v-container>
            </template>
          </v-card>
        </v-dialog>
      </v-app-bar>
      
      <v-main>
        <v-switch
          style="float:right;"
          class="mr-10"
          color="pink darken-1"
          :label="label"
          v-model="switch1"
          v-if="switch1 == true"
        ></v-switch>
        <v-switch
          v-else
          class="mr-10"
          color="pink darken-1"
          label="Users"
          v-model="switch1"
          style="float:right;"
        >
        </v-switch>
        <SwipeCardsProjects v-show="switch1" :testingcards="projects" />
        <SwipeCardsUsers v-if="switch1 == false" :testingcards="users" />
      </v-main>
    </v-app>
  </div>
</template>
<script>
import SwipeCardsProjects from '../components/SwipeCardsProjects';
import SwipeCardsUsers from '../components/SwipeCardsUser';
import axios from 'axios';

export default {
  data() {
    return {
      sidebar: false,
      drawer: null,
      icons: ['mdi-instagram'],
      projects: [],
      users: [],
      dialog: false,
      switch1: true,
      label: 'Projects',
      error: 'noerror',
      u_abilities: [],
    };
  },
  components: {
    SwipeCardsProjects,
    SwipeCardsUsers,
  },
  methods: {
    async getUsers() {
      try {
        let res = await axios({
          url: 'http://127.0.0.1:3001/users',
          method: 'get',
        });
        this.users = res.data.data;
        console.log(this.users);
      } catch (error) {
        console.log(error);
        this.error = error;
      }
    },
    async getProjects() {
      try {
        let res = await axios({
          url: 'http://127.0.0.1:3001/projects',
          method: 'get',
        });
        this.projects = res.data.data;
        console.log(this.projects);
      } catch (error) {
        console.log(error);
        this.error = error;
      }
    },
  },
  created() {
    this.getUsers();
    this.getProjects();
  },
  computed: {
    u_selected() {
      //filter users by ability
      return this.users;
    },
    p_selected() {
      //filter projects by searched ability
      return this.projects;
    },
  },
};
</script>
<style>
#inspire {
  background: none;
}
html {
  overflow-y: auto;
}
</style>
