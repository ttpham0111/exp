import Auth from '@/components/auth/Auth'

import Explore from '@/components/explore/Explore'

import Experience from '@/components/experience/Experience'
import ExperienceForm from '@/components/experience/form/ExperienceForm'

import Express from '@/components/express/Express'

import Favorites from '@/components/favorites/Favorites'

export default [
  {
    path: '/',
    redirect: { name: 'Explore' }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    props: true
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
    meta: { requiresAuth: true }
  },
  {
    path: '/experience/new',
    name: 'ExperienceForm',
    component: ExperienceForm,
    meta: { requiresAuth: true }
  },
  {
    path: '/experience/:experienceId/edit',
    name: 'ExperienceFormEdit',
    component: ExperienceForm,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/express',
    name: 'Express',
    component: Express,
    meta: { requiresAuth: true }
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
    meta: { requiresAuth: true }
  }
]
