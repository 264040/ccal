<template>
  <Transition name="slide-fade">
    <div class="content-container" v-show="sawdw" ref="acer_data_scroll">
      <!-- 内容区 -->
      <div class="card-grid">
        <div v-for="(post, index) in posts" :key="index" class="post-card" :style="{ '--bg-hue': post.bgHue }">
          <div class="card-header">
            <h3 class="post-title">{{ post.title }}</h3>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="post-avatar"
              size="large" shape="circle" />
          </div>

          <div class="card-content">
            <p class="post-text">{{ post.content }}</p>
          </div>

          <div class="card-footer">
            <div class="card-btns">
              <Button icon="pi pi-heart" class="p-button-text p-button-plain reaction-btn"
                :label="post.likes?.toString()" />
              <Button icon="pi pi-comment" class="p-button-text p-button-plain reaction-btn"
                :label="post.comments?.toString()" />
            </div>
            <div class="card-www">
              <div class="card flex justify-center card-txl">
                <AvatarGroup>
                  <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"
                    size="normal" class="avateraxer" />
                  <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" shape="circle"
                    class="avateraxer" />
                  <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle"
                    class="avateraxer" />

                  <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" shape="circle"
                    class="avateraxer" />
                </AvatarGroup>
              </div>
              <div class="post-time itmeacer">{{ post.audien }}</div>
            </div>
            <!--<div class="post-author">{{ post.author }}</div>-->
          </div>
          <!-- 背景元素用于毛玻璃效果 -->
          <div class="card-bg"></div>
        </div>
      </div>
      <!-- 底部占位 -->
      <div ref="target" :style="{ height: paddingBottom + 'px' }"></div>
      <div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
        <ul class="m-0 p-0 list-none">
          <li class="mb-4">
            <div class="flex">
              <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
              <div class="self-center" style="flex: 1">
                <Skeleton width="100%" class="mb-2"></Skeleton>
                <Skeleton width="75%"></Skeleton>
                <Skeleton width="70%"></Skeleton>
                <Skeleton width="65%"></Skeleton>
                <Skeleton width="60%"></Skeleton>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, computed } from "vue";
import Avatar from "primevue/avatar";
import Button from "primevue/button";
import { useIndextore } from "@/store/index";

const store = useIndextore();

const { $axios } = getCurrentInstance().appContext.config.globalProperties


const sawdw = ref(false);
const acer_data_scroll = ref(null);
const posts = ref([])
const isLoading = ref(false)



const fetchData = async () => {
  // 模拟从服务器获取数据 

  try {
    const dates = await $axios.get('/json/kp.json')// 新数据
    if (dates.status === 200) {
      posts.value = dates.data
    }
  } catch (error) {
    console.log(error, 100);

  }

};

//  props.overscan>展示数量
const total = computed(() => posts.value.length)
console.log(total, '数据长度');

const visibleCount = computed(() => Math.ceil(store.GetPageClientHeight / 50) + 6)
console.log(visibleCount, '容器高度');

const start = computed(() => Math.max(0, Math.floor(store.GetScrollTopAcer / store.GetPageClientHeight) - 6))

const end = computed(() => Math.min(total.value, start.value + visibleCount.value))

const visibleData = computed(() => posts.value.slice(0, 5))
console.log("处理后的数据：", visibleData);

const paddingTop = computed(() => start.value * store.GetPageClientHeight / 6)

const paddingBottom = computed(() => (total.value - end.value) * store.GetPageClientHeight / 6)

console.log(paddingTop, paddingBottom, '12');








const target = ref(null)
let observer
onMounted(async () => {


  // 页面加载时的逻辑 
  setTimeout(() => {
    fetchData()
    sawdw.value = true

  }, 100);








  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log(entries[0], '元素进入可视区域 ✅')
    } else {
      console.log(entries[0], '元素离开可视区域 ❌')
    }
  }, {
    root: null, // 观察相对整个视口
    threshold: 0.1 // 可见 10% 就算进入
  })
  console.log(observer, 'observer');

  if (target.value) observer.observe(target.value)
});

</script>











<style scoped>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.1s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}






.p-avatar-lg {
  width: 2rem;
  height: 2rem;
}








.content-container {
  padding: 1rem;
  max-width: 1200px;
  margin: 0.2rem auto 0;
  position: relative;

  /* transition:
    all 0.3s ease-out,
    transform 0.5s ease-in-out,
    padding 0.5s; */
}

.card-grid {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0 0 5rem;
  
  content-visibility: auto;  
  contain-intrinsic-size: 190px;
  
}

.post-card {
  position: relative;
  border-radius: 2rem;
  padding: 1.5rem;
  overflow: hidden;
  box-shadow: 2px 3px 5px rgba(33, 23, 2, 0.5);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  z-index: 1;
}

.card-txl {
  transform: translateX(5px);
}

/* 毛玻璃效果背景 */
.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: rgba(25, 25, 25, 0.2); */
  background: rgb(51 48 48);
  /* backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); */
  border-radius: 16px;
  z-index: -1;
}

/* 为每个卡片添加不同的色调效果 */
.post-card::before {}

.post-card:hover {
  transform: translateY(-5px);
}

.post-card:hover::before {
  opacity: 0.8;
}

/* 添加边框效果增强毛玻璃质感 */
.post-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  pointer-events: none;
  z-index: 2;
}

.card-header {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 3;
  justify-content: space-between;
}

.post-avatar {
  background-color: rgba(255, 255, 255, 0.9);
  color: #4361ee;
  margin-right: 0rem;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.post-author {
  font-weight: 600;
  margin-right: auto;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
}

.post-time {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.875rem;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
}

.itmeacer {
  color: rgba(255, 255, 255, 1);
  text-align: right;
  margin-left: 0.8rem;
  font-size: 0.7rem;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.2);
}

.card-content {
  margin-bottom: 1.25rem;
  position: relative;
  z-index: 3;
  max-width: 80%;
}

.post-title {
  display: bolck;
  width: 70%;
  height: 2rem;
  line-height: 2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  /* 将超出容器宽度的部分进行隐藏 */
  white-space: nowrap;
  /* 将文字的换行模式设置为 nowrap */
  font-size: 1.5rem;
  font-weight: 600;
  margin: auto 0rem;
  color: #fff;
  text-shadow: 0 1px 5px rgba(255, 255, 255, 0.3);
  transition:
    all 0.3s ease-out,
    transform 0.5s ease-in-out,
    padding 0.3s;
}

.post-text {
  color: rgba(255, 255, 255);
  line-height: 1.6;
  text-shadow: 0 1px 5px rgba(255, 255, 255, 0.3);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  transition:
    all 0.3s ease-out,
    transform 0.5s ease-in-out,
    padding 0.3s;
}

.card-footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  z-index: 3;
  color: #fff;
  flex-wrap: wrap;
}

.reaction-btn {
  color: rgb(255, 255, 255) !important;
  background: rgba(2, 2, 2, 0.7) !important;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 1.5rem;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease;
  transform: scale(0.9);
  transform-origin: center;
  min-width: 80px;

}

.card-btns {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 60px;
}

.avateraxer {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 auto;

  border: 1px solid rgba(255, 255, 255, 0.3) !important;
}

.reaction-btn:hover {
  color: #4361ee;
  background: rgba(22, 22, 22, 0.7) !important;

}

.reaction-btn:active {
  transform: scale(0.8);
}

.card-www {
  display: flex;
  flex: 1;
  height: 40px;
  align-items: center;
  justify-content: flex-end;
  transform: scale(0.8);
  transform-origin: right;
}

/* 响应式设计 */
/* 小屏 */
@media (max-width: 768px) {
  .content-container {}

  .card-btns {
    grid-template-columns: 1fr 1fr;
  }

  .post-card {
    height: 190px;
  }

  .card-footer {
    display: grid;
    grid-template-columns: auto auto;
    height: 40px;
    transform: translateY(-5px);
  }
}

/* 中屏*/
@media (min-width: 769px) and (max-width: 949px) {
  .post-title {
    font-size: 1.8rem;
  }

  .card-btns {
    grid-template-columns: 1fr 1fr;
  }

  .card-content {
    font-size: 1.2rem;
  }

  .post-card {
    border-radius: 2rem;
    height: 220px;
  }

  .card-footer {
    flex-wrap: nowrap;
    transform: translateY(5px);
  }

  .reaction-btn {
    padding: 0.8rem 4.5rem;
  }
}

/* 大屏 */
@media (min-width: 950px) {
  .card-grid {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: .8rem;
  }

  .post-title {
    font-size: 1.4rem;
  }

  .card-content {
    font-size: 1rem;
  }

  .post-card {
    flex: 1;
    display: flex;
    border-radius: 2rem;
    flex-direction: column;
    justify-content: space-between;
    height: 225px;
  }

  .card-footer {
    display: flex;
    grid-template-columns: auto;
    flex-direction: column-reverse;
    gap: 0rem;
    transform: translateY(5px);
    justify-content: center;
    align-items: stretch;
  }

  .p-tabmenu-tablist {
    margin: 0 15px;
  }

  .reaction-btn {
    /* padding: 0.4rem 3.32rem; */
    transform: scale(1);
    transform-origin: center;
    /* width: 110px; */
  }

  .card-btns {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: .3rem;
  }

  .card-www {
    align-items: center;
    justify-content: flex-start;
    transform: scale(1);
    transform-origin: left;
    margin: 0 0 3px;
    width: 100%;
  }
}
</style>
