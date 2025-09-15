<template>
    <div class="progress-page">
        <!-- Header -->
        <header class="header">
            <div class="header-left">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" size="large"
                    shape="circle" />
                <div class="user-info">
                    <h3>Hello Alex</h3>
                    <ProgressBar :value="60" style="height: 8px" />
                </div>
            </div>

            <div class="header-actions">
                <Button icon="pi pi-bell" class="p-button-rounded p-button-text" />
                <Button icon="pi pi-search" class="p-button-rounded p-button-text" />
            </div>
        </header>

        <!-- Title -->
        <h2 class="title">Your Progress Today</h2>

        <!-- Cards Grid -->
        <div class="cards-grid">
            <Card v-for="(c, index) in cards" :key="index" class="progress-card" :style="{ background: c.bg }">
                <template #title>
                    <div class="card-header">
                        <i :class="c.icon"></i>
                        <div class="rating">
                            <i class="pi pi-star-fill"></i> {{ c.rating }}
                        </div>
                    </div>
                </template>

                <template #content>
                    <p class="category">{{ c.category }}</p>
                    <h4 class="desc">{{ c.title }}</h4>
                    <div class="card-footer">
                        <div class="avatars">
                            <Avatar v-for="(a, i) in c.avatars" :key="i" :image="a" size="normal" shape="circle" />
                            <span class="more">+5</span>
                        </div>
                        <Button icon="pi pi-arrow-right" class="p-button-rounded p-button-outlined" />
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface cardsTYPE {
    category:string,
    title:string,
    rating:Number,
    icon:String,
    bg:string,
    avatars:string[]
}
const cards = ref<cardsTYPE[]>([
    {
        category: "Tech & Software",
        title: "Designing Seamless User Experiences",
        rating: 3.5,
        icon: "pi pi-book",
        bg: "linear-gradient(135deg, #d9f2f2, #b3e5e5)",
        avatars: [
            "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",
            "https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",
            "https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png"
        ]
    },
    {
        category: "Data Analysis",
        title: "Effective Analytics Software Solutions",
        rating: 3.2,
        icon: "pi pi-chart-bar",
        bg: "linear-gradient(135deg, #e6dbf9, #d2bdf5)",
        avatars: [
            "https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png",
            "https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",
            "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        ]
    },
    {
        category: "Data Analysis",
        title: "Effective Analytics Software Solutions",
        rating: 3.2,
        icon: "pi pi-chart-bar",
        bg: "linear-gradient(135deg, #e6dbf9, #d2bdf5)",
        avatars: [
            "https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png",
            "https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",
            "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        ]
    }, {
        category: "Data Analysis",
        title: "Effective Analytics Software Solutions",
        rating: 3.2,
        icon: "pi pi-chart-bar",
        bg: "linear-gradient(135deg, #e6dbf9, #d2bdf5)",
        avatars: [
            "https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png",
            "https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",
            "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        ]
    }, {
        category: "Data Analysis",
        title: "Effective Analytics Software Solutions",
        rating: 3.2,
        icon: "pi pi-chart-bar",
        bg: "linear-gradient(135deg, #e6dbf9, #d2bdf5)",
        avatars: [
            "https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png",
            "https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",
            "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        ]
    }
]);
</script>

<style scoped>
.progress-page {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.user-info h3 {
    margin: 0 0 6px;
    font-size: 16px;
    font-weight: 600;
    color: var(--acer-user-name-style);
}

.header-actions {
    display: flex;
    gap: 10px;
}

/* Title */
.title {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    color: var(--acer-user-name-style);
}

/* Cards Grid */
.cards-grid {
    display: grid;
    gap: 16px;
}

.progress-card {
    border-radius: 16px;
    padding: 16px;
    color: #333;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
}

/* Card content */
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-header i {
    font-size: 20px;
}

.rating {
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
}

.category {
    font-size: 13px;
    opacity: 0.7;
    margin: 12px 0 4px;
}

.desc {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 12px;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.avatars {
    display: flex;
    align-items: center;
}

.avatars .p-avatar {
    margin-right: -8px;
    border: 2px solid #fff;
}

.more {
    font-size: 13px;
    margin-left: 6px;
}

/* 响应式 */
@media (min-width: 768px) {
    .cards-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 1200px) {
    .cards-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
