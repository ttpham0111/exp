import Vue from 'vue'
import Router from 'vue-router'

import DefaultToolbar from '@/components/Toolbar'

import Explore from '@/components/explore/Explore'
import ExploreToolbar from '@/components/explore/Toolbar'

import Experience from '@/components/experience/Experience'
import ExperienceForm from '@/components/experience/ExperienceForm'

import Express from '@/components/express/Express'

import Bookmarks from '@/components/bookmarks/Bookmarks'

// import ExperienceList from '@/components/experiences/ExperienceList'
// import Events from '@/components/experiences/events/Events'
// import EventForm from '@/components/experiences/events/EventForm'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      redirect: { name: 'Explore' }
    },
    {
      path: '/explore',
      name: 'Explore',
      components: {
        toolbar: ExploreToolbar,
        content: Explore
      }
    },
    {
      path: '/experience',
      name: 'Experience',
      components: {
        toolbar: DefaultToolbar,
        content: Experience
      }
    },
    {
      path: '/experience/new',
      name: 'ExperienceForm',
      components: {
        toolbar: DefaultToolbar,
        content: ExperienceForm
      }
    },
    {
      path: '/experience/:experienceId/edit',
      name: 'ExperienceFormEdit',
      components: {
        toolbar: DefaultToolbar,
        content: ExperienceForm
      },
      props: {
        toolbar: false,
        content: true
      }
    },
    {
      path: '/express',
      name: 'Express',
      components: {
        toolbar: DefaultToolbar,
        content: Express
      }
    },
    {
      path: '/bookmarks',
      name: 'Bookmarks',
      components: {
        toolbar: DefaultToolbar,
        content: Bookmarks
      }
    }
    // {
    //   path: '/experiences/:experienceId',
    //   redirect: { name: 'Events' }
    // },
    // {
    //   path: '/experiences/:experienceId/events',
    //   name: 'Events',
    //   component: Events,
    //   props: true
    // },
    // {
    //   path: '/experiences/:experienceId/events/new',
    //   name: 'EventForm',
    //   component: EventForm,
    //   props: true
    // }
  ]
})
