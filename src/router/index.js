import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../views/CV.vue'
import AboutMe from '../views/AboutMe.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV
  },
  {
    path: 'about_me',
    name: 'aboutMe',
    component: AboutMe
  }
]

const router = new VueRouter({
  routes
})

export default router
