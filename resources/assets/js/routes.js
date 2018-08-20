import Vue from "vue";
import VueRouter from 'vue-router';

import HomePage from "./components/pages/HomePages.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Login from "./components/authentication/Login.vue";
import Feed from './components/Feed.vue';

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
            path: "/login",
            component: Login,
            meta: {
                forVisitors: true
            }

        },
        {
            path: "/dashboard",
            component: Dashboard,
            meta: {
                forAuth: true
            }

        },
    ],

    linkExactActiveClass : 'active'
});

export default router