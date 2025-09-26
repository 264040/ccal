<template>
  <div class="page">
    <Button icon="pi pi-arrow-up" @click="visibleBottom = true" />

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

              <div class="acer_Drawer" v-for="value in 10" :key="value">
                <!-- <Chip label="Amy Elsner" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />   -->
                <img class="acer_Drawer_img" src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                  alt="">
                <div class="acer_Drawer_name_cte_box">
                  <div class="acer_Drawer_name">米子</div>
                  <div class="acer_Drawer_cte">
                    内容但是佛龛反馈给蝶恋蜂狂过啦a水电费递四方速阿打算打算打打大幅度发刚发等哈是都发啥打法是都发啥打法是都发啥打法是打发递防守打法四大分三大发啥打法是都发啥打法是打发打撒大发快过啦代发工卡老大房更大理发卡过啦打卡了考虑，了看到了发给看到了付过款老大饭卡跟老大饭卡过啦打卡发啦工卡代发老嘎
                  </div>
                </div>
              </div>


            </ScrollPanel>
          </div>
        </div>
      </template>
    </Drawer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
const heightDVH = ref(true)
const visibleBottom = ref(false);
const closeCallbacAll = () => {
  heightDVH.value = !heightDVH.value

}
const closeHeightDVH = (calback) => {
  calback()
  heightDVH.value = true
}
const styleACER = computed(() => ({
  transition: 'height 0.3s',
  width: '100%',
  height: heightDVH.value ? '50dvh' : 'calc(100dvh - 74px)'
}))


</script>

<style scoped>
.page {
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
  background: var(--acer-ground);
}

.acer_Drawer {
  display: flex;
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
  font-size: 1.2rem;
}

.acer_Drawer_img {
  width: 3.8dvh;
  height: 3.8dvh;
}

.acer_btn_bgvgvg {
  background-color: none;
  border-radius: 2rem;
  color: var(--acer-drawer-color-text);
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

.p-button-text:not(:disabled):active,.p-button-text:not(:disabled):hover{
  background: none;
}
</style>
