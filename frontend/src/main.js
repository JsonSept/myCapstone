import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import axios from 'axios'

import 'animate.css';
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.js" 
import 'bootstrap/dist/css/bootstrap.min.css'
createApp(App).use(store).use(router).mount('#app')