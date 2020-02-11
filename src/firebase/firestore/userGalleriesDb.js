import GenericDB from './genericDb'

export default (userId) => GenericDB(`users/${userId}/galleries`)
