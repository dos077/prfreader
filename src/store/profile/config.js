import CollectionDB from '@/firebase/firestore/userProfileDb'

const loadCollectionDB = ({ rootState }) => {
  const { userId } = rootState.alias.current
  return CollectionDB(userId)
}

export default {
  loadCollectionDB
}
