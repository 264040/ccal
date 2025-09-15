<template>
    <div class="page" ref="page" @scroll="handleScroll">

        <ProductIntroduction />
        <PaddleCard />
        <router-view v-slot="{ Component, route }" v-if="!store.GetisLoading">
            <component :is="Component" :key="route.name" />
        </router-view>
        <div v-if="store.GetisLoading" class="skeletons_acer_acer">
            <Skeletons v-for="n in 6" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted, watch } from "vue";

import PaddleCard from "@/components/Homearea/PaddleCard.vue";

import ProductIntroduction from "@/components/Homearea/ProductIntroduction.vue";

import { useIndextore } from "@/store/index";

import Skeletons from "@/components/SkeletonComponent/Skeleton.vue";


const store = useIndextore();
const page = ref<any>(null);






const handleScroll = (event: any) => {
    let windowSCC = event.target.scrollTop;
    store.setScrollTopAcer(windowSCC);
};

onMounted(() => {
    store.setScrollTopAcer(0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    store.setPageClientHeight(page.value.clientHeight);
});

onUnmounted(() => { });
</script>

<style scoped>
.page {
    /* 确保页面有高度 */
    box-sizing: border-box;
    overflow: auto;
    height: 100vh;
    background: var(--acer-ground);
}
</style>
