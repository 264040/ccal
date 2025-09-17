<template>
    <div class="header xianshi" :style="{
        transform: `translateY(${translateY}%)`,
        opacity: opacity
    }" ref="headerAcer">
        <div class="ellipsis-container">
            <Button type="button" rounded class="p-button-text acer_button_acers_acers" @click="toggle"
                aria-haspopup="true" aria-controls="overlay_tmenu">
                <i class="pi pi-ellipsis-v"></i>
            </Button>
            <Button type="button" rounded class="p-button-text acer_button_acers" @click="toggle_acer"
                aria-haspopup="true" aria-controls="overlay_tmenu">
                <i class="pi pi-bell"></i>
            </Button>
        </div>

        <div class="acername_aAvatar_name">
            <div class="acername_name">
                <toggleswitch />
            </div>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="user-avatar"
                size="large" shape="circle" />
        </div>
    </div>


    <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup :style="SSSaa"  />
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRouter } from "vue-router";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import { useIndextore } from "@/store/index";
import toggleswitch from '@/components/toggleswitch.vue'

const router = useRouter();
const store = useIndextore();
const headerAcer = ref(); 
// 滚动 100px 完全隐藏
const HIDE_THRESHOLD = 100;
// 根据滚动值计算比例 (0 ~ 1)
const progress = ref(0);
// 记录滚动旧值
const lastScrollTop = ref(0);
watch(
    () => store.GetscrollTopAcer,
    newTop => {
        if (newTop > lastScrollTop.value) {
            const val = newTop / HIDE_THRESHOLD;
            progress.value = Math.min(1, Math.max(0, val)); // 限制在 [0,1] 范围
        } else {
            progress.value = 0;
        }
        lastScrollTop.value = newTop <= 0 ? 0 : newTop;
    }
);

// 隐藏过程：translateY 从 0 → -100
const translateY = computed(() => -200 * progress.value);
// 透明度从 1 → 0
const opacity = computed(() => 1 - progress.value);

const SSSaa = ref({
    top: "65px !important",
    left: ".8rem !important",
    'z-index': '20000',
});

const menu = ref();

// 定义导航项

const items = ref([
    {
        route: "/",
        label: "首页",
        icon: "pi pi-home",
        command: e => {
            router.push("/");
            store.setindexkey(0);
        },
        activeIndex: 0
    },
    {
        route: "messages",
        label: "消息",
        icon: "pi pi-comments",
        command: e => {
            router.push("/messages");
            store.setindexkey(1);
        },
        activeIndex: 1
    },
    {
        route: "collect",
        label: "收藏",
        icon: "pi pi-bookmark",
        command: (e, s) => {
            router.push("/collect");
            store.setindexkey(2);
        },
        activeIndex: 2,
    },
    {
        route: "profile",
        label: "我的",
        icon: "pi pi-user",
        command: (e, s) => {
            router.push("/profile");
            store.setindexkey(3);
        },
        activeIndex: 3
    }
]);

const toggle = event => {
    menu.value.toggle(event);
    console.log(event, 11111);
};

const toggle_acer = event => {
    console.log(event, 22222);
};

onMounted(() => { });
</script>

<style scoped>
:deep(#overlay_tmenu) {
    margin-top: 10px;
}

.acername_name {
    font-size: 1.1rem;
}

.acername_aAvatar_name {

    display: flex;
    align-items: center;
    border-radius: 2rem;
    padding: .3rem;
    /* background: var(--acer-navavt-box-ground); */
    color: white;
    /* box-shadow: 2px 5px 20px 2px rgba(0, 0, 0, 0.3); */
}

.ellipsis-container {
    /* width: 50px;
  height: 50px; */
    /* background-color: red; */
}

/* 导航按钮 */
:deep(.acer_button_acers_acers) {
    display: none;
    transition: display 0.8s ease;
}

/* 官网通知按钮 */
:deep(.acer_button_acers) {
    display: none;
    transition: display 0.8s ease;
}

/* 大屏 */
@media (min-width: 769px) {
    :deep(.acer_button_acers_acers) {
        display: flex;
    }
}

/* 小屏 */
@media (max-width: 768px) {
    :deep(.acer_button_acers) {
        display: flex;
    }
}

.header {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    min-width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1rem;
    background-color: var(--acer-topnav-box);
    z-index: 12500;
    transition:
        transform 0.3s linear,
        opacity 0.3s linear,
        filter 0.3s linear;
}

:deep(.p-button-text) {
    background: #333030;
    color: #ffffff;
    border-radius: 2rem;
    width: 50px;
    height: 50px;
    align-items: center;

    transition: box-shadow 0.3s, color 0.3s cubic-bezier(0.4, 0, 1, 1);
    box-shadow: 2px 5px 20px 2px rgba(0, 0, 0, 0.3);
}

:deep(.p-button-text:not(:disabled):hover) {
    background: #262927;
    /* color: #ffffff;  */
    box-shadow: 0 0 10px rgb(255 255 255);
}

.pi-ellipsis-v:before {
    font-size: 1.3rem;
}

:deep(.p-button-text:not(:disabled):active) {
    transform: scale(.95);
}

.search-container {
    display: flex;
    align-items: center;
    position: relative;
    background: red;
    border-radius: 2rem;
    width: 48px;
    height: 48px;
}

.search-icon {
    font-size: 1.5rem;
    color: #6c757d;
    transition: all 0.3s ease;
    margin-right: 0.2rem;
}

.search-icon:hover {
    color: #4361ee;
}

.search-input {
    width: 0;
    transition: all 0.3s ease;
    opacity: 0;
    margin-right: 0.2rem;
}

.search-expand-enter-active,
.search-expand-leave-active {
    transition: all 0.3s ease;
}

.search-expand-enter-from,
.search-expand-leave-to {
    width: 0;
    opacity: 0;
    margin-right: 0;
}

.search-expand-enter-to,
.search-expand-leave-from {
    width: 250px;
    opacity: 1;
    margin-right: 0.2rem;
}

.user-avatar {
    /* background-color: #4361ee; */
    color: white;
    width: 40px;
    height: 40px;
    box-shadow: 2px 5px 20px 2px rgba(0, 0, 0, 0.3);
}
</style>
