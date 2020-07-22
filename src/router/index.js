import Vue from 'vue'
import VueRouter from 'vue-router'
import Notfound from '@/views/Notfound.vue'
import Verify from '@/views/Verify.vue'
import store from '@/store'

const aliasVerify = async (to, from, next) => {
  if (to.meta && to.meta.verifyNotRequired) return next()
  const { alias } = to.params
  if (alias == null) return next('/')
  const { current } = store.state.alias
  if (current && alias === current.id) {
    return next()
  }
  next(`/verify?redirectUrl=${to.path}&alias=${alias}`)
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
    path: '/verify',
    component: Verify,
    meta: {
      verifyNotRequired: true
    }
  },
  {
    path: '/',
    name: 'noalias',
    component: Notfound,
    meta: {
      verifyNotRequired: true
    }
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
