require('./bootstrap');
import Vue from 'vue'
import App from './App.vue';
import Router from './routes.js';
import Auth from './packages/auth/auth';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(Auth);

Router.beforeEach(
    (to, from, next) => {
        if (to.matched.some(record => record.meta.forVisitors)) {
            if (Vue.auth.isAuthenticate() === true) {
                next({
                    path: '/about'
                })
            } else next()
        } else if (to.matched.some(records => records.meta.forAuth)) {
            if (Vue.auth.isAuthenticate() != true) {
                next({
                    path: '/login'
                })
            } else next()

        }
    }
);

new Vue({
    el: '#app',
    render: h => h(App),
    router: Router
});