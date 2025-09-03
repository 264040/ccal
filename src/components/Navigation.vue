<template>
    <div class="bottom-navigation">
        <TabMenu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import TabMenu from "primevue/tabmenu";

const router = useRouter();

// 定义导航项
const items = ref([
    {
        label: "首页",
        icon: "pi pi-home",
        command: () => {
            router.push("/");
        }
    },
    {
        label: "消息",
        icon: "pi pi-comments",
        command: () => {
            router.push("/messages");
        }
    },
    {
        label: "我的",
        icon: "pi pi-user",
        command: () => {
            router.push("/profile");
        }
    }
]);
</script>

<style scoped>
.bottom-navigation {
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 2%;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000; /* 确保导航栏在最上层 */
    border-radius: 50px;
    background: none;
}

/* 可以覆盖 PrimeVue 的默认样式以更好地适应底部导航 */
:deep(.p-tabmenu) {
    background-color: #fff;
    border: 0px solid #e5e7eb;
    border-radius: 50px;
    width: 300px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
    transition:
        width 0.3s ease-out,
        transform 0.5s ease-in-out,
        padding 0.3s;
    display: flex;
    justify-content:space-around;
}

:deep(.p-tabmenu-nav) {
    justify-content: space-around;
}

:deep(.p-tabmenu-nav-link) {
    flex-direction: column;
    padding: 50px;
}

:deep(.p-menuitem-icon) {
    margin-bottom: 0.25rem;
}

:deep(.p-tabmenu-tablist) {
    transition:
        width 0.3s ease-out,
        transform 0.5s ease-in-out,
        padding 0.3s;
}

/* 响应式设计 */
/* 小屏 */
@media (max-width: 768px) {
}

/* 中屏*/
@media (min-width: 769px) and (max-width: 949px) {
    :deep(.p-tabmenu) {
        width: 400px;
    }
    :deep(.p-tabmenu-tablist) {
        justify-content: space-around;
    }
}

/* 大屏 */
@media (min-width: 950px) {
    :deep(.p-tabmenu) {
        width: 600px;
    }
    :deep(.p-tabmenu-tablist) {
        justify-content: space-around;
    }
}
</style>
