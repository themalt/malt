<template>
    <div id="app">
        <b-nav>
            <b-nav-item
                to="/"
                active
            >Home</b-nav-item>
            <b-nav-item to="/dashboard">Dashboard</b-nav-item>
            <b-nav-item to="/site">Site</b-nav-item>
            <b-nav-item to="/page">Page</b-nav-item>
            <b-nav-item to="/trap">It's a Trap!</b-nav-item>
        </b-nav>
        <router-view />
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
};
</script>

<style lang="scss" scoped>
</style>
