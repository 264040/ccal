<template>
    <div class="card">
        <Tabs :value="routeKey">
            <TabList>
                <Tab  v-for="tab in items" :key="tab.label" :value="tab.route"  >
                    <router-link  v-if="tab.route" v-slot="{ href, navigate }" :to="tab.route" custom>
                        <div v-ripple   @click="handleClick(navigate,href)" class="flex items-center gap-2 text-inherit">
                            <!-- <i :class="tab.icon" /> -->
                            {{ tab.label }}
                        </div>
                    </router-link>
                </Tab>
            </TabList> 
        </Tabs>
        <router-view />
    </div>
</template>

<script setup>
import { ref,watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const routeKey = route.name;
const activeTab = ref(routeKey); 

console.log(activeTab,'activeTab');

// 监听路由变化，自动更新选中 tab
watch(() => route.path, (newPath) => { 
    activeTab.value = newPath;
});

const items = ref([
    { route: 'ContentView', label: '推荐', icon: 'pi pi-home' },
    { route: 'BBSView', label: 'Transactions', icon: 'pi pi-chart-line' },
    { route: 'RankingView', label: 'Transactions', icon: 'pi pi-chart-line' },
]);
 
 

function handleClick(fas,href) {
    // 这里可以写你想要的逻辑，比如打印、埋点、弹窗等
    fas(); // 执行路由跳转 
    
}
</script>
<style scoped>
:deep(.p-tablist-tab-list) {
    background: none;
    border-style: none;
    padding: 1rem;
}

:deep(.p-tablist-content) {}

:deep(.p-tablist-active-bar) {
    background: none;
}

:deep(.p-tab) {
    border-radius: 2rem;
    background: #fff;
    margin: 0 1rem 0 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 1.2rem;
    min-width: 118px;
    padding: .8rem 1.5rem;
    font-family: MyFontAcer;
    font-weight: 500;
    letter-spacing: 1.5px;
}

:deep(.p-tab-active) {
    background: #333030;
    border-bottom-width: 2px;
    transition: transform 0.1s ease-in-out;

    :deep(.text-inherit) {
        color: rgb(255, 255, 255);
    }
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