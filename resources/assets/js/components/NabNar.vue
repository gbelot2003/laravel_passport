<template>
    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right">
                <router-link tag="li"  to="/">
                    <a>Home</a>
                </router-link>
                <router-link tag="li" to="/login">
                    <a>Login</a>
                </router-link>
                <router-link tag="li" to="/register">
                    <a>Register</a>
                </router-link>
                <router-link tag="li" to="/feed">
                    <a>Feed</a>
                </router-link>
                <router-link tag="li" to="/about">
                    <a>About</a>
                </router-link>
                <router-link tag="li" to="/contact">
                    <a>Contact</a>
                </router-link>
            </ul>
        </nav>
        <h3 class="text-muted">Aplication Test</h3>
    </div>
</template>

<script>
    export default {}
</script>