import Vue from "vue";
import Router from "vue-router";
import ProductsIndex from "./views/ProductsIndex.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import ProductsNew from "./views/ProductsNew.vue";
import ProductsShow from "./views/ProductsShow.vue";
import ProductsEdit from "./views/ProductsEdit.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "products-index",
      component: ProductsIndex
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/new", name: "products-new", component: ProductsNew },
    { path: "/products/:id", name: "products-show", component: ProductsShow },
    { path: "/products/:id", name: "products-edit", component: ProductsEdit }
  ]
});
