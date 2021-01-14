import { createStore } from 'vuex';

interface IModule {
  [key: string]: { namespaced: boolean }
}

// 自动添加mudules下的所有ts模块
const modules: IModule = {};
const files = require.context('./modules', false, /\.ts$/);
files.keys().forEach((key) => {
  const moduleKey = key.replace(/(\.\/|\.ts)/g, '');
  modules[moduleKey] = files(key).default;
  modules[moduleKey].namespaced = true; // 让 mutations、getters、actions 也按照模块划分
});

// 无需使用模块或者是一些通用的状态写在下方
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules,
});
