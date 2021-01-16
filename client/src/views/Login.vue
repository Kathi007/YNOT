<template>
  <div>
    <div class="bg">
      <v-app id="inspire">
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

          <v-spacer></v-spacer>

          <v-btn color="purple" to="/home" dark>DEMO</v-btn>
        </v-app-bar>
        <section id="hero">
          <v-row no-gutters>
            <v-img
              :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
              src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
            >
              <v-theme-provider dark>
                <v-container fill-height>
                  <v-row
                    align="center"
                    class="white--text mx-auto"
                    justify="center"
                  >
                    <v-col class="white--text text-center" cols="12" tag="h1">
                      <span
                        :class="[
                          $vuetify.breakpoint.smAndDown
                            ? 'display-1'
                            : 'display-2',
                        ]"
                        class="font-weight-light"
                      >
                        WELCOME TO
                      </span>

                      <br />

                      <span
                        :class="[
                          $vuetify.breakpoint.smAndDown
                            ? 'display-3'
                            : 'display-4',
                        ]"
                        class="font-weight-black"
                      >
                        YNOTCOLLAB?
                      </span>
                    </v-col>

                    <v-btn
                      class="align-self-end mr-2"
                      outlined
                      @click="$vuetify.goTo('#log-in')"
                    >
                      <span>LogIn</span>
                    </v-btn>

                    <v-btn
                      class="align-self-end"
                      outlined
                      @click="$vuetify.goTo('#about-us')"
                    >
                      <span>About Us</span>
                    </v-btn>
                  </v-row>
                </v-container>
              </v-theme-provider>
            </v-img>
          </v-row>
        </section>
        <section id="about-us">
          <div class="py-12"></div>

          <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">ABOUT US</h2>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-responsive
              class="mx-auto title font-weight-light mb-8"
              max-width="720"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </v-responsive>

            <v-avatar class="elevation-12 mb-12" size="128">
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-avatar>
          </v-container>
        </section>
        <section id="log-in">
          <div class="py-12"></div>
          <v-sheet color="#333333" tile>
            <v-container id="signinup-form" class="text-center">
              <h2 class="display-2 font-weight-bold mb-3" style="color:white;">
                LOG IN
              </h2>

              <v-responsive class="mx-auto mb-8" width="56">
                <v-divider class="mb-1"></v-divider>

                <v-divider></v-divider>
              </v-responsive>
              <v-row align="center" justify="center" no-gutters>
                <v-col cols="12" sm="8">
                  <v-card class="evelation-12 card">
                    <v-window v-model="step">
                      <v-window-item :value="1">
                        <v-row class="fill-height">
                          <v-col cols="12" md="8" class="pt-6 pb-6">
                            <v-card-title class="text-center" primary-title>
                              <span class="headline">{{ currentTitle }}</span>
                            </v-card-title>
                            <v-card-text>
                              <v-text-field
                                label="Email"
                                v-model="useremail"
                              ></v-text-field>
                              <!-- <p>{{useremail}}</p> -->
                              <v-text-field
                                label="Password"
                                type="password"
                                v-model="userpassword"
                              ></v-text-field>

                              <v-btn
                                :disabled="disable"
                                @click="checkUser()"
                                to="/home"
                                dark
                                color="purple"
                                >LogIn</v-btn
                              >
                              <!-- <span class="ml-3">Or Sign In with Google!</span>
                              <v-icon class="mdi mdi-google"></v-icon> -->
                              <br />
                              <div class="mt-4">
                                No Account yet?
                                <v-btn color="purple" text @click="step = 2"
                                  >Sign Up!</v-btn
                                >
                              </div>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-window-item>

                      <v-window-item :value="2">
                        <v-row class="fill-height">
                          <v-col cols="12" md="8" class="pt-6 pb-6">
                            <v-card-title class="text-center" primary-title>
                              <span class="headline">{{ currentTitle }}</span>
                            </v-card-title>
                            <v-card-text>
                              <v-text-field
                                label="Email"
                                type="text"
                              ></v-text-field>
                              <v-text-field
                                label="Firstname"
                                type="text"
                              ></v-text-field>
                              <v-text-field
                                label="Lastname"
                                type="text"
                              ></v-text-field>
                              <v-text-field
                                label="Password"
                                type="password"
                              ></v-text-field>
                              <!-- <v-radio-group v-model="row" row>
                                <label class="mr-2">Sign up as</label>
                                <v-radio
                                  label="Projectfinder"
                                  value="radio-1"
                                ></v-radio>
                                <v-radio
                                  label="Projectowner"
                                  value="radio-2"
                                ></v-radio>
                              </v-radio-group> -->

                              <br />
                              <v-btn to="/home" dark color="purple" class="mt-2"
                                >Create Account</v-btn
                              >
                              <br />
                              <div class="mt-4">
                                <v-btn color="purple" icon @click="step = 1"
                                  ><v-icon>mdi-arrow-left</v-icon></v-btn
                                >
                              </div>
                            </v-card-text>
                          </v-col>
                        </v-row>
                      </v-window-item>
                    </v-window>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            <div class="py-12"></div>
          </v-sheet>
        </section>
        <v-footer class="justify-center" color="#292929" height="100">
          <div
            class="title font-weight-light grey--text text--lighten-1 text-center"
          >
            &copy; {{ new Date().getFullYear() }} — Vuetify, LLC — YNOTCOLLAB?
          </div>
        </v-footer>
      </v-app>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    step: 1,
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    users: [],
    disable: true,
    useremail: '',
    userpassword: '',
  }),
  methods: {
    async getUsers() {
      let res = await axios({
        url: 'http://127.0.0.1:3000/users',
        method: 'get',
      });
      this.users = res.data;
    },
    // checkUser(){
    //   for (const u of this.users) {
    //     if (u.Email == this.useremail && u.password == this.userpassword) {
    //       this.disable = false
    //       return this.disable
    //     } else {
    //       return this.disable
    //     }
    //   }
    // }
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return 'Sign In';
        case 2:
          return 'Sign Up';
        default:
          return 'Sign In';
      }
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<style lang="scss" scoped></style>
