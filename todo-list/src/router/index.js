import { createRouter, createWebHistory } from 'vue-router'
import CompletedList from '../views/CompletedList.vue'
import InProgressList from '../views/InProgressList.vue'
import RemovedList from '../views/RemovedList.vue'

const routes = [
  {
    path: '/',
    name: 'inprogress',
    component: InProgressList
  },
  {
    path: '/completed',
    name: 'completed',
    component: CompletedList
  },
  {
    path: '/removed',
    name: 'removed',
    component: RemovedList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
