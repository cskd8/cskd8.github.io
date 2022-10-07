import { createApp } from 'vue'
import App from './App.vue'
import Main from './pages/Main.vue'
import Works from './pages/Works.vue'
import Achievements from './pages/Achievements.vue'
import Profile from './pages/Profile.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: Main },
  { path: '/profile', component: Profile },
  { path: '/works', component: Works },
  { path: '/achievements', component: Achievements }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
