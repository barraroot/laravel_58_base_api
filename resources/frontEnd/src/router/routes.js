import { routes as home } from '../modules/home'
import { routes as auth } from '../modules/auth'

export default [
  ...auth,
  ...home
]
