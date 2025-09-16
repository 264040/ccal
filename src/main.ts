import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
// 导入 PrimeVue 和样式
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura' // 引入 Aura 主题 
import 'primeicons/primeicons.css' // 图标样式仍然需要单独引入

// import '@public/lpp.css';
// import './thenes_acer/drak_acer.css'

import piniaPersist from 'pinia-plugin-persistedstate'
// 创建 Pinia 实例
const pinia = createPinia()
// 创建应用
const app = createApp(App)


// 先安装 Pinia
app.use(pinia)
pinia.use(piniaPersist)
app.use(router)

// 使用 PrimeVue 并配置主题
app.use(PrimeVue, {
  theme: {
    preset: Aura
    // 可以直接定义覆盖的 CSS 变量
    // rules: {...}
  }
})

// 然后再挂载应用
app.mount('#app')