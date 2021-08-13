import { lazy } from 'react'

const Locations = lazy(() => import('../../app/locations'))

export const routes = [
  {
    path: '/locations',
    component: Locations,
    exact: true,
    isPublic: true
  }
]
