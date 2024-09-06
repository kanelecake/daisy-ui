import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import {createPinia} from "pinia";
import {piniaInstance} from "@/store/global.js";

createApp(App)
    .use(piniaInstance)
    .mount('#app')
