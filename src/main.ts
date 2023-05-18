import Vue from 'vue'
import App from './App.vue'
import store from "@/store/store";
import router from "@/routes";
import BootstrapVue, {IconsPlugin} from "bootstrap-vue";
import '@fortawesome/fontawesome-free/css/all.css';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
