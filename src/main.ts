import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// 导入 PrimeVue 和样式
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura' // 引入 Aura 主题
import { definePreset } from '@primeuix/themes';
import 'primeicons/primeicons.css' // 图标样式仍然需要单独引入
import '../public/lpp.css';
import '../public/thenes_acer/drak_acer.css'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'
import axios from 'axios';

const pinia = createPinia()
const app = createApp(App)


app.config.globalProperties.$axios = axios;

pinia.use(piniaPersist)
app.use(pinia)
app.use(router);

// 使用 PrimeVue 并配置主题
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p', 
      cssLayer: false,
      darkModeSelector: '.my-app-dark',
      dark: true // 可选，明/暗模式
    }
    // 可以直接定义覆盖的 CSS 变量
    // rules: {...}
  }
})

app.mount('#app')