import buildModule from '@/store/buildModule'
import config from './config'

const { state, mutations, actions, getters } = buildModule(config)
state.collectionName = 'Galleries'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
