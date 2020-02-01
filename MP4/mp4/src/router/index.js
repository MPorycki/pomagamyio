import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projekty from '../views/Projekty.vue'
import MyProjekty from '../views/MyProjekty.vue'
import Ranking from '../views/Ranking.vue'
import Projekt from '../views/Projekt.vue'
import ProjektCreate from '../views/ProjektCreate.vue'
import ProjektEdit from '../views/ProjektEdit.vue'
import KomCreate from '../views/KomCreate.vue'
import KomEdit from '../views/KomEdit.vue'
import ParticipantAdd from '../views/ParticipantAdd.vue'
import ParticipantEdit from '../views/ParticipantEdit.vue'
import Logowanie from '../views/Logowanie.vue'
import Rejestracja from '../views/Rejestracja.vue'

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
    name: 'projektcreate',
    component: ProjektCreate
  },
  {
    path: '/edytujprojekt',
    name: 'projektedit',
    component: ProjektEdit
  },
  {
    path: '/skomentuj',
    name: 'komentarz',
    component: KomCreate
  },
  {
    path: '/edytujKomentarz',
    name: 'edytujKomentarz',
    component: KomEdit
  },
  {
    path: '/participantAdd',
    name: 'participantAdd',
    component: ParticipantAdd
  },
  {
    path: '/participantEdit',
    name: 'participantEdit',
    component: ParticipantEdit
  },
  {
    path: '/logowanie',
    name: 'logowanie',
    component: Logowanie
  },
  {
    path: '/rejestracja',
    name: 'rejestacja',
    component: Rejestracja
  }

]

const router = new VueRouter({
  routes
})

export default router
