<template>
  <div id="app">
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
      </v-app-bar>

      <v-main>
        <section class="register">
          <v-container fluid>
            <v-row align="center" justify="center" no-gutters>
              <v-col cols="12" sm="8">
                <form @submit.prevent="register">
                  <v-card class="mt-5">
                    <v-card-title
                      primary-title
                      class="pink darken-3 justify-center white--text mb-4"
                    >
                      Welcome!
                    </v-card-title>
                    <v-card-text>
                      <v-form>
                       
                        <v-row>
                          <v-text-field
                            label="Firstname"
                            name="firstname"
                            prepend-icon="mdi-account-outline"
                            type="text"
                            v-model="u_firstname"
                            color="pink darken-3"
                          />
                          <v-text-field
                            label="Lastname"
                            name="lastname"
                            prepend-icon="mdi-account-outline"
                            type="text"
                            v-model="u_surename"
                            color="pink darken-3"
                          />
                        </v-row>
                         <v-row>
                          <v-text-field
                            label="Username"
                            prepend-icon="mdi-account-outline"
                            name="username"
                            type="username"
                            v-model="u_username"
                            color="pink darken-3"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            prepend-icon="mdi-lock-outline"
                            name="password"
                            type="password"
                            v-model="u_password"
                            color="pink darken-3"
                          />
                        </v-row>
                        <v-row>
                          <v-text-field
                            id="email"
                            label="Email"
                            prepend-icon="mdi-email-outline"
                            name="email"
                            type="email"
                            v-model="u_email"
                            color="pink darken-3"
                          />
                        </v-row>
                        <v-subheader
                          >Select the programming languages you
                          master:</v-subheader
                        >
                        <v-row class="ml-3">
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
                        <v-subheader
                          >Write a short introduction about
                          yourself:</v-subheader
                        >
                        <v-row>
                          <v-col>
                            <v-text-field
                              id="introduction"
                              label="Introduction"
                              prepend-icon="mdi-pencil-outline"
                              name="introduction"
                              type="text"
                              v-model="short_introduction"
                              color="pink darken-3"
                            />
                          </v-col>
                        </v-row>
                      </v-form>
                      <p class="mt-4 text-center">
                        Already got an account? <a href="/">Login here!</a>
                      </p>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        :style="{
                          left: '50%',
                          transform: 'translateX(-50%)',
                        }"
                        color="purple"
                        width="50%"
                        dark
                        >SIGN UP</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </form>
              </v-col>
            </v-row>
          </v-container>
        </section>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      firstname: '',
      surename: '',
      email: '',
      password: '',
      short_introduction: '',
      message: '',
      u_abilities: [],
    };
  },
  methods: {
    async register() {
      // enter your code here
      try {
        let res = await axios({
          url: '/register',
          // url: 'http://127.0.0.1:3001/register',
          method: 'post',
          data: {
            u_username: this.username,
            u_email: this.email,
            u_password: this.password,
            u_about_me: this.short_introduction,
            pl_user: this.u_abilities,
          },
        });
        this.$router.push('/');
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
