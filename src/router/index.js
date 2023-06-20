import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import V1 from '../views/01.vue'
import V2 from '../views/02.vue'
import V3 from '../views/03.vue'
import V4 from '../views/04.vue'
import V5 from '../views/05.vue'
import V6 from '../views/06.vue'
import V7 from '../views/07.vue'
import V8 from '../views/08.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/01',
            component: V1
        },
        {
            path: '/02',
            component: V2
        },
        {
            path: '/03',
            component: V3
        },
        {
            path: '/04',
            component: V4
        },
        {
            path: '/05',
            component: V5
        },
        {
            path: '/06',
            component: V6
        },
        {
            path: '/07',
            component: V7
        },
        {
            path: '/08',
            component: V8
        },
    ],
})

export default router