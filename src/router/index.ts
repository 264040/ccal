import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router';
import { useIndextore } from '@/store/index' 
const Home = () => import('@/views/Home.vue');
const ContentView = () => import('@/components/ContentView.vue');
const BBSView = () => import('@/components/BBSView.vue');
const RankingView = () => import('@/components/RankingView.vue');



const Messages = () => import('@/views/Messages.vue');
const Collect = () => import('@/views/Collect.vue');
const Profile = () => import('@/views/Profile.vue');


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // 懒加载
    meta: {
      index: 0,
      showTop: true, // 显示顶部导航栏
      keepAlive: true // 需要缓存 
    }, // 添加索引，用于判断当前路由
    redirect: { name: 'ContentView' },
    children: [
      {
        path: 'ContentView', // 默认子路由  推荐页
        name: 'ContentView',
        meta: {
          keepAlive: true // 需要缓存 
        },
        component: ContentView,
        // 单个路由守卫写在路由的配置对象中，只能对当前路由起效,是对象中函数
        beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
          next()
        }
      },
      // 你可以在这里添加更多子路由
      {
        path: 'BBSView', // 论坛页
        name: 'BBSView',
        component: BBSView
      },
      {
        path: 'RankingView', // 排行页
        name: 'RankingView',
        component: RankingView
      }
    ]
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
    meta: { index: 1 }
  },
  {
    path: '/collect',
    name: 'Collect',
    component: Collect,
    meta: { index: 2 }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { index: 3 }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置 
    const store = useIndextore();

    return {
      top: store.GetScrollTopAcer,
      behavior: 'smooth',
    }
  }
});

router.beforeEach((to, from, next) => {
  const store = useIndextore();
  store.setScrollTopAcer(window.scrollY)
  store.setIsloading(true)
  next()

})
router.afterEach((to, from, failure) => {
  const store = useIndextore();
  setTimeout(() => store.setIsloading(false), 300)
})
export default router;