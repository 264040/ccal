import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 导入自动组件插件
import Components from 'unplugin-vue-components/vite'
// 导入 PrimeVue 解析器
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

import vueDevTools from 'vite-plugin-vue-devtools'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ 
    vue(),
    vueDevTools(),
    // 配置自动导入
    Components({
      resolvers: [
        // PrimeVue 组件自动导入解析器
        PrimeVueResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})