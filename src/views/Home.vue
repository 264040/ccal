<template>
  <div class="page">
    <Hometop />
    <PaddleCard />
  </div>
</template>

<script setup>
// 可以在这里添加页面逻辑
import Hometop from "@/components/Homearea/Hometop.vue";
import PaddleCard from "@/components/PaddleCard.vue";
 
</script>

<style scoped>
.page {
  padding: 2rem 0 0 0;
  height: 100%;
  min-height: 50vh; /* 确保页面有高度 */
  box-sizing: border-box;
  overflow: auto;
}
</style>
