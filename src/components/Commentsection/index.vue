<template>
  <div class="page">
    <Button icon="pi pi-arrow-up" @click="data" />

    <Drawer v-model:visible="visibleBottom" header="评论" position="bottom" style="height: auto">
      <template #container="{ closeCallback }">
        <div class="flex flex-col h-full">
          <div class="acer_Drawer_ttt">
            <span>
              <Button class="acer_btn_bgvgvg" @click="closeCallbacAll"
                icon="pi pi-arrow-up-right-and-arrow-down-left-from-center" variant="text"></Button>
            </span>
            <span class="acer_Drawer_ttt_text">
              <span class="font-semibold text-2xl text-primary">评论</span>
            </span>
            <span>
              <Button class="acer_btn_bgvgvg" @click="closeHeightDVH(closeCallback)" icon="pi pi-angle-down"
                variant="text"></Button>

            </span>
          </div>


          <div class="overflow-y-auto">
            <ScrollPanel :style="styleACER">

              <template v-if="isLoding">
                <comSkleto />
              </template>
              <template v-else-if="!isLoding && ACERData.length">
                <div class="acer_Drawer" v-for="(value, inedx) in ACERData" :key="value.id">
                  <img class="acer_Drawer_img" :src="value.avatar" alt="">
                  <div class="acer_Drawer_name_cte_box">
                    <div class="acer_Drawer_name">{{ value.name }}</div>
                    <div class="acer_Drawer_cte">
                      {{ value.c }}
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="neacer"> 
                  <div class="pi pi-discord neacer_disc"></div>
                  <div>期待你的评价</div> 
                </div>
              </template>

            </ScrollPanel>

          </div>
        </div>
      </template>
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import comSkleto from "./comSkleto.vue";
const dddd = ref([
  {
    name: 111,
    c: '士大夫如果对方沟通的想法是对方输入方式饿哇撒旦发射点发射点',
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    id: 1
  }, {
    name: 222,
    c: '士大夫如果对方沟',
    avatar: 'https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg',
    id: 2
  }, {
    name: 333,
    c: '士大夫如果对方沟通的想法是对方输入方式饿',
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png',
    id: 3
  },
])
const heightDVH = ref(true)
const DVHheight = ref<number>(60)
const visibleBottom = ref(false);
const ACERData = ref<{ id: any, name: any, c: string, avatar: string }[]>([]);
const isLoding = ref(false);
const closeCallbacAll = () => {
  heightDVH.value = !heightDVH.value
  DVHheight.value = heightDVH.value ? 60 : 100
}
const closeHeightDVH = (calback: any) => {
  calback()
  heightDVH.value = true
}
const styleACER = computed(() => ({
  transition: 'height 0.3s',
  width: '100%',
  height: `calc(${DVHheight.value}dvh - 74px)`
}))

const data = () => {
  visibleBottom.value = true
  if (visibleBottom.value) {
    isLoding.value = true
    setTimeout(() => {
      ACERData.value = []
      isLoding.value = false
    }, 1000);
  }
}


</script>

<style scoped>
.topaceraaa {
  width: 2rem;
  height: .5rem;
  background-color: #3f3e3e6b;
  border-radius: 1rem;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
}

.page {
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
  background: var(--acer-ground);
}

.acer_Drawer {
  display: grid;
  grid-template-columns: 3.8dvh auto;
  align-items: flex-start;
  gap: .5rem;
  margin: 0 0 2rem 0;

}

.acer_Drawer_ttt {
  display: grid;
  grid-template-columns: auto 1fr auto;
  text-align: center;
  padding: 1rem;
}

.acer_Drawer_ttt_text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.acer_Drawer_img {
  width: 3.8dvh;
  height: 3.8dvh;
  border-radius: 3rem;
  background: var(--acer-comSkleto-bag);
}

.acer_btn_bgvgvg {
  background-color: none;
  border-radius: 2rem;
  color: var(--acer-drawer-color-text);
}

.neacer {
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.neacer_disc {
  font-size: 6rem;
  color: #4a4a4a5e;
  margin-top: -160px;
}

.acer_Drawer_name_cte_box {
  display: flex;
  gap: .3rem;
  flex-direction: column;
}
 
.acer_Drawer_name {
  font-size: .7rem;
  color: #8d8d8d;
}

.acer_Drawer_cte {
  font-size: .82rem;
}

.p-button-text:not(:disabled):active,
.p-button-text:not(:disabled):hover {
  background: none;
}
</style>
