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

import { useIndextore } from "@/store/index";

const store = useIndextore();
const page = ref(null);
const scrollTopas = ref(0); // 记录上次滚动位置


const handleScroll = event => {
    let windowSCC = event.target.scrollTop;
    store.setScrollTopAcer(windowSCC);

};


onMounted(() => {
    store.setScrollTopAcer(0);
    window.addEventListener("scroll", handleScroll, { passive: true })
    store.setPageClientHeight(page.value.clientHeight) 
});

onUnmounted(() => { });
</script>

<style scoped>
.page {
    /* 确保页面有高度 */
    box-sizing: border-box;
    overflow: auto;
    height: 100vh;
}
</style>
