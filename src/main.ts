import Vue from 'vue'
import App from './App.vue'
import store from "@/store/store";
import router from "@/routes";
import BootstrapVue, {IconsPlugin} from "bootstrap-vue";


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// const storedEmail = sessionStorage.getItem('userSession')

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
