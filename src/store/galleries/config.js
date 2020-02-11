import CollectionDB from '@/firebase/firestore/userGalleriesDb'

const loadCollectionDB = ({ rootState }) => {
  const { userId } = rootState.alias.current
  return new CollectionDB(userId)
}

export default {
  loadCollectionDB
}
