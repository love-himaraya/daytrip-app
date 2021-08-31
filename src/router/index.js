import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Start from "../views/Start.vue"
import Select from "../views/Select.vue"
import End from "../views/End.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/start",
    name: "Start",
    component: Start,
  },
  {
    path: "/select",
    name: "Select",
    component: Select,
  },
  {
    path: "/end",
    name: "End",
    component: End,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
