import {createRouter, createWebHashHistory} from "vue-router";
import LoginRegisterPage from "../pages/LoginRegisterPage.vue";
import UsersPage from "../pages/UsersPage.vue";
import NoPageFound from "../pages/NoPageFound.vue";
import {apiClient} from "../api/chatggapi.js";
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

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


const userCanAccess = async () => {

  // return new Promise(async resolve => {
  //
  //   const token = localStorage.getItem('token')
  //
  //   if (!token) {
  //     resolve(false)
  //   } else {
  //     const {data} = await apiClient.post('/auth/checktoken', {token})
  //     console.log('respuesta')
  //     console.log(data)
  //     resolve( data.tokenValid )
  //   }
  // })

    const token = localStorage.getItem('token')

    if (!token) return false

    const {data} = await apiClient.post('/auth/checktoken', {token})

    return data.tokenValid


}

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await userCanAccess()
  if (to.name !== 'loginPage' && !isAuthenticated) next({name: 'loginPage'})
  else next()
})

export default router