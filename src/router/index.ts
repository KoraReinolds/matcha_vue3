import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "@/views/Home.vue"
import store from "@/store"
import circularReveal from "@/animation/circularReveal"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth",
    name: "Auth",
    component: () =>
      import("@/views/Auth.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(async (to: any, from: any, next: any) => {

  await circularReveal({ coords: store.state.coords })
  
  next()

})

export default router
