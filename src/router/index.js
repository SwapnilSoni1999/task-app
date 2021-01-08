import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { authReq: false }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => {
        return import(/* webpackChunkName: "login" */ '../views/Login.vue')
      },
      meta: { authReq: false }
    },
    {
      path: '/post',
      name: 'Posts',
      component: () => { 
        return import(/* webpackChunkName: "posts" */ '../views/Posts.vue')
      },
      meta: { authReq: true }
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: function () {
    //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
    //   }
    // }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log('Requres auth?', to.meta.authReq, 'is Authenticated?', store.getters.isAuth)
  if (to.matched.some(record => record.meta.authReq)) {
    // console.log('Requires auth')
    if (!store.getters.isAuth) {
      // console.log('not auth')
      next({ name: 'Login' })
    }
    else {
      // console.log('is AUTH')
      next()
    }
  } else {
    next()
  }
})

export default router
