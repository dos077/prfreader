import { isNil, keys } from 'lodash'
import firebase from 'firebase/app'

import firestore from './async-firestore'

const convertObjectTimestampPropertiesToDate = (obj) => {
  const newObj = {}

  keys(obj)
    .filter(prop => obj[prop] instanceof Object)
    .forEach(prop => {
      if (obj[prop] instanceof firebase.firestore.Timestamp) {
        newObj[prop] = obj[prop].toDate()
      } else {
        convertObjectTimestampPropertiesToDate(obj[prop])
      }
    })

  return {
    ...obj,
    newObj
  }
}

export default (collectionPath) => {
  const read = async (id) => {
    const res = await (await firestore())
      .collection(collectionPath)
      .doc(id)
      .get()

    const data = res.exists ? res.data() : null

    if (isNil(data)) return null

    convertObjectTimestampPropertiesToDate(data)
    return { id, ...data }
  }

  const readAll = async (constraints = null) => {
    const collectionRef = (await firestore()).collection(collectionPath)
    let query = collectionRef

    if (constraints) {
      constraints.forEach(constraint => {
        query = query.where(...constraint)
      })
    }

    const formatResult = res =>
      res.docs.map(ref =>
        convertObjectTimestampPropertiesToDate({
          id: ref.id,
          ...ref.data()
        })
      )
    
    return formatResult(await query.get())
  }

  return { read, readAll }
}