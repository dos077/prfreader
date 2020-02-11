export default ({ loadCollectionDB }) => {
  /**
   * Fetch of current route alias
   */
  return {
    getAll: async ({ rootState, commit }) => {
      const collectionDB = loadCollectionDB({ rootState })

      const items = await collectionDB.readAll()
      commit('set', items)
    },

    read: async ({ rootState, commit }, id) => {
      commit('setCreationPending', true)
      const collectionDB = loadCollectionDB({ rootState })

      const item = await collectionDB.read(id)
      commit('setCurrent', item)
      commit('setCreationPending', false)
    },

  }
}
