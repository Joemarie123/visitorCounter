/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import axios from 'axios';
// Composables
import { createApp } from 'vue'
import router from './router';
import store from './store';

axios.defaults.baseURL='http://localhost/visitorcounter'; 

// Plugins
import { registerPlugins } from '@/plugins'



const app = createApp(App)
.use(router)
.use(store);


registerPlugins(app)

app.mount('#app')
