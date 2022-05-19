import { createRouter, createWebHistory } from 'vue-router'
import Home from "../View/Home.vue"
import NotFound from "../View/NotFound.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../View/Login.vue')
  },
  {
    path: '/Comic',
    name: 'Comic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../View/Comic.vue')
  },
  {
    path: '/Profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../View/Profile.vue'),
    /* meta: {
      requiresAuth: true
    } */
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const VueRouter = createRouter({
  history: createWebHistory(),
  routes,
});

VueRouter.beforeEach((to, from, next) => {
  if (to.matched.some(destinoRequiereAuth => destinoRequiereAuth.meta.requiresAuth)) {
    if (localStorage.getItem('token')) {
      next();
    } else {
      next({
        path: '/Login'
      });
    }
  }
  else {
    next();
  }
})

export default VueRouter;