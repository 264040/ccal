<template>
    <div class="profile-tabs">
        <!-- Header 卡片 -->

        <div class="header-top">
            <Button icon="pi pi-arrow-left" class="p-button-rounded p-button-text goacer" @click="goBack" />
            <Button icon="pi pi-cog" class="p-button-rounded p-button-text goacer" />
        </div>

        <header class="header-hero">
            <div class="header-content">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="xlarge"
                    shape="circle" class="profile-avatar" />
                <h2 class="username">Aalvina Fatehi Islam</h2>
                <p class="user-role">Professor · San Francisco, CA</p>
            </div>
        </header>

        <!-- Articles / Likes 保留 -->
        <div class="articles-likes">
            <div class="tab-buttons">
                <Button label="Articles" :class="['tab-btn', currentIndex === 0 ? 'active' : '']"
                    @click="goToIndex(0)" />
                <Button label="Likes" :class="['tab-btn', currentIndex === 1 ? 'active' : '']" @click="goToIndex(1)" />
            </div>

            <!-- swipe 容器 -->
            <div class="tab-container" ref="tabContainer" tabindex="0" @pointerdown="onPointerDown"
                @pointermove="onPointerMove" @pointerup="onPointerUp" @pointercancel="onPointerUp"
                @pointerleave="onPointerUp">
                <div class="tab-slider" :style="{
                    transform: `translateX(${offsetX}px)`,
                    transition: transitioning ? 'transform 0.28s cubic-bezier(.22,.9,.35,1)' : 'none'
                }">
                    <!-- Articles page -->
                    <div class="tab-page">
                        <div class="articles-grid">
                            <Card v-for="a in articles" :key="a.id" class="article-card">
                                <template #header>
                                    <img :src="a.img" alt="" class="card-img" />
                                </template>
                                <template #title>{{ a.title }}</template>
                                <template #content>
                                    <p class="desc">{{ a.desc }}</p>
                                    <small class="date">{{ a.date }}</small>
                                </template>
                            </Card>
                        </div>
                    </div>

                    <!-- Likes page -->
                    <div class="tab-page">
                        <div class="list">
                            <Card v-for="l in likes" :key="l.id" class="like-card">
                                <template #title>
                                    <div class="like-title">{{ l.title }}</div>
                                </template>
                                <template #content>
                                    <small class="date">{{ l.date }}</small>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 * 已修复版本说明：
 * - 使用 Pointer Events 统一处理 touch/mouse（pointerdown/move/up）
 * - 基于容器宽度计算 offset，响应式安全
 * - 实时跟随手指位移，边界阻尼，松手后判断切换 or 回弹
 */

import { ref, onMounted, onBeforeUnmount, nextTick, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import Card from 'primevue/card'
import { useIndextore } from '@/store'
const store = useIndextore()

const router = useRouter()
function goBack(): void {
    router.push('/')
    store.setindexkey(0)
}

/* preserved data */
const lessons = ref([
    { id: 1, title: "History", date: "16 Aug", time: "09:00 PM", icon: "pi pi-book" },
    { id: 2, title: "Geometry", date: "16 Aug", time: "08:00 PM", icon: "pi pi-compass" },
    { id: 3, title: "Physics", date: "16 Aug", time: "09:00 PM", icon: "pi pi-sliders-h" },
    { id: 4, title: "Math", date: "16 Aug", time: "09:00 PM", icon: "pi pi-calculator" },
])

interface articlesTYPE {
    id: number,
    title: string,
    desc: string,
    date: string,
    img: string
}

interface likesTYPE {
    id: number,
    title: string,
    date: string,
}


/* tab content 
 ref<articlesTYPE[]>  等同于  ref<Array<articlesTYPE>>,前者是后者的简化写法

*/
const articles = ref<articlesTYPE[]>([
    { id: 1, title: "Vue3 Composition API 深度解析", desc: "掌握 setup 和响应式原理", date: "2025-09-01", img: "https://picsum.photos/400/260?1" },
    { id: 2, title: "Pinia 状态管理实践", desc: "替代 Vuex 的轻量解决方案", date: "2025-09-05", img: "https://picsum.photos/400/260?2" },
    { id: 3, title: "前端性能优化指南", desc: "首屏优化与懒加载技巧", date: "2025-09-09", img: "https://picsum.photos/400/260?3" },
    { id: 4, title: "Vite 构建优化技巧", desc: "让你的构建速度飞起来", date: "2025-09-10", img: "https://picsum.photos/400/260?4" },
])
// const likes = ref<Array<likesTYPE>>([
//     { id: 1, title: "React vs Vue 对比分析", date: "2025-08-25" },
//     { id: 2, title: "设计系统最佳实践", date: "2025-08-30" },
// ])
const likes = ref<Array<likesTYPE>>([
    { id: 1, title: "React vs Vue 对比分析", date: "2025-08-25" },
    { id: 2, title: "设计系统最佳实践", date: "2025-08-30" },
])
/* swipe state */
const tabContainer = ref<HTMLDivElement | null>(null)
const containerWidth = ref<number>(0)
const currentIndex = ref<number>(0) // 0 articles, 1 likes
const offsetX = ref<number>(0)
const transitioning = ref<boolean>(false)

let pointerId: number | null = null
let startX: number = 0
let startY: number = 0
let dragging: boolean = false
let lastDeltaX: number = 0
const THRESHOLD: number = 60
const MAX_INDEX: number = 1

function updateContainerWidth(): void {
    if (!tabContainer.value) return
    // use clientWidth (inner content width)
    containerWidth.value = tabContainer.value.clientWidth
    // sync offset to current index
    offsetX.value = -currentIndex.value * containerWidth.value
}

onMounted(() => {
    nextTick(updateContainerWidth)
    window.addEventListener('resize', updateContainerWidth)
})
onBeforeUnmount(() => {
    window.removeEventListener('resize', updateContainerWidth)
})

/* programmatic switch (button) */
function goToIndex(index: number): void {
    currentIndex.value = Math.max(0, Math.min(MAX_INDEX, index))
    transitioning.value = true
    offsetX.value = -currentIndex.value * containerWidth.value
    setTimeout(() => (transitioning.value = false), 300)
}

/* POINTER event handlers - unified for touch & mouse */
function onPointerDown(ev: PointerEvent):void {
    if (!tabContainer.value) return
    // only left-button for mouse, pointerdown for touch is fine
    if (ev.pointerType === 'mouse' && ev.button !== 0) return

    pointerId = ev.pointerId
    try { tabContainer.value.setPointerCapture(pointerId) } catch (e) { }
    startX = ev.clientX
    startY = ev.clientY
    dragging = false
    lastDeltaX = 0
    transitioning.value = false
    // ensure width current
    updateContainerWidth()
}

function onPointerMove(ev: PointerEvent):void {
    if (pointerId === null || ev.pointerId !== pointerId || !tabContainer.value) return

    const x = ev.clientX
    const y = ev.clientY
    const dx = x - startX
    const dy = y - startY

    if (!dragging) {
        // require horizontal intent and small threshold
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 6) {
            dragging = true
        } else {
            return
        }
    }

    // prevent vertical scroll while horizontally dragging
    ev.preventDefault()

    const base = -currentIndex.value * containerWidth.value
    let newOffset = base + dx

    const max = 0
    const min = -MAX_INDEX * containerWidth.value
    // boundary damping
    if (newOffset > max) newOffset = max + (newOffset - max) * 0.25
    if (newOffset < min) newOffset = min + (newOffset - min) * 0.25

    offsetX.value = newOffset
    lastDeltaX = dx
}

function onPointerUp(ev: PointerEvent):void {
    if (pointerId === null || !tabContainer.value) return
    try { tabContainer.value.releasePointerCapture(pointerId) } catch (e) { }
    pointerId = null

    if (!dragging) return
    dragging = false

    // decide switch
    if (Math.abs(lastDeltaX) > THRESHOLD) {
        if (lastDeltaX < 0 && currentIndex.value < MAX_INDEX) {
            currentIndex.value++
        } else if (lastDeltaX > 0 && currentIndex.value > 0) {
            currentIndex.value--
        }
    }

    // animate to final position
    transitioning.value = true
    offsetX.value = -currentIndex.value * containerWidth.value
    setTimeout(() => (transitioning.value = false), 300)
    lastDeltaX = 0
}
</script>

<style scoped>
:deep(.p-button-text) {
    color: var(--acer-color);
}

:deep(.p-button-text:not(:disabled):hover) {

    color: rgb(255, 255, 255);
    background: #333030;
}

:deep(.p-button) {
    border: none;
    background: var(--acer-btnground);
    width: 50px;
    height: 50px !important;
}

.goacer {

    color: var(--acer-color);
    background: var(--acer-icon-ground);
}

.like-title {
    color: var(--acer-color);
}

.p-card {
    color: var(--acer-min-font);
}


:deep(.p-button:not(:disabled):hover) {
    border: none;
}

:deep(.p-button:not(:disabled).active) {

    background: #10b981;
    border: none;
}

.profile-tabs {
    max-width: 920px;
    margin: 0 auto;
    padding: 16px;
    background: var(--acer-ground);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: .8rem;
}

/* Header */
/* Header Hero 风格 */
.header-hero {
    position: relative;
    padding: 24px 16px 40px;
    border-radius: 0 0 24px 24px;
    /* background: linear-gradient(135deg, #4a90e2, #50c9ce); */
    color: #333030;
    text-align: center;
}

/* 顶部按钮 */
.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* 中间内容 */
.header-content {
    margin-top: 20px;
}

.profile-avatar {
    width: 96px !important;
    height: 96px !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.username {
    margin: 12px 0 4px;
    font-size: 22px;
    font-weight: 600;
    color: var(--acer-user-name-style);
}

.user-role {
    font-size: 14px;
    opacity: 0.9;
    color: var(--acer-user-name-style);
}

/* Header 卡片 */
.header-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    margin-bottom: 16px;
}

.header-title {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    flex: 1;
}

.header h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
}


/* lessons */
.lessons .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.lesson-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.lesson-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.lesson-item i {
    font-size: 18px;
    color: var(--primary-color, #2196f3);
}

/* tab buttons */
.tab-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 8px;
    margin-bottom: 12px;
    height: 60px;
}

.tab-btn {
    width: 100%;
    border-radius: 2rem;
}

.tab-btn.active {
    background: #333030;
    color: #fff !important;
}

/* swipe container - ONLY this area moves */
.tab-container {
    position: relative;
    overflow: hidden;
    touch-action: pan-y;
    /* allow vertical scrolling but intercept horizontal */
    border-radius: 12px;
    background: transparent;
}

/* tab-slider using flex (no fixed width) */
.tab-slider {
    display: flex;
    will-change: transform;
}

/* each page takes full container width */
.tab-page {
    flex: 0 0 100%;
    box-sizing: border-box;
    padding: 8px;
}

/* articles grid */
.articles-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
}

.article-card {
    border-radius: 12px;
    overflow: hidden;
    background: var(--acer-box-ground);
    color: var(--acer-color);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.card-img {
    width: 100%;
    height: 120px;
    object-fit: cover;
}

.article-card .desc {
    margin: 6px 0;
    color: var(--acer-min-font);
    font-size: 13px;
}

.article-card .date {
    color: #888;
    font-size: 12px;
}

/* likes list */
.list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.like-card {
    background: var(--acer-btnground);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    padding: 12px;
}

/* responsive */
@media (max-width: 900px) {
    .articles-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 600px) {
    .articles-grid {
        grid-template-columns: 1fr;
    }

    /* 手机单列 */
}
</style>