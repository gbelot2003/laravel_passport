<template>
    <div class="container" id="app">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from './components/NabNar';

    export default {
        components: {Navbar}
    }
</script>

<style>
    @import '~vuetify/dist/vuetify.min.css';
    @import '~material-design-icons-iconfont/dist/material-design-icons.css';
</style>