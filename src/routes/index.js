import { createRouter, createWebHistory } from 'vue-router'
import Home from "../View/Home.vue"
import NotFound from "../View/NotFound.vue"
import Comic from "../View/Comic"
import Login from "../View/Login"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
     meta: {
      requiresAuth: true
    }  
  },
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
  {
    path: '/Comic',
    name: 'Comic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Comic,
     meta: {
      requiresAuth: true
    }  
  },
  {
    path: '/Profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../View/Profile.vue'),
    /*   */
  },
  {
    path: '/Consume',
    name: 'Consume',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../View/Consume.vue'),
    /*   */
    meta: {
      requiresAuth: true
    }  
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