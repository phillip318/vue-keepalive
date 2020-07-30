const Home = () => import('@/pages/home')
const Agent = () => import('@/pages/agent')
const Detail = () => import('@/pages/detail')

export default [
  {
    path: '',
    component: Home,
    name: 'Home',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/agent',
    name: 'Agent',
    component: Agent,
    meta: {
      title: '代理商'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '详情'
    }
  },
]