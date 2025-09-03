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

  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
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
</style>
