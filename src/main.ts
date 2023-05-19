import Vue from 'vue'
import App from './App.vue'
import store from "@/store/store";
import router from "@/routes";
import BootstrapVue, {IconsPlugin} from "bootstrap-vue";
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEllipsis,faBolt,faPlus,faUserTag,faTag,faEnvelope,faClipboardList,faShield,faChevronLeft,faDownload,faCircle,faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faEllipsis,faBolt,faPlus,faUserTag,faTag,faEnvelope,faClipboardList,faShield,faChevronLeft,faDownload,faCircle,faTrash);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
