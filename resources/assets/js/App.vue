<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                fixed
                right
                app
        >
            <v-list dense>
                <v-list-tile @click="goHome">

                    <v-list-tile-content>
                        <v-list-tile-title>Link One</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="">
                    <v-list-tile-content>
                        <v-list-tile-title>Link Two</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="blue" dark fixed app>
            <v-toolbar-title>Sistema de Encomiendas</v-toolbar-title>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-toolbar-items  class="hidden-sm-and-down">

                <v-btn flat  v-if="! isAuth" >
                    <router-link to="/login">
                        <a class="white--text">Login</a>
                    </router-link>
                </v-btn>
                <v-btn flat v-if="isAuth">
                    <router-link to="/register" >
                        <a class="white--text">Register</a>
                    </router-link>
                </v-btn>

                <v-btn flat v-if="isAuth" >
                    <router-link to="/feed" >
                        <a class="white--text">Feed</a>
                    </router-link>
                </v-btn>

                <v-btn flat v-if="isAuth">
                    <router-link to="/products/create" >
                        <a class="white--text">Product Create</a>
                    </router-link>
                </v-btn>

                <v-btn flat v-if="! isAuth">
                    <router-link to="/products/create" >
                        <a class="white--text">About</a>
                    </router-link>
                </v-btn>

                <v-btn flat v-if="! isAuth">
                    <router-link to="/contact" >
                        <a class="white--text">Contact</a>
                    </router-link>
                </v-btn>

                <v-btn flat v-if="isAuth">
                    <router-link to="#" @click="logout">
                        <a class="white--text">logout</a>
                    </router-link>
                </v-btn>




            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center align-center>
                    <v-flex text-xs-center>
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer color="cyan" app>
            <v-spacer></v-spacer>
            <span class="white--text">&copy; 2018</span>
        </v-footer>
    </v-app>
</template>


<script>
    export default {
        data(){
            return{
                drawer: false,
                isAuth: null
            }
        },
        props: {
            source: String,

        },
        created(){
            this.isAuth = this.$auth.isAuthenticate();
            this.setAuthenticatedUser();
        },
        methods:{
            setAuthenticatedUser(){
                this.$http.get('api/user')
                    .then(response => {
                        this.$auth.setAuthenticatedUser(response.body);
                        //console.log(this.$auth.getAuthenticatedUser());
                    });
            },
            goHome(){
                this.$router.push("/");
            },
            goContact(){
                this.$router.push("/contact");
            },

            logout(){
                this.$auth.destroyToken();
                this.$router.push("/");
            }
        }
    }
</script>

<style>
    @import '~vuetify/dist/vuetify.min.css';
    @import '~material-design-icons-iconfont/dist/material-design-icons.css';
</style>