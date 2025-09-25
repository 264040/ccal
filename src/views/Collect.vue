<template>
  <div class="page">
    <div class="caontin" :style="{ height: `${caontinH}px` }" @scroll="scrollfun" ref="caontin">
      <div :style="{ height: `${xunigundong}px`, background: '#fa9f2d' }"></div>

      <div class="listbox" :style="{
        height: `${listbox}px`,
        background: '#9eb01a',
        transform: `translateY(${tops}px)`
      }">
        <div class="gnifh" v-for="(itme, index) in listitme" :key="index">
          {{ itme.ni }}
        </div>
      </div>
    </div>
    <div>caontinH高度:{{ caontinH }}</div>
    <div>scroll:{{ scrolltopvaluer }}</div>
    <div>listbox高度:{{ listbox }}</div>
    <div>itme高度:{{ itmeH }}</div>
    <div>tops:{{ tops }}</div>
    <div>top:{{ Math.floor((scrolltopvaluer / itmeH) * itmeH) }}</div>
    <div @click="acer">tops:{{ itmeH }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
const list = Array.from({ length: 123 }, (t, l) => ({ ni: `这是第${l}` }));

const boxHeight = ref(null); // 容器高度
const itmeH = ref(30); // 渲染项高度
const caontinH = computed(() => itmeH.value * 6);
const listbox = computed(() => endindex.value * itmeH.value); // listbox高度
const strat = ref(0); //开始下标
const endindex = computed(() => caontinH.value / itmeH.value); //结束下标
const caontin = ref(null);
const scrolltopvaluer = ref(0); //
const xunigundong = computed(() => list.length * itmeH.value);
const listitme = computed(() =>
  list.slice(strat.value, strat.value + endindex.value)
); // 只展示10数据
const tops = computed(() => strat.value * itmeH.value);
const scrollfun = _ => {
  let a = _.target.scrollTop;
  strat.value = Math.floor(a / itmeH.value);
  scrolltopvaluer.value = a;
};

const acer = () => {
  caontin.value.scrollTop = 500;
};
</script>

<style scoped>
.page {
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
  background: var(--acer-ground);
}

.caontin {
  width: 150px;
  overflow-y: auto;

  background: red;
  position: relative;
}

.listbox {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}

.gnifh {
  background: #843ff3;
  height: 30px;
  display: flex;
  align-items: center;
}

div::-webkit-scrollbar {
  width: 8px;
  /* 滚动条宽度 */
}

div::-webkit-scrollbar-thumb {
  background-color: #888;
  /* 滚动条颜色 */
  border-radius: 4px;
  /* 圆角 */
}

div::-webkit-scrollbar-track {
  background-color: #f0f0f0;
  /* 滚动轨道颜色 */
}
</style>
