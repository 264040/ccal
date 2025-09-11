<template>
    <div class="theme-toggle">
        <div class="toggle-switch" :class="{ dark: store.GetacerDark }" @click="toggleTheme">
            <div class="toggle-thumb">
                <i :class="store.GetacerDark ? 'pi pi-moon' : 'pi pi-sun'"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useIndextore } from '@/store'
const store = useIndextore()


const toggleTheme = () => {
    store.setAcerDarkDD();
};

</script>

<style scoped>
/* 外层开关 */
.toggle-switch {
    width: 50px;
    height: 28px;
    background: var(--bg-toggle, #e0e0e0);
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 3px;
    cursor: pointer;
    transition: background 0.3s ease;
    position: relative;
    transform: scale(.7);
}

/* 滑块 */
.toggle-thumb {
    width: 22px;
    height: 22px;
    background: #333030;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.toggle-thumb i {
    font-size: 0.9rem;
    color: #fdfdfd;
    /* 默认太阳颜色 */
}

/* Dark 模式 */
.toggle-switch.dark {
    background: #27272a;
}

.toggle-switch.dark .toggle-thumb {
    transform: translateX(20px);
}

.toggle-switch.dark .toggle-thumb i {
    color: #ffffff;
    /* 月亮颜色 */
}

/* 全局主题 */
:root {
    --bg-color: #ffffff;
    --text-color: #222222;
}

body.dark {
    --bg-color: #1e1e1e;
    --text-color: #f0f0f0;
}

body {
    background: var(--bg-color);
    color: var(--text-color);
    transition: background 0.3s, color 0.3s;
}
</style>