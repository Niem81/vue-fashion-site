import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ApiService from './services/api.service';
import TokenService from './services/storage.service';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API);

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader();
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
