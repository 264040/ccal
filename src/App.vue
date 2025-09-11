<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import AppBottomNavigation from "@/components/Navigation.vue";
import Hometop from "@/components/Hometop.vue";
import { ref, onMounted, computed } from "vue";
import { useIndextore } from '@/store/index'
const store = useIndextore()

const router = useRoute();

const showTop = computed(() => router.meta.showTop === true)
onMounted(() => {
    store.setAcerDarkas()

});




</script>

<template>
    <div class="crad-acc">
        <div class="crad">
            <Hometop v-if="showTop" />
            <!-- 主要内容区域，使用 router-view -->
            <router-view v-slot="{ Component, route }">
                <component :is="Component" :key="route.name" />
            </router-view>

            <!-- 底部导航栏组件 -->
            <AppBottomNavigation />
        </div>
    </div>
</template>

<style scoped>
/* 应用全局样式 */
.crad-acc {
    /* background-image: url(./image/cc7.webp); */
    /*background-color: rgb(241, 241, 241);*/
    background-color: rgb(247, 247, 247);
    /* background: linear-gradient(135deg, #752f0a 0%, #2d1c15 17%, #1d130f 34%, #150f0d 60%, #130e0c 100%); */
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.crad {
    /*height: 100%; /*一级页面高度满屏*/
    background: var(--acer-ground);
    /* padding-top: 2.5rem; */
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* padding-bottom: 1px; /* 为底部导航留出空间，防止内容被遮挡 */
    background: var(--acer-ground);


}

/* 滑动过渡动画 */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.3s ease;
    position: absolute;
    /* 允许页面重叠 */
    width: 100%;
    /* 确保页面宽度 */
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
