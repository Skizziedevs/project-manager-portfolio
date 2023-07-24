import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../views/Projects.vue'
import News from '../views/News.vue'
import Ecommerce from '../views/Ecommerce.vue'
import Home from '../views/Landing-page.vue'
import Blog from '../views/Blogs.vue'
const routes =[
    {path: '/', component: Home},
    {path: '/Projects', component: Projects},
    {path: '/News', component: News },
    {path: '/Ecommerce', component: Ecommerce},
    {path: '/Blogs', component: Blog}

]


const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router