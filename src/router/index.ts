import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/login.vue';

// 首次必然要加载的路由
const constRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
];

// 所有路由
let routes:Array<RouteRecordRaw> = [];

// 自动添加router目录下的所有ts路由模块
const files = require.context('./', false, /\.ts$/);
files.keys().forEach((route) => {
  // 如果是根目录的 index.js、 不做任何处理
  if (route.startsWith('./index')) {
    return;
  }
  const routerModule = files(route);
  // 兼容 import export 和 require module.export 两种规范 ES modules commonjs
  routes = [...constRoutes, ...(routerModule.default || routerModule)];
});

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
