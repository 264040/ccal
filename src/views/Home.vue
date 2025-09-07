<template>
    <div class="page" ref="page">
        <ProductIntroduction />
        <PaddleCard />
        <router-view v-slot="{ Component, route }" v-if="$route.meta.keepAlive">
            <component :is="Component" :key="route.name" />
        </router-view>
    </div>
</template>

<script setup>
import { onMounted, defineAsyncComponent, ref, onUnmounted, onBeforeUnmount, watch } from "vue";

import PaddleCard from "@/components/Homearea/PaddleCard.vue";

import ProductIntroduction from "@/components/Homearea/ProductIntroduction.vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";

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
    }, 500);

};
 





onMounted(() => {
    // document.body.scrollTop = doScroll
    //进入该页面时，用之前保存的滚动位置赋值  
    // window.addEventListener('scroll', getScrollTop)
});

onUnmounted(() => {
    // page.value.removeEventListener('scroll', doScroll)

    onBeforeUnmount(() => {
        // 离开该页面时，保存当前滚动位置
        // page.value.removeEventListener('scroll', doScroll)
    });
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
