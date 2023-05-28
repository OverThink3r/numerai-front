import {createRouter, createWebHashHistory} from "vue-router";
import LoginRegisterPage from "../pages/LoginRegisterPage.vue";
import UsersPage from "../pages/UsersPage.vue";
import NoPageFound from "../pages/NoPageFound.vue";
import {apiClient} from "../api/chatggapi.js";
import ChatPage from "../pages/ChatPage.vue";
import Index from "../pages/Index.vue"
const routes = [
  {
    path: '/auth/login',
    name: 'loginPage',
    component: LoginRegisterPage
  },
  {
    path: '/users',
    name: 'usersPage',
    component: UsersPage
  },
  {
    path: '/:pathMatch(.*)*',
    component: NoPageFound
  },
  {
    path: '/chat',
    name: 'chatPage',
    component: ChatPage,
  },

  {
    path: '/',
    name: 'index',
    component: Index,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


const userCanAccess = async () => {

    const token = localStorage.getItem('token')

    if (!token) return false

    const {data} = await apiClient.post('/auth/checktoken', {token})

    return data.tokenValid


}

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await userCanAccess()
  if (!['loginPage', 'index'].includes(to.name) && !isAuthenticated) next({name: 'loginPage'})
  else next()
})

export default router