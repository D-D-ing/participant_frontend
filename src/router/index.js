import Vue from 'vue'
import Router from 'vue-router'
import Event from '@/components/Event'
import Welcome from '@/components/Welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/event/:eventName/:slideId',
      name: 'Event',
      component: Event
    },
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    }
  ]
})
