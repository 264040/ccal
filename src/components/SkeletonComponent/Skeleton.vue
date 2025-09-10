<template>
    <div class="skeleton-wrapper">
        <!-- 顶部标题 -->
        <div class="skeleton_acer_title">
            <div class="skeleton skeleton-title"></div>
            <div class="  skeleton_title_avit"></div>
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

</style>
