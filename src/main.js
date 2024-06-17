import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const pinia = createPinia()
import broadcastChannelService from './services/broadcastChannelService';

const app = createApp(App)
app.use(pinia)

broadcastChannelService.setup();

app.mount('#app')
