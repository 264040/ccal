import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Messages from '@/views/Messages.vue';
import Profile from '@/views/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { index: 1 } // 添加索引，用于判断动画方向
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
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
  routes
});

export default router;