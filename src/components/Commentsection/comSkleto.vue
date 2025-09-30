<template>
    <div class="acer_DrawerS" v-for="value in 3" :key="value">
        <div class="acer_Drawer_imgS"></div>
        <div class="acer_Drawer_name_cte_boxS">
            <div class="acer_Drawer_nameS"></div>
            <div class="acer_Drawer_cteS"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.acer_DrawerS {
    display: grid;
    grid-template-columns: 3.8dvh auto;
    align-items: flex-start;
    gap: .5rem;
    margin: 0 0 2rem 0;

}

.acer_Drawer_imgS {
    width: 3.8dvh;
    height: 3.8dvh;
    background: var(--acer-comSkleto-bag);
    border-radius: 3rem;


    animation: shimmerACWE 2s linear infinite;
}

.acer_Drawer_name_cte_boxS {
    display: flex;
    gap: .3rem;
    flex-direction: column;

}

.acer_Drawer_nameS {
    font-size: .7rem;
    color: #8d8d8d;
    width: 10dvh;
    height: 16px;
    border-radius: 3rem;
    background: var(--acer-comSkleto-bag);
    animation: shimmerACWE 2s linear infinite;
}

.acer_Drawer_cteS {
    font-size: .82rem;
    height: 16px;
    border-radius: 3rem;
    background: var(--acer-comSkleto-bag);
    animation: shimmerACWE 2s linear infinite;
}

@keyframes shimmerACWE {
    0% {
        background: var(--acer-comSkleto-bag);
    }

    50% {
        background-color: var(--acer-comSkleto-bag-key);
    }

    100% {
        background: var(--acer-comSkleto-bag);
    }
}
</style>