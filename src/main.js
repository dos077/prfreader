import Vue from 'vue'
import App from './App.vue'
// import "./registerServiceWorker"
import router from './router'
import store from './store'
import '@/firebase/init'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    if (sessionStorage.redirect) {
      const { redirect } = sessionStorage
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  },
}).$mount('#app')
