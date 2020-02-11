export default () => ({
  set: (state, items) => {
    state.items = items
  },

  setCurrent: (state, item) => (state.current = item),

  setCreationPending: (state, status) => (state.creationPending = status)
})
