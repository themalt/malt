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
export default {
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
