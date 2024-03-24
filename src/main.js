import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import axios from 'axios'
import swal from 'sweetalert'
import 'animate.css';
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.js" 
import 'bootstrap/dist/css/bootstrap.min.css'
createApp(App).use(store).use(router).mount('#app');
Vue.use(VueSweetalert2);