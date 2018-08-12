/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
window.Vue = require('vue');

import Router from './routes.js';
import App from './App.vue';
import Auth from './packages/auth/auth';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(Auth);

Router.beforeEach(
    (to, from, next) => {
        if (to.matched.some(record => record.meta.forVisitors)) {
            if (Vue.auth.isAuthenticate()) {
                next({
                    path: '/about'
                })
            } else next()
        } else if (to.matched.some(records => records.meta.forAuth)) {
            if ( ! Vue.auth.isAuthenticate()) {
                next({
                    path: '/login'
                })
            } else next()

        }
    }
);

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router: Router
});
