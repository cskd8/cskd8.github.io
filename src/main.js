import { createApp } from 'vue'
import App from './App.vue'
import Main from './components/Main.vue'
import Works from './components/Works.vue'
import Achievements from './components/Achievements.vue'
import Profile from './components/Profile.vue'
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
