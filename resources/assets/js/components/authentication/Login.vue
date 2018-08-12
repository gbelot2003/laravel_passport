<template>
    <div class="row">
        <div class="col-md-6">
            <div class="panel panel-default">

                <div class="form-group">
                    <input type="email"
                           v-model="email"
                           class="form-control"
                           placeholder="E-mail">
                </div>

                <div class="form-group">
                    <input type="password"
                           v-model="password"
                           class="form-control"
                           placeholder="Password">
                </div>
                <p>user: gbelot2003@hotmail.com</p>
                <p>pass: secret</p>

                <button class="btn btn-success" @click="login">Login</button>
            </div>
        </div>
        <pre>{{ $data }}</pre>
    </div>
</template>

<script>
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
                    client_secret: 'yduFRs5MMMx5PUIkWS8Ynujz5f06zdxq2AQZIno7',
                    grant_type: 'password',
                    username: this.email,
                    password: this.password,

                };
                this.$http.post("http://localhost/oauth/token", data)
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