<template>
  <div class="card flex justify-center">
    <VirtualScroller :items="store.GetPosts" :itemSize="220" @scroll="acerss" ref="page"
      class="border border-surface-200 dark:border-surface-700 rounded" style="width: 100%; height: 100vh">
      <template v-slot:item="{ item, options }">
        <div class="acer_box">
          {{ item.author }}
        </div>
      </template>
    </VirtualScroller>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { useIndextore } from '@/store';
const store = useIndextore()

const page = ref<HTMLDivElement | null>(null);

const acerss = (e: HTMLDivElement | any) => {
  console.log(e.target.scrollTop);

}




onMounted(() => {


});
</script>

<style scoped>
.acer_box {
  background-color: red;
  height: 190px;
  margin: .8rem 0;

}
</style>