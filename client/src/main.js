import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';
import GAuth from 'vue-google-oauth2';
import installElement from './plugins/element/installElement.js';
import store from './store';

Vue.config.productionTip = false;
Vue.use(installElement);

// Vue.use(GAuth, {
//   clientId:
//     '102213092219-df87d64b0gfcch43bkb02pi3s9g3j7do.apps.googleusercontent.com',
//   scope: 'https://www.googleapis.com/auth/userinfo.profile',
//   prompt: 'select_account',
// });
const gauthOption = {
  clientId:
    '102213092219-df87d64b0gfcch43bkb02pi3s9g3j7do.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account',
};

Vue.use(GAuth, gauthOption);
new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
