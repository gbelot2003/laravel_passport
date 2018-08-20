require('./bootstrap');
import Vue from 'vue'
import App from './App.vue';
import Vuex from 'vuex';
import Router from './routes.js';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify'
import Auth from './packages/auth/auth';
import StoreData from './store';

Vue.use(Auth);
Vue.use(VueResource);
Vue.use(Vuetify);
Vue.use(Vuex);

const store = new Vuex.Store(StoreData);


Router.beforeEach(
    (to, from, next) => {
        if (to.matched.some(record => record.meta.forVisitors)) {
            if (store.getters.isLoggedIn === true) {
                next({
                    path: '/feed'
                })
            } else next()
        } else if (to.matched.some(records => records.meta.forAuth)) {
            if (store.getters.isLoggedIn != true) {
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
    router: Router,
    store
});