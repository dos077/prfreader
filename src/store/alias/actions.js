export default ({ loadCollectionDB }) => ({
  createAlias: async ({ rootState, commit }, newAlias) => {
    const alias = newAlias.replace(/[^\w]/gi, '')
    const { user } = rootState.authentication
    commit('setCreationPending', true)

    try {
      const collectionDB = loadCollectionDB({ rootState })
      const created = await collectionDB.createAlias({ alias, user })
      commit('setCurrent', created)
    } catch (e) {
      commit('setCreationPending', false)
      throw e
    }

    commit('setCreationPending', false)
  },
  loadProfile: async ({ rootState, dispatch }) => {
    const { user } = rootState.authentication
    const collectionDB = loadCollectionDB({ rootState })
    const alias = await collectionDB.findAlias({ user })
    if (alias) return dispatch('read', alias)
    return null
  },
  changeAlias: async ({ rootState, commit }, { to, from }) => {
    const alias = to.replace(/[^\w]/gi, '')
    if (alias === from) throw Error('No change detected')
    commit('addUpdatePending', from)

    try {
      const collectionDB = loadCollectionDB({ rootState })
      const changed = await collectionDB.changeAlias({ from, to: alias })
      commit('setCurrent', changed)
    } catch (e) {
      commit('removeUpdatePending', from)
      throw e
    }

    commit('removeUpdatePending', from)
  }
})
