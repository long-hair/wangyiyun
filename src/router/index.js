import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    redirect: '/reconmend',
    children: [
      {
        path: 'reconmend',
        name: 'reconmend',
        component: () =>
          import(/* webpackChunkName: "reconmend" */ '../views/Reconmend.vue'),
      },
      {
        path: 'singers',
        name: 'singers',
        component: () =>
          import(/* webpackChunkName: "Singers" */ '../views/Singers.vue'),
      },
      {
        path: 'rank',
        name: 'rank',
        component: () =>
          import(/* webpackChunkName: "Rank" */ '../views/Rank.vue'),
      },
    ],
  },
  {
    path: '**',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
