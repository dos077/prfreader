import CollectionDB from '@/firebase/firestore/userAliasDb'

const loadCollectionDB = () => {
  return new CollectionDB()
}

export default {
  loadCollectionDB
}
