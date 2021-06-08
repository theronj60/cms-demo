export const state = () => ({
  isAuth: false,
  userName: 'user1234',
  password: 'password'
})

export const mutations = {
  LOG_IN(state) {
    state.isAuth = true
  },
  LOG_OUT(state) {
    state.isAuth = false
  }
}

export const actions = {
  logIn({commit, state, dispatch}, credentials) {
    if(state.userName === credentials.userName && state.password === credentials.password) {
      commit('LOG_IN', credentials)
    } else {
      dispatch('notifications/notify', {
        type: 'error',
        message: 'User name or password does not match records.'
      }, {
        root: true
      })
    }
  },
  logOut({commit}) {
    commit('LOG_OUT')
  }
}
