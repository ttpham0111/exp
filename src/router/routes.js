import Auth from '@/components/auth/Auth'

import Explore from '@/components/explore/Explore'

import Experience from '@/components/experience/Experience'
import ExperienceForm from '@/components/experience/form/ExperienceForm'

import Express from '@/components/express/Express'

import Bookmarks from '@/components/bookmarks/Bookmarks'

// import ExperienceList from '@/components/experiences/ExperienceList'
// import Events from '@/components/experiences/events/Events'
// import EventForm from '@/components/experiences/events/EventForm'

export default [
  {
    path: '/',
    redirect: { name: 'Explore' }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/experience/new',
    name: 'ExperienceForm',
    component: ExperienceForm
  },
  {
    path: '/experience/:experienceId/edit',
    name: 'ExperienceFormEdit',
    component: ExperienceForm,
    props: true
  },
  {
    path: '/express',
    name: 'Express',
    component: Express
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: Bookmarks
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
