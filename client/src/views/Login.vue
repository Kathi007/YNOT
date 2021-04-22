<template>
  <div>
    <div class="app">
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
        <section id="hero">
          <v-row no-gutters>
            <v-img
              :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
              src="/img/teamwork.jpg"
              gradient="to top right, rgba(48,39,39,.33), rgba(91,37,82,.7)"
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
                      <v-img
                        src="../assets/Logo-weiß.svg"
                        width="55%"
                        :style="{
                          left: '50%',
                          transform: 'translateX(-50%)',
                        }"
                      ></v-img>
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
              YNot is an innovative project made by a team of young and
              ambitious students of the HTL Wien West. The main idea of the
              project is to make it easier and faster for interested people in
              the IT niche to connect with other like-minded people. Our team is
              currently working on both the front- and the backend of the
              project. You can follow us on our social media for further
              information and updates.
            </v-responsive>

            <v-avatar class="elevation-12 mb-12" size="128">
              <v-img src="../../public/img/Romina.png"></v-img>
            </v-avatar>
            <v-avatar class="elevation-12 mb-12" size="128">
              <v-img src="../../public/img/Dominik.jpg"></v-img>
            </v-avatar>
            <v-avatar class="elevation-12 mb-12" size="128">
              <v-img src="../../public/img/Kathrin.png"></v-img>
            </v-avatar>
            <v-avatar class="elevation-12 mb-12" size="128">
              <v-img src="../../public/img/Salem.png"></v-img>
            </v-avatar>
            <v-row> </v-row>
          </v-container>
        </section>
        <section id="log-in">
          <div class="py-12"></div>
          <v-sheet color="#333333" tile>
            <v-container id="signinup-form" class="text-center">
              <h2
                class="display-2 font-weight-bold mb-3 mt-3"
                style="color:white;"
              >
                LOG IN
              </h2>

              <v-responsive class="mx-auto mb-8" width="56">
                <v-divider class="mb-1"></v-divider>

                <v-divider></v-divider>
              </v-responsive>
              <v-row align="center" justify="center" no-gutters>
                <v-col cols="12" sm="8">
                  <form>
                    <v-card>
                      <v-card-title
                        primary-title
                        class="pink darken-3 justify-center white--text mb-4"
                      >
                        Welcome back!
                      </v-card-title>
                      <v-card-text>
                        <v-form>
                          <v-text-field
                            label="Username"
                            prepend-icon="mdi-account-outline"
                            name="username"
                            type="username"
                            v-model="username"
                            color="pink darken-3"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            prepend-icon="mdi-lock-outline"
                            name="password"
                            type="password"
                            v-model="password"
                            color="pink darken-3"
                          />
                        </v-form>
                        <p class="mt-4 text-center">
                          No account? <a href="/register">Register here!</a>
                        </p>
                        <!-- <div>
                        <button class="btn btn-primary">
                          LOG IN
                        </button>
                      </div> -->
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
                          @click="login"
                          >LOG IN</v-btn
                        >
                        >
                      </v-card-actions>
                    </v-card>
                  </form>
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
/* eslint-disable */

export default {
  data() {
    return {
      username: 'Joshua48',
      password: 'abc',
    };
  },
  methods: {
    async login() {
      try {
        let res = await axios({
          url: '/login',
          method: 'post',
          data: {
            u_username: this.username,
            u_password: this.password,
          },
        });
        this.$router.push('/home');
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('name', res.data.name);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    checkConnection() {
      setTimeout(() => {
        if (!navigator.onLine) this.offline = true;
        else this.offline = false;
        this.checkConnection();
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.loginBtn:disabled {
  opacity: 0.5;
}
</style>
