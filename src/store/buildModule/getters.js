import { find } from 'lodash'

export default () => ({
  /**
   * Get  by id
   */
  getById: state => id => find(state.items, i => i.id === id)
})
