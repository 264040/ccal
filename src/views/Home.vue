<template>
  <div class="page">
    <Hometop />

    <KeepAlive>
      <Suspense>
        <component :is="PaddleCard" />
      </Suspense>
    </KeepAlive>

  </div>
</template>

<script setup>
// 可以在这里添加页面逻辑
import Hometop from "@/components/Homearea/Hometop.vue";
// import PaddleCard from "@/components/PaddleCard.vue";

import { onMounted, defineAsyncComponent } from "vue";
// 异步组件
const PaddleCard = defineAsyncComponent(() => import('@/components/PaddleCard.vue'))



onMounted(() => {
  // 页面加载时的逻辑 

});


</script>

<style scoped>
.page {
  padding: 2rem 0 0 0;
  height: 100%;
  min-height: 50vh;
  /* 确保页面有高度 */
  box-sizing: border-box;
  overflow: auto;
}
</style>
