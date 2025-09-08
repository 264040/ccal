<template>
    <div class="page" ref="page" @scroll="handleScroll">
        <ProductIntroduction />
        <PaddleCard />
        <router-view v-slot="{ Component, route }" v-if="$route.meta.keepAlive">
            <component :is="Component" :key="route.name" />
        </router-view>
    </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, watch } from "vue";

import PaddleCard from "@/components/Homearea/PaddleCard.vue";

import ProductIntroduction from "@/components/Homearea/ProductIntroduction.vue";

import { useIndextore } from '@/store/index'



const store = useIndextore()
const page = ref(null);
const scrollTopas = ref(0) // 记录上次滚动位置

// 使用防抖优化滚动事件
let debounceTimer = null;
const handleScroll = (event) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        let windowSCC = window.scrollY || event.target.scrollTop;

        store.setScrollTopAcer(windowSCC)
    }, 100);

};




// watch(scrollTopas, (b, j) => {
//     store.setScrollTopAcer(b < j ? false : true)
// })





onMounted(() => {
    store.setScrollTopAcer(0)
});

onUnmounted(() => {
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
