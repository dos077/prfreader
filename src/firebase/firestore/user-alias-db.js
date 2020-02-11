import GenericDB from './generic-db'

export default class UserAliasDB extends GenericDB {
  constructor() {
    super('alias')
  }
}
