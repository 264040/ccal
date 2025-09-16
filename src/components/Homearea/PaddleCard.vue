<template>
    <div class="card">
        <Tabs :value="route.name as string">
            <TabList ref="tabListRef" class="aws">
                <Tab v-for="tab in items" :key="tab.label" :value="tab.route" @click="routeBack(tab.route)">
                    <div v-ripple class="flex items-center gap-2 text-inherit">
                        <!-- <i :class="tab.icon" /> -->
                        {{ tab.label }}
                    </div>
                </Tab>
            </TabList>
        </Tabs>
    </div>


</template>

<script setup lang="ts">
import router from "@/router";
import { ref, onUnmounted, onActivated, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useIndextore } from '@/store'

const store = useIndextore()
const route = useRoute();
const routeKey: string | any = route.name;

const tabListRef = ref<HTMLElement | null>(null)





onUnmounted(() => {
    // 调用时机为组件卸载时
    // console.log(`调用时机为组件卸载时`);
});
onMounted(() => {
    // 页面加载时的逻辑 
    let ElmentBOX = tabListRef.value as HTMLElement | any;
    let elChild = ElmentBOX.$el.querySelector('.p-tablist-content')?.querySelector('.p-tablist-tab-list') as HTMLElement | undefined;

    elChild && elChild.addEventListener("scroll", (e: HTMLElement | any) => store.setscrollTAPLIST(e.target.scrollLeft))
    elChild && (elChild.scrollLeft = store.GetscrollTAPLIST)
});
onActivated(() => {
    // 调用时机为首次挂载
    // 以及每次从缓存中被重新插入时
    // console.log(`我onActivated`, show.value = true);
});


const items = ref([
    { route: "ContentView", label: "推荐", icon: "pi pi-home" },
    { route: "BBSView", label: "Transactions", icon: "pi pi-chart-line" },
    { route: "RankingView", label: "Transactions", icon: "pi pi-chart-line" }
]);

function routeBack(e: any) {
    router.push({ name: e });
}
</script>
<style scoped>
:deep(.p-tablist-tab-list) {
    background: none;
    border-style: none;
    padding: 1rem;
    gap: 1rem;
    overflow-x: auto;
}

:deep(.p-tablist-content) {}

:deep(.p-tablist-active-bar) {
    background: none;
}

:deep(.p-tab) {
    border-radius: 2rem;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 1.2rem;
    min-width: 118px;
    padding: 0.8rem 1.5rem;
    font-family: MyFontAcer;
    font-weight: 500;
    letter-spacing: 1.5px;

    border-style: none;
}

:deep(.p-tab-active) {
    background: #333030;
    /* background: #080808; */
    border-bottom-width: 2px;
    transition: transform 0.1s ease-in-out;
    border-style: solid;

    :deep(.text-inherit) {
        color: rgb(255, 255, 255);
    }
}

:deep(.p-tab:not(.p-tab-active):not(.p-disabled):hover) {
    background-color: #fff;
    box-shadow: 0 0 10px rgb(255 255 255);
    transition: box-shadow 0.3s cubic-bezier(0.4, 0, 1, 1);
}

:deep(.p-tab-active:active) {
    transform: scale(0.93);
}

:deep(.text-inherit) {
    color: black;
}

:deep(.p-icon),
:deep(.p-tablist-next-button),
:deep(.p-tablist-prev-button) {
    opacity: 0;
}

@media (min-width: 950px) {
    :deep(.p-tablist-tab-list) {
        display: flex;
        justify-content: center;
    }
}
</style>
