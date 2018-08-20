

export default {
    state:{
        token:'',
        email:'',
        auth_error: null,
        loading: false,
        isLoggedIn: '',
        currentUser: {},
    },
    getters:{
        isLoggedIn(state){
            return state.isLoggedIn;
        },
        getToken(state){
            return state.token;
        },
        getUser(state){
            return state.currentUser;
        },
    },
    mutations:{
        loginSeccess(state, payload){
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.token = payload.access_token;
            localStorage.setItem('token', payload.access_token);
            localStorage.setItem('expiration', payload.expires_in);
        },
        setCurrentUser(state, payload){
            state.currentUser = Object.assign(payload);
            localStorage.setItem('user', JSON.stringify(state.currentUser.body))
        },

        loginFail(state, payload){
            state.loading = false;
            state.auth_error = payload.err;
        },
        logout(state){
            localStorage.removeItem('token');
            localStorage.removeItem('expiration');
            localStorage.removeItem('user');
            state.isLoggedIn = false;
            state.currentUser = null;
        }
    },
    action:{
        setActionCurrentUser(context){
            context.commit('setCurrentUser');
        }
    }
}