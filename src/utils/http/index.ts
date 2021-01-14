import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // 如跨域请求时要带上cookie,则设置为true
  timeout: 1000 * 5, // 请求超时时长 5秒
});

http.interceptors.request.use(
  (config) => {
    if (config.method === 'post') {
      // 按需添加内容
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response) => {
    // 如果返回的状态不是200 就报错 按需修改
    if (response.status && response.status !== 200) {
      return Promise.reject(new Error('错误'));
    }
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default http;
