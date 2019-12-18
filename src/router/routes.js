const routes = [{
  path: '/',
  name: 'main',
  component: () => import('@/screen/Main')
}, {
  path: '/1',
  name: '1',
  component: () => import('@/screen/Section1')
}, {
  path: '/2',
  name: '2',
  component: () => import('@/screen/Section2')
}, {
  path: '/3',
  name: '3',
  component: () => import('@/screen/Section3')
}, {
  path: '/4',
  name: '4',
  component: () => import('@/screen/Section4')
}, {
  path: '/5',
  name: '5',
  component: () => import('@/screen/Section5')
}, {
  path: '/bookmark',
  name: 'bookmark',
  component: () => import('@/screen/Bookmark')
}]

export default routes

