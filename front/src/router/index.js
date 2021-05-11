import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/ShowPosts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Show_Posts',
    component: Home
  },
  {
    path: '/newPost',
    name: 'New_Post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewPost.vue')
  },
  {
    path: '/editPost/:id',
    name: 'Edit_Post',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditPost.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
