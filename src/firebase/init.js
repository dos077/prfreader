import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: process.env.VUE_APP_FBKEY,
  authDomain: process.env.VUE_APP_FBDOMAIN,
  databaseURL: process.env.VUE_APP_FBDBURL,
  projectId: process.env.VUE_APP_FBPID,
  storageBucket: process.env.VUE_APP_FBBUCKET,
  messagingSenderId: process.env.VUE_APP_FBMSID
}

firebase.initializeApp(config)
