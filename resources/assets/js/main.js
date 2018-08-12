require('./bootstrap');
import Vue from 'vue'
import App from './App.vue';
import Router from './routes.js';
import VueResource from 'vue-resource';
import Auth from './packages/auth/auth';

Vue.use(Auth);
Vue.use(VueResource);

Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken();

Router.beforeEach(
    (to, from, next) => {
        if (to.matched.some(record => record.meta.forVisitors)) {
            if (Vue.auth.isAuthenticate() === true) {
                next({
                    path: '/feed'
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