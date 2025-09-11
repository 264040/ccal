<template>
  <div class="page">
    <h1>收藏页</h1>
    <p>这里是收藏列表</p>
    <Button label="切换" @click="funsa"></Button>
  </div>
</template>

<script setup>
// 可以在这里添加页面逻辑
function funsa(){
  document.body.classList.toggle('lihgt')
}

</script>

<style scoped>
.page {
  padding: 20px;
  min-height: 50vh;
  box-sizing: border-box;
  background: var(--acer-ground);
}
</style>