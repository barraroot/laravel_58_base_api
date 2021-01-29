import axios from 'axios'
import store from '../store'
import * as storage from '../modules/auth/store/storage'
import Vue from 'vue'

const axiosInstance = axios.create({
  //baseURL: 'http://127.0.0.1:8000/api/'
  //baseURL: '/api/'
  //baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/api/' : 'https://app.sharkpagamentos.com.br/api/'
  baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/api/' : '/api/'
})

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  if(store.getters['auth/hasToken']) {
    if(config.url.indexOf('https://viacep.com.br/') < 0) {
      let token = storage.getLocalToken()
      config.headers.common['Authorization'] = `Bearer ${token}`
    }
  }
  //console.log(config)
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  if(response.data.status !== undefined) {
    console.log(response.data.status)
    if(response.data.status === 'Token is Expired') {
      window.location = '#/login'
    }
  }
  return response;
}, function (error) {
  console.log(error)
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export { axiosInstance }
