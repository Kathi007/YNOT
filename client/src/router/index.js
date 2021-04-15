import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Chat from '../views/Chat.vue';
import Detail from '../views/Details.vue';
// import resFromAPI from '../views/resFromAPI.vue';
// import store from '../store/index';


Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/resAuth',
  //   name: 'ResAuth',
  //   component: resFromAPI,
  // },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
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
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      };
    }
  },
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && to.name !== 'ResAuth' && !store.state.user) {
//     console.log(to);
//     next({
//       name: 'Login',
//       query: {
//         redirect: to.path,
//       },
//     });
//   } else next();
// });


export default router;
