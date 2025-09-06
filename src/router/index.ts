import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'), // 懒加载
    meta: { index: 0 }, // 添加索引，用于判断当前路由
    redirect: {name: 'ContentView'},
    children: [
      {
        path: 'ContentView', // 默认子路由  推荐页
        name: 'ContentView',
        component: () => import('@/components/ContentView.vue') // 懒加载
      },
      // 你可以在这里添加更多子路由
      {
        path: 'BBSView', // 论坛页
        name: 'BBSView',
        component: () => import('@/components/BBSView.vue') // 懒加载
      },
      {
        path: 'RankingView', // 排行页
        name: 'RankingView',
        component: () => import('@/components/RankingView.vue') // 懒加载
      } 
    ]
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import('@/views/Messages.vue'), // 懒加载
    meta: { index: 1 }
  }, 
  {
    path: '/collect',
    name: 'Collect',
    component: () => import('@/views/Collect.vue'), // 懒加载
    meta: { index: 2 }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue'), // 懒加载
    meta: { index: 3 }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;