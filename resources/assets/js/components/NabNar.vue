<template>
    <v-navigation-drawer
            v-model="drawer"
            fixed
            right
            app
    >
        <v-list dense>
            <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="">
                <v-list-tile-action>
                    <v-icon>contact_mail</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Contact</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data () {
            return {
                isAuth: null,
                data: () => ({
                    drawer: null
                }),
            }
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
            }
        }

    }
</script>