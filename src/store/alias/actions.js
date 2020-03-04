export default ({ loadCollectionDB }) => ({
  loadAlias: async ({ rootState, dispatch }) => {
    const { user } = rootState.authentication
    const collectionDB = loadCollectionDB({ rootState })
    const alias = await collectionDB.findAlias({ user })
    if (alias) return dispatch('read', alias)
    return null
  }
})
