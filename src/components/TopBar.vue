<template>
    <div>
        <b-nav>
            <b-nav-item
                to="/"
                active
            >
                Home
            </b-nav-item>
            <b-nav-item to="/dashboard">Dashboard</b-nav-item>
            <b-nav-item to="/site">Site</b-nav-item>
            <b-nav-item to="/page">Page</b-nav-item>
            <b-nav-item to="/trap">It's a Trap!</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
};
</script>

<style lang="scss" scoped>

</style>
