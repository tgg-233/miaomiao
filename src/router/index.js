import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from 'router/movie'
import cinemaRouter from 'router/cinema'
import mineRouter from 'router/mine'

Vue.use(Router)

export default new Router({
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    {
      path: '/',
      redirect: '/movie'
    }
  ]
})
