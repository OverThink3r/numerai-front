import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './style.css'
import App from './App.vue'
import router from "./routes/router.js";
createApp(App)
  .use(router)
  .mount('#app')
