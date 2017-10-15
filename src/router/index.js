import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Feed from '@/components/Feed'
import People from '@/components/People'
import LoginApp from '@/components/LoginApp'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    },
    {
      path: '/people',
      name: 'People',
      component: People
    },
    {
      path: '/',
      name: 'LoginApp',
      component: LoginApp
    }
  ]
})
