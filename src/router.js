import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import work from '@/components/work'
import profile from '@/components/profile'
import achievement from '@/components/achievement'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: main
        },
        {
            path: '/works',
            name: 'works',
            component: work
        },
        {
            path: '/profile',
            name: 'profile',
            component: profile
        },
        {
            path: '/achievements',
            name: 'achievements',
            component: achievement
        }
    ]
})
