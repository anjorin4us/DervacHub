import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './routes.js'

const app = createApp(App)

// Vue.use(VueCarousel);
app.use(router);
app.use(createPinia(App))
app.mount('#app')