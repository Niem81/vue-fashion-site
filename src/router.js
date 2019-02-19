import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Clothes from '@/views/Clothes.vue';
import Garment from '@/views/Garment.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import CartCheckout from './views/CartCheckout.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/clothes',
      name: 'style-clothes',
      component: Clothes,
    },
    {
      path: '/garment-details',
      name: 'Garment',
      component: Garment,
    },
    {
      path: '/checkout',
      name: 'cart-checkout',
      component: CartCheckout,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      // some code to apply for not logged in users`
      // meta: {
      //   public: true,  // Allow access to even if not logged in
      //   onlyWhenLoggedOut: true
      // }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ],
});

// fcuntion to protect urls for only be available to logged in users
// router.beforeEach((to, from, next) => {
//   const isPublic = to.matched.some(record => record.meta.public);
//   const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);
//   const loggedIn = !!TokenService.getToken();
//
//   if(!isPublic && !loggedIn){
//     return next({
//       path: '/login',
//       query: {redirect: to.fullPath} // Store the full path to redirect the user to after login
//     });
//   }
//
//   // Do not allow user to visit login page or register page if they are logged in
//   if(loggedIn && onlyWhenLoggedOut){
//     return next('/');
//   }
//
//   next();
//
// });

export default router;
