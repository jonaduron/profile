import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Profile from '../views/Profile.vue'
import Contact from '../views/Contact.vue'
import Portfolio from '../views/Portfolio.vue'
import Blog from '../views/Blog.vue'

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
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }
]

const router = new VueRouter({
  routes
})

export default router
