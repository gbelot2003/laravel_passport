import Vue from "vue";
import VueRouter from 'vue-router';

import HomePage from "./components/pages/HomePages.vue";
import Login from "./components/authentication/Login.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Register from "./components/authentication/Register.vue";
import About from './components/pages/About.vue';
import Feed from './components/Feed.vue';
import Edit from './components/product/Edit';
import Contact from './components/Contact.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: HomePage,
            meta:{
                forVisitors: true
            }
        },
        {
            path: "/feed",
            component: Feed,
            meta:{
                forAuth: true
            }
        },
        {
            path: "/dashboard",
            component: Dashboard,
            meta:{
                forAuth: true
            }
        },
        {
            path: "/products/create",
            component: require('./components/product/Create'),
            meta:{
                forAuth: true
            }
        },
        {
            path: "/products/:product/edit",
            component: Edit,
            meta:{
                forAuth: true
            }
        },

        {
            path: "/about",
            component: About,
            meta:{
                forAuth: true
            }
        },

        {
            path: "/login",
            component: Login,
            meta: {
                forVisitors: true
            }

        },
        {
            path: "/register",
            component: Register,
            meta: {
                forAuth: true
            }
        },
        {
            path: "/contact",
            component: Contact,
            meta: {
                forVisitors: true
            }

        },
    ],

    linkExactActiveClass : 'active'
});

export default router