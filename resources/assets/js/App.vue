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

                <v-btn flat >
                    <router-link to="/login">
                        <a class="white--text">!!</a>
                    </router-link>
                </v-btn>

                <v-btn flat  v-if="! isAthenticated" >
                    <router-link to="/login">
                        <a class="white--text">Login</a>
                    </router-link>
                </v-btn>
                <v-btn flat v-if="isAthenticated">
                    <router-link to="/register" >
                        <a class="white--text">Register</a>
                    </router-link>
                </v-btn>

                <v-btn flat v-if="isAthenticated" >
                    <router-link to="/feed" >
                        <a class="white--text">Feed</a>
                    </router-link>
                </v-btn>

                <v-btn flat v-if="isAthenticated">
                    <router-link to="/products/create" >
                        <a class="white--text">Product Create</a>
                    </router-link>
                </v-btn>

                <v-btn flat v-if="! isAthenticated">
                    <router-link to="/products/create" >
                        <a class="white--text">About</a>
                    </router-link>
                </v-btn>

                <v-btn flat v-if="! isAthenticated">
                    <router-link to="/contact" >
                        <a class="white--text">Contact</a>
                    </router-link>
                </v-btn>

                <v-btn flat v-if="isAthenticated">
                    <a  v-on:click.stop.prevent="logout" class="white--text">logout</a>
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
                isAuth: null,
                user: null
            }
        },
        props: {
            source: String,

        },
        created(){
        },
        methods:{
            goHome(){
                this.$router.push("/");
            },
            goContact(){
                this.$router.push("/contact");
            },

            logout(){
                console.log('logout');
                this.$store.commit("logout");
                this.$router.push("/login");
            }
        },
        computed:{
            isAthenticated(){
                return this.$store.getters.isLoggedIn;
            },
            getTokens(){
                return this.$store.getters.getToken;
            }
        }
    }
</script>

<style>
    @import '~vuetify/dist/vuetify.min.css';
    @import '~material-design-icons-iconfont/dist/material-design-icons.css';
</style>