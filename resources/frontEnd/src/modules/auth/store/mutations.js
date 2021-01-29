import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.SET_USER] (state, payload) {
    //payload['nascimento'] = Vue.moment(payload['nascimento']).format('YYYY-MM-DD')
    //payload['expiracao'] = Vue.moment(payload['expiracao']).format('YYYY-MM-DD')
    state.user = payload
  },
  [types.SET_TOKEN] (state, payload) {
    state.token = payload
  }
}
