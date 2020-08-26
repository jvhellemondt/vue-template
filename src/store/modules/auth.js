import api from '@/api/auth'
import router from '@/router'

const localStoragePath = 'jwt_token'
const defaultThunkState = {
  pending: false,
  rejected: false,
  fulfilled: false,
  done: false,
}

const state = {
  thunk: defaultThunkState,
  token: window.localStorage.getItem(localStoragePath),
}

const getters = {
  isPending: state => !state.thunk.pending,
  isLoggedIn: state => !!state.token,
}

const actions = {
  login: async ({ commit }) => {
    let response
    commit('toggleThunk', { ...defaultThunkState, pending: true })
    try {
      response = await api.login()
    } catch (err) {
      commit('toggleThunk', {
        ...defaultThunkState,
        rejected: true,
        done: true,
      })
      console.log('Login failure')
      console.log(err)
    }
    const { access_token } = response?.data
    commit('toggleThunk', {
      ...defaultThunkState,
      fulfilled: true,
      done: true,
    })
    commit('setToken', access_token)
    window.localStorage.setItem(localStoragePath, access_token)
    router.push('/').catch(() => {})
  },
  logout: ({ commit }) => {
    commit('toggleThunk', { ...defaultThunkState, pending: false })
    commit('setToken', null)
    window.localStorage.removeItem(localStoragePath)
  },
}

const mutations = {
  setToken(state, token) {
    state.token = token
  },
  toggleThunk(state, to) {
    state.thunk = { ...state.thunk, ...to }
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
