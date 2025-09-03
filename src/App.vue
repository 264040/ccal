<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import AppBottomNavigation from "@/components/Navigation.vue";

const router = useRouter(); 
</script>

<template>
  <div class="crad-acc">
    <div class="crad">
      <!-- 主要内容区域，使用 router-view -->
      <router-view v-slot="{ Component, route }"> 
          <component :is="Component" :key="route.path" /> 
      </router-view>

      <!-- 底部导航栏组件 -->
      <AppBottomNavigation />
      
    </div>
     
  </div>
</template>

<style scoped>
/* 应用全局样式 */ 
.crad-acc {
  background-image: url(./image/cc7.webp);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh; 
}
.crad {
  height: 100%;
  background: linear-gradient(
    var(--bg-hue, 200deg),
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );  
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /* padding-bottom: 1px; /* 为底部导航留出空间，防止内容被遮挡 */
}

/* 滑动过渡动画 */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
  position: absolute; /* 允许页面重叠 */
  width: 100%; /* 确保页面宽度 */
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
