<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs6 offset-xs3 class="contenedor">
                <h3>Login</h3>
                <v-form v-model="valid">
                    <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                    ></v-text-field>
                    <v-text-field
                            v-model="password"
                            label="Password"
                            type="password"
                            required
                    ></v-text-field>
                    <v-btn
                            :disabled="!valid"
                            @click="login"
                    >
                        submit
                    </v-btn>
                    <v-btn @click="">clear</v-btn>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    import client_secret from '../../env';

    export default {
        data () {
            return {
                email: 'gbelot2003@hotmail.com',
                password: '',
                body: {},
            }
        },
        methods:{
            login () {
                let data = {
                    client_id: 2,
                    client_secret: client_secret,
                    grant_type: 'password',
                    username: this.email,
                    password: this.password,

                };
                this.$http.post("/oauth/token", data)
                    .then(resp => {
                        this.$auth.setToken(resp.body.access_token, resp.body.expires_in + Date.now());
                        this.$router.push("/about");

                    }, resp => {
                        this.email = '';
                        this.password = '';
                        console.log(resp);
                        alert(resp.statusText)
                    });
            }
        },
    }
</script>

<style>
    .contenedor{
        padding: 10px;
        border-radius: 5px;
        -webkit-box-shadow: 3px 5px 5px 4px rgba(0,0,0,0.33);
        -moz-box-shadow: 3px 5px 5px 4px rgba(0,0,0,0.33);
        box-shadow: 3px 5px 5px 4px rgba(0,0,0,0.33);
        background: #EEEEEE;
    }
</style>