import store from '../store'

export default async (to, from, next) => {
  let routeName = to.title == undefined ? `APP` : `APP - ${to.title}`
  document.title = routeName

  if (to.name !== 'Login' && !store.getters['auth/hasToken']) {
    try {
      await store.dispatch('auth/ActionCheckToken')

      next({ name: to.name })
    } catch (err) {
      next({ name: 'Login' })
    }
  } else {
    if (to.name === 'login' && store.getters['auth/hasToken']) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
}
