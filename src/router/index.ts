import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/home.vue';
import About from '@/views/about.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
    ],
})

export default router
