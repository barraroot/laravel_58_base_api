import Vue from 'vue'

const varsInstance = {
  baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/' : 'https://app.sharkpagamentos.com.br/'
}

export default ({ Vue }) => {
  Vue.prototype.$vars = varsInstance
}
