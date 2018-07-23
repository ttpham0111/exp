import Vue from 'vue'
import Router from 'vue-router'

import ExperienceList from '@/components/experiences/ExperienceList'
import Events from '@/components/experiences/events/Events'
import EventForm from '@/components/experiences/events/EventForm'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      redirect: { name: 'ExperienceList' }
    },
    {
      path: '/experiences',
      name: 'ExperienceList',
      component: ExperienceList
    },
    {
      path: '/experiences/:experienceId',
      redirect: { name: 'Events' }
    },
    {
      path: '/experiences/:experienceId/events',
      name: 'Events',
      component: Events,
      props: true
    },
    {
      path: '/experiences/:experienceId/events/new',
      name: 'EventForm',
      component: EventForm,
      props: true
    }
  ]
})
