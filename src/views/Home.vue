<template>
    <div class="page" ref="page" @scroll="handleScroll">

        <ProductIntroduction />
        <PaddleCard />
        <router-view v-slot="{ Component, route }">
            <KeepAlive>
                <component :is="Component" :key="route.name" />
            </KeepAlive>
        </router-view>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted, watchEffect, nextTick } from "vue";

import PaddleCard from "@/components/Homearea/PaddleCard.vue";

import ProductIntroduction from "@/components/Homearea/ProductIntroduction.vue";

import { useIndextore } from "@/store/index";

import { useRoute, useRouter } from "vue-router";
const router = useRouter()
const route = useRoute()



const store = useIndextore();
const page = ref<HTMLDivElement | null>(null);






const handleScroll = (event: any) => {
    let windowSCC = event.target.scrollTop;
    store.setScrollTopAcer(windowSCC);
};

onMounted(async () => { 
 
    route.name === 'Home' && router.replace({ name: 'ContentView' });
    //  router.push(store.GetchildPath)
    nextTick(() => {
        // 恢复上次滚动位置
        page.value && (page.value.scrollTop = store.scrollTopAcer);
    })


});

watchEffect(() => {
    // 保存最新的子路由
    store.setChildPath(route.name)
})

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
