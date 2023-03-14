import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from "@/views/GameView.vue";
import ConnexionView from "@/views/ConnexionView.vue";
// import ProductView from '../components/Products.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/product/:id",
    name: "GameView",
    component: GameView
  },
  {
    path: "/auth",
    name: "connexion",
    component: ConnexionView
  },
  {
    path: "/auth/login",
    name: "authentification",
    component: ConnexionView
  },
  {
    path: "/compare/:idJ1/:idJ2",
    name: "compare",
    component: 'ici'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
