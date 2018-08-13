<template>
    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right">
                <router-link tag="li"  to="/">
                    <a>Home</a>
                </router-link>
                <router-link tag="li" to="/login" v-if="! isAuth">
                    <a>Login</a>
                </router-link>
                <router-link tag="li" to="/register" v-if="isAuth">
                    <a>Register</a>
                </router-link>
                <router-link tag="li" to="/feed" v-if="isAuth">
                    <a>Feed</a>
                </router-link>
                <router-link tag="li" to="/about" v-if="isAuth">
                    <a>About</a>
                </router-link>
                <router-link tag="li" to="/contact" v-if="! isAuth">
                    <a>Contact</a>
                </router-link>
            </ul>
        </nav>
        <h3 class="text-muted">Aplication Test</h3>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isAuth: null
            }
        },

        created(){
            this.isAuth = this.$auth.isAuthenticate();
        }

    }
</script>