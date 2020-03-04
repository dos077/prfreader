import buildModule from '@/store/buildModule'
import config from './config'

const { state, mutations, actions, getters } = buildModule(config)

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
