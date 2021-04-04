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
          <v-avatar class=" mr-7" size="44">
            <v-img></v-img>
          </v-avatar>
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
            <v-row>
              <!-- <v-btn
                type="primary"
                @click="handleClickDisconnect"
                :disabled="!isInit"
                >disconnect</v-btn
              > -->

              <!-- <v-btn
                type="primary"
                @click="handleClickUpdateScope"
                :disabled="!isInit"
                >update scope</v-btn
              > -->
            </v-row>
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
                  <!-- <v-btn
                    type="primary"
                    @click="handleClickLogin"
                    :disabled="!isInit"
                    >get authCode</v-btn
                  > -->
                  <!-- <img src="" alt="" srcset="" />
                  <v-btn
                    type="primary"
                    @click="handleClickSignIn"
                    v-if="!isSignIn"
                    :disabled="!isInit"
                    >sign in with google</v-btn
                  >

                  <v-btn
                    type="primary"
                    @click="handleClickSignOut"
                    v-if="isSignIn"
                    :disabled="!isInit"
                    >sign out</v-btn
                  >
                  <p>{{ username }}</p> -->
                  <br /><br />
                  <!-- <p>isInit: {{ isInit }}</p>
                  <p>isSignIn: {{ isSignIn }}</p> -->
                  <!-- <v-btn
                    type="primary"
                    @click="handleClickUpdateScope"
                    :disabled="!isInit"
                    >update scope</v-btn
                  > -->

                  <v-btn
                    class="loginBtn w-full my-1 bg-black disabled:bg-opacity-50 hover:bg-opacity-50 text-white py-4 px-4 rounded-md mt-20"
                    ref="signinBtn"
                    @click="handleGoogle"
                    :disabled="!isInit"
                  >
                    <span v-if="isInit">Continue with Google</span>
                    <span v-else>Loading...</span>
                  </v-btn>
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
// import axios from 'axios';
/* eslint-disable */

export default {
  data: () => ({
    step: 1,
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    profile: [],
    disable: true,
    useremail: '',
    isInit: false,
    // isSignIn: false,
    username: '',
    mode: 'login',
  }),
  created() {
    // this.getUsers();
    this.checkConnection();
    let that = this;
    let checkGauthLoad = setInterval(function() {
      that.isInit = that.$gAuth.isInit;
      // that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
  },
  methods: {
    async handleGoogle() {
      this.isInit = false;
      let authCode = null;

      try {
        authCode = await this.$gAuth.getAuthCode();
      } catch (err) {
        if (err.error == 'popup_closed_by_user') this.isInit = true;
        return;
      }

      // const res = await axios.post(
      //   `${process.env.VUE_APP_API_URL}/google/token`,
      //   { authCode: authCode }
      // );
      // this.$store.dispatch("setToken", res.data);
      // this.$store.dispatch("setUser", res.data.user);
      this.$router.replace(this.$route.query.redirect || '/home');
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
