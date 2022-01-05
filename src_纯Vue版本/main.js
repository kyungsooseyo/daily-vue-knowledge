import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
// Vue.use(Vuex);

import store from '../src/store/index';

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
