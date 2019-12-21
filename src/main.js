import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import * from 'assets/js/contact_me.js';
// import * from 'assets/js/freelancer.js';
// import * from '/assets/js/jqBootstrapValidation.js';

// Vue.loadScript("assets/js/contact_me.js")
// Vue.loadScript("assets/js/freelancer.js")
// Vue.loadScript("assets/js/jqBootstrapValidation.js")
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
