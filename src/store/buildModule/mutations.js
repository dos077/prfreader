export default () => ({
  set: (state, items) => {
    state.items = items
  },

  setCurrent: (state, item) => (state.current = item),

  setCreationPending: (state, status) => (state.creationPending = status),


  setName: (state, name) => (state.collectionName = name),
  
  setColor: (state, color) => (state.color = color),
})
