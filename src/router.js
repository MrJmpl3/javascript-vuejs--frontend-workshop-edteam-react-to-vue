import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/registro",
      name: "register",
      component: () =>
        import(/* webpackChunkName: "register" */ "./views/Register.vue")
    },
    {
      path: "/especialidades",
      name: "specialities",
      component: () =>
        import(
          /* webpackChunkName: "specialities" */ "./views/Specialities.vue"
        )
    },
    {
      path: "/especialidades/:id",
      name: "speciality",
      component: () =>
        import(/* webpackChunkName: "speciality" */ "./views/Speciality.vue")
    },
    {
      path: "/cursos",
      name: "courses",
      component: () =>
        import(/* webpackChunkName: "courses" */ "./views/Courses.vue")
    },
    {
      path: "/cursos/:id",
      name: "course",
      component: () =>
        import(/* webpackChunkName: "course" */ "./views/Course.vue")
    },
    {
      path: "/profesores",
      name: "teachers",
      component: () =>
        import(/* webpackChunkName: "teachers" */ "./views/Teachers.vue")
    },
    {
      path: "/clase/:id",
      name: "fragment",
      component: () =>
        import(/* webpackChunkName: "fragment" */ "./views/Fragment.vue")
    },
    {
      path: "*",
      name: "404",
      component: () =>
        import(/* webpackChunkName: "404" */ "./views/Page404.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && to.name !== "register" && to.name !== "404") {
    const userLogged = localStorage.getItem("token");

    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!userLogged) {
      next({
        path: "/login"
      });
    } else {
      next(); // make sure to always call next()!
    }
  } else {
    next();
  }
});

export default router;
