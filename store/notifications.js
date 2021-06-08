export const state = () => ({
  // 3 default types, '' <- empty string is info.
  // 'danger' <- red, danger
  // 'success' <- green, success
  show: false,
  type: null,
  message: null,
})

export const mutations = {
  SET_ALERT(state, alert) {
    state.type = alert.type
    state.message = alert.message
    state.show = true
  },
  CLEAR_ALERT(state) {
    state.show = false
    state.type = null
    state.message = null
  },
}

// Example use:
// const alert = {
//   type: type,
//   message: message,
// }
// this.$store.dispatch('alert/setAlert', alert)
// for calling this in another store module, add {root: true} to dispatch
// dispatch('alert/setAlert', alert, { root: true }) <- from another module/action

// Another example
// dispatch(
//   'alert/setAlert',
//   { type: 'success', message: 'Labor Updated' },
//   { root: true }
// )

export const actions = {
  notify({ commit }, alert) {
    commit('SET_ALERT', alert)
    setTimeout(() => {
      commit('CLEAR_ALERT')
    }, 3000)
  },
}
