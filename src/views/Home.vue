<template>
    <div class="page" ref="page">
        <ProductIntroduction />
        <PaddleCard />
        <router-view v-slot="{ Component, route }">
            <component :is="Component" key="route.name" />
        </router-view>
    </div>
</template>

<script setup>
import { onMounted, defineAsyncComponent, ref, onUnmounted } from "vue";

import PaddleCard from "@/components/Homearea/PaddleCard.vue";

import ProductIntroduction from "@/components/Homearea/ProductIntroduction.vue";

const page = ref();

// 使用防抖优化滚动事件
let debounceTimer = null;
const doScroll = event => {
    // const scrollHeight = event?.target.scrollHeight
    // const clientHeight = event?.target.clientHeight
    //  if (scrollTop + clientHeight >= scrollHeight) {
    //    console.log('到底了!')
    //  }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        page.value = event.target.scrollTop;
        console.log(page.value, "滚动了");
    }, 500);
};

onMounted(() => {
    page.value.addEventListener("scroll", doScroll);
});

onUnmounted(() => {
    // page.value.removeEventListener('scroll', doScroll)
});
</script>

<style scoped>
.page {
    /* 确保页面有高度 */
    box-sizing: border-box;
    overflow: auto;
    height: 100vh;
}
</style>
