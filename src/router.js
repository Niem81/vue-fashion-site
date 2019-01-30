import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Clothes from './views/Clothes.vue';
import Garment from './views/Garment.vue';
// import CartCheckout from './views/CartCheckout';

Vue.use(Router);

export default new Router({
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
    // {
    //   path: '/checkout',
    //   name: 'cart-checkout',
    //   component: CartCheckout,
    // },
  ],
});
