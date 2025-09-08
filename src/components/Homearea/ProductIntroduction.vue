<template>
    <div class="product-introduction">

        <Fieldset legend="Vue 3 新特性">
            <p class="m-0">
                渐进式 JavaScript 框架、易学易用、性能出色、适用场景丰富的 Web 前端框架。
            </p>
        </Fieldset>
    </div>
</template>

<script setup>
// 可以在这里添加页面逻辑
</script>

<style scoped>
.product-introduction {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding-top: 3rem;
}

:deep(.m-0) {
    letter-spacing: 4px;
    line-height: 1.5;
    padding: .9rem 0.75rem 1.5rem;
    font-size: 1.5rem;
}

.p-fieldset {
    padding: 0 1.5rem 1.125rem 1.125rem !important;
    margin: 3rem 0 0 0;
    font-family: MyFontAcer;
    background: #ffffff00;
    border: none;
    max-width: 1200px;
}

:deep(.p-fieldset-legend-label) {
    font-weight: bold;
    /* font-size: 2.6rem; */
    color: #333;
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}



:deep(.p-fieldset-legend) {
    background: #ffffff00;
    font-size: 5rem;
    display: flex;
    justify-content: center;
    text-align: center;
}


@media (max-width: 768px) {
    :deep(.m-0) {
        font-size: 1.4rem;
    }

}


@media (max-width: 420px) {
    :deep(.m-0) {
        font-size: 1.5rem;
    }

    :deep(.p-fieldset-legend) {
        font-size: 2.7rem;
        text-align: left;
    }



    :deep(.m-0) { 
        padding: .9rem 0.75rem 0; 
        font-size: 1.2rem;
    }
}
</style>