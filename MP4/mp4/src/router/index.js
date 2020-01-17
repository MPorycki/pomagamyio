import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projekty from '../views/Projekty.vue'
import MyProjekty from '../views/MyProjekty.vue'
import Ranking from '../views/Ranking.vue'
import Projekt from '../views/Projekt.vue'
import ProjektCreate from '../views/ProjektCreate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projekty',
    name: 'projekty',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Projekty
  },
  {
    path: '/myprojekty',
    name: 'myProjekty',
    component: MyProjekty
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking
  },
  {
    path: '/projekt',
    name: 'projekt',
    component: Projekt
  },
  {
    path: '/stworzprojekt',
    name: 'projekt',
    component: ProjektCreate
  }
]

const router = new VueRouter({
  routes
})

export default router
