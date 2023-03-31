import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from "@/views/GameView.vue";
import ConnexionView from "@/views/ConnexionView.vue";
import InscriptionView from "@/views/InscriptionView.vue";
import ProductViewCompare from "@/views/CompareView.vue";
import CompareViewPage from "@/views/CompareViewPage.vue";
import UserView from "@/views/UserView.vue";

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
    path: "/registration",
    name: "inscription",
    component: InscriptionView
  },
  {
    path: "/compare",
    name: "compare",
    component: ProductViewCompare
  },
  {
    path: "/compare/:idJ1/:idJ2",
    name: "compareId",
    component: CompareViewPage
  },
  {
    path: "/profil",
    name: "user",
    component: UserView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
