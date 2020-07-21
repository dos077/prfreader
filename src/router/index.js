import Vue from 'vue'
import VueRouter from 'vue-router'
import Notfound from '@/views/Notfound.vue'
import store from '@/store'

const aliasVerify = async (to, from, next) => {
  if (to.path === '/') return next()
  const { alias } = to.params
  if (alias == null) return next('/')
  if (alias === store.state.alias.id) {
    return next()
  }
  if (alias !== from.params.alias) {
    await store.dispatch('alias/read', alias)
    if (!store.state.alias.current || !store.state.alias.current.userId) return next('/')
  }
  next()
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/a/:alias/galleries',
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
    path: '/a/:alias/profolio',
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
    path: '/a/:alias/profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '@/views/Profile/Index.vue'),
      beforeEnter: aliasVerify
  },
  {
    path: '/a/:alias/',
    redirect: '/a/:alias/profile'
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
  base: process.env.BASE_URL,
  routes
})

export default router
