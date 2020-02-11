import Vue from 'vue'
import VueRouter from 'vue-router'
import Notfound from '@/views/Notfound.vue'
import store from '@/store'

const aliasVerify = async (to, from, next) => {
  if (to.path === '/') next()
  const { alias } = to.params
  if (alias == null) next('/')
  if (alias === store.state.alias.id) {
    next()
  }
  if (alias !== from.params.alias) {
    await store.dispatch('alias/read', alias)
    if (!store.state.alias.current || !store.state.alias.current.userId) next('/')
  }
  next()
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/:alias/galleries',
    component: () =>
      import(/* webpackChunkName: "gallery" */ '@/views/Gallery/Index.vue'),
    beforeEnter: aliasVerify,
    children: [
      {
        path: '',
        component: () =>
          import(/* webpackChunkName: "gallery" */ '@/views/Gallery/Landing.vue')
      },
      {
        path: ':gid',
        component: () =>
          import(/* webpackChunkName: "gallery" */ '@/views/Gallery/Show.vue')
      }
    ]
  },
  {
    path: '/:alias/profolio',
    component: () =>
      import(/* webpackChunkName: "profolio" */ '@/views/Profolio/Index.vue'),
    beforeEnter: aliasVerify,
    children: [
      {
        path: '',
        component: () =>
          import(/* webpackChunkName: "profolio" */ '@/views/Profolio/Landing.vue')
      },
      {
        path: ':pid',
        component: () =>
          import(/* webpackChunkName: "profolio" */ '@/views/Profolio/Show.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'noalias',
    component: Notfound
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
