import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';
// import GAuth from 'vue-google-oauth2';
// import installElement from './plugins/element/installElement.js';

Vue.config.productionTip = false;
// Vue.use(installElement);

// const gauthOption = {

// Vue.use(GAuth, gauthOption);
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
