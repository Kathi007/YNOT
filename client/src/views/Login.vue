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
          <v-btn color="purple" to="/home" dark>DEMO</v-btn>
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
                  <img src="" alt="" srcset="" />
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
                  <p>{{ profile }}</p>
                  <br /><br />
                  <!-- <p>isInit: {{ isInit }}</p>
                  <p>isSignIn: {{ isSignIn }}</p> -->
                  <!-- <v-btn
                    type="primary"
                    @click="handleClickUpdateScope"
                    :disabled="!isInit"
                    >update scope</v-btn
                  > -->
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
    profile: [],
    disable: true,
    useremail: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    isInit: false,
    isSignIn: false,
  }),
  methods: {
    async getUsers() {
      let res = await axios({
        url: '/users',
        method: 'get',
      });
      this.users = res.data;
    },

    async handleClickUpdateScope() {
      const option = new window.gapi.auth2.SigninOptionsBuilder();
      option.setScope('email https://www.googleapis.com/auth/drive.file');
      const googleUser = this.$gAuth.GoogleAuth.currentUser.get();
      try {
        await googleUser.grant(option);
        console.log('success');
      } catch (error) {
        console.log(error);
      }
    },

    handleClickLogin() {
      this.$gAuth
        .getAuthCode()
        .then((authCode) => {
          //on success

          console.log('authCode', authCode);
        })
        .catch(() => {
          //on fail do something
        });
    },

    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        console.log('googleUser', googleUser);
        console.log('getId', googleUser.getId());
        console.log('getBasicProfile', googleUser.getBasicProfile());
        this.profile.push(googleUser.getBasicProfile());

        console.log('getAuthResponse', googleUser.getAuthResponse());
        console.log(
          'getAuthResponse',
          this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse(),
        );

        this.isSignIn = this.$gAuth.isAuthorized;
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },

    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        this.isSignIn = this.$gAuth.isAuthorized;
        console.log('isSignIn', this.$gAuth.isAuthorized);
      } catch (error) {
        console.error(error);
      }
    },

    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    },
    checkConnection() {
      setTimeout(() => {
        if (!navigator.onLine) this.offline = true;
        else this.offline = false;
        this.checkConnection();
      }, 1000);
    },
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
    this.checkConnection();
    let that = this;
    let checkGauthLoad = setInterval(function() {
      that.isInit = that.$gAuth.isInit;
      that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
  },
};
</script>

<style lang="scss" scoped></style>
