// 引入axios
import axios from 'axios'

const http = axios.create({
    // 默认的接口地址
    baseURL: '/api',
    timeout: 20000
})

// 请求拦截
http.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
// 响应拦截
http.interceptors.response.use(function (response) {
    return response;
  }, function (error) {

  });

export default http
