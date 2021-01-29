import * as storage from './storage'
import * as types from './mutation-types'
import { axiosInstance } from '../../../boot/axios'

export const ActionDoLogin = ({ dispatch }, payload) => {
  return axiosInstance.post('auth/login', payload).then(res => {
    //dispatch('ActionSetUser', res.data.user)
    dispatch('ActionSetToken', res.data.access_token)
    dispatch('ActionLoadSession')
  })
}

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token)
  }

  const token = storage.getLocalToken()

  if (!token) {
    return Promise.reject(new Error('Token Inválido'))
  }

  dispatch('ActionSetToken', token)
  return dispatch('ActionLoadSession')
}

export const ActionLoadSession = ({ dispatch }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await axiosInstance.get('me')
      dispatch('ActionSetUser', data.data)
      resolve()
    } catch (err) {
      dispatch('ActionSignOut')
      reject(err)
    }
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  storage.setHeaderToken(payload)
  commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
  storage.setHeaderToken('')
  storage.deleteLocalToken()
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
}

export const ActionSaveUser = ({dispatch, commit}, payload) => {
  return services.auth.editUser({user: payload.id}, payload).then(res => {
    dispatch('ActionSetUser', res.data)
  })
}

export const ActionChangePassword = ({dispatch, commit}, payload) => {
  return services.auth.changePassword({user: payload.id}, payload).then(res => {
    dispatch('ActionSetUser', res.data)
  })
}
