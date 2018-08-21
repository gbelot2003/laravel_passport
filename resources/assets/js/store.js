

export default {
    state:{
        token:'',
        email:'',
        auth_error: null,
        loading: false,
        isLoggedIn: '',
        currentUser: {},
        userName: localStorage.getItem('userName'),
        role: []
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
        getUserName(state){
            return state.userName
        },
        getUserRole(stete){

        }
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
            state.currentUser = Object.assign({}, payload.body);
            state.userName = Object.assign(payload.body.name);
            localStorage.setItem('user', JSON.stringify(state.currentUser));
            localStorage.setItem('userName', JSON.stringify(state.userName));

        },
        setisLoggedIn(state){
            state.isLoggedIn = true
        },

        loginFail(state, payload){
            state.loading = false;
            state.auth_error = payload.err;
        },
        logout(state){
            localStorage.removeItem('token');
            localStorage.removeItem('expiration');
            localStorage.removeItem('user');
            localStorage.removeItem('userName');
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