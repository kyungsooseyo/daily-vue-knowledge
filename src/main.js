import Vue from 'vue'
import App from './App.vue'
import HUi from './modules/HUi/index';
Vue.config.productionTip = false
//~ Vue.use 就会去找install方法
Vue.use(HUi)
new Vue({
  render: h => h(App),
}).$mount('#app')
