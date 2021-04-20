import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Account from '../views/Account.vue';
import Chat from '../views/Chat.vue';
import Detail from '../views/Details.vue';
import Logout from '../views/Logout.vue';

Vue.use(VueRouter);
function isAuthenticated() {
  if (Vue.$cookies.get('sid')) return true;
  else return false;
}
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) next({ name: 'Login' });
      next();
    },
  },

  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    props: true,
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackPrefetch: true */ '@/views/Register.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) next({ name: 'Login' });
      next();
    },
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
