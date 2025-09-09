<template>
    <div class="skeleton-wrapper">
        <!-- 顶部标题 -->
        <div class="skeleton_acer_title">
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton_title_avit"></div>
        </div>

        <!-- 内容块 -->
        <div class="skeleton skeleton-text" v-for="n in 3" :key="n"></div>

        <!-- 按钮占位 -->
        <div class="skeleton_acer">
            <div class="skeleton skeleton-btn"></div>

            <div class="skeleton skeleton-btn"></div>
        </div>
    </div>
</template>

<script setup>
// 这里不需要逻辑，只是 UI 占位
</script>

<style scoped>
.skeleton_acer_title {
    display: grid;
    grid-template-columns: 1fr  1fr;
    background: red;
}
.skeleton-wrapper {
    padding: 20px;
}

.skeleton {
    background: linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%);
    background-size: 400% 100%;
    animation: shimmer 1.4s ease infinite;
    border-radius: 4px;
    margin-bottom: 12px;
}

.skeleton_title_avit {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2rem;
}

.skeleton-title {
    width: 60%;
    height: 20px;
}

.skeleton-text {
    width: 100%;
    height: 14px;
}

.skeleton-btn {
    width: 100px;
    height: 36px;

    border-radius: 2rem;
}

.skeleton_acer {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: start;

    align-items: center;
    gap: 0.7rem;
}

@keyframes shimmer {
    0% {
        background-position: -400px 0;
    }
    100% {
        background-position: 400px 0;
    }
}
</style>
