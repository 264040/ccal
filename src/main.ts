import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// 导入 PrimeVue 和样式
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura' // 引入 Aura 主题
import 'primeicons/primeicons.css' // 图标样式仍然需要单独引入
import '../public/lpp.css';

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
      prefix: 'your-prefix', // 可选，设置 CSS 变量前缀
      dark: false // 可选，明/暗模式
    }
    // 可以直接定义覆盖的 CSS 变量
    // rules: {...}
  }
})

app.mount('#app')