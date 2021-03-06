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
        children: [
          {
            path: ':id',
            name: 'gedan',
            component: () =>
              import(/* webpackChunkName: "reconmend" */ '../views/gedan.vue'),
          },
        ],
      },
      {
        path: 'singers',
        name: 'singers',
        component: () =>
          import(/* webpackChunkName: "Singers" */ '../views/Singers.vue'),
        children: [
          {
            path: ':id&:src',
            name: 'singlist',
            component: () =>
              import(
                /* webpackChunkName: "reconmend" */ '../components/singers/singlist.vue'
              ),
          },
        ],
      },
      {
        path: 'rank',
        name: 'rank',
        component: () =>
          import(/* webpackChunkName: "Rank" */ '../views/Rank.vue'),
        children: [
          {
            path: ':id',
            name: 'ge',
            component: () =>
              import(/* webpackChunkName: "reconmend" */ '../views/gedan.vue'),
          },
        ],
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
