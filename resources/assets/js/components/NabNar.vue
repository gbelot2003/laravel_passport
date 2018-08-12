<template>
    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right">
                <li role="presentation"><router-link :data-active="true" data-exact="true"  to="/">Home</router-link></li>
                <li role="presentation"><router-link data-active="true" data-exact="true" to="/login">Login</router-link></li>
                <li role="presentation"><router-link data-active="true" data-exact="true" to="/register">Register</router-link></li>
                <li role="presentation"><router-link data-active="true" data-exact="true" to="/about">About</router-link></li>
            </ul>
        </nav>
        <h3 class="text-muted">Aplication Test</h3>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .router-link-exact-active {
        color: #f00
    }
</style>