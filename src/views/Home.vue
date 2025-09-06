<template>
    <div class="page" ref="page">
        <KeepAlive>
            <Suspense>
                <component :is="PaddleCard" />
            </Suspense>
        </KeepAlive>
    </div>
</template>

<script setup>
// 可以在这里添加页面逻辑
// import PaddleCard from "@/components/PaddleCard.vue";

import { onMounted, defineAsyncComponent, ref, onUnmounted } from "vue";
// 异步组件
const PaddleCard = defineAsyncComponent(() =>
    import("@/components/PaddleCard.vue")
);

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
    padding: 0 0 0 0;
    height: 100%;
    min-height: 50vh;
    /* 确保页面有高度 */
    box-sizing: border-box;
    overflow: auto;
}
</style>
