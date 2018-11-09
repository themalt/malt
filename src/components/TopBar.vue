<template>
    <b-navbar
        fixed="top"
        tag="header"
        toggleable="md"
        type="dark"
        variant="info"
        class="page-header"
    >
        <b-navbar-brand to="/">MALT</b-navbar-brand>
        <b-navbar-toggle target="nav_collapse" />
        <b-collapse
            id="nav_collapse"
            is-nav
        >
            <b-navbar-nav>
                <b-nav-item to="/dashboard">Dashboard</b-nav-item>
                <b-nav-item to="/site">Site</b-nav-item>
                <b-nav-item to="/page">Page</b-nav-item>
                <b-nav-item to="/trap">It's a Trap!</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/profile">User</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'TopBar',
};
</script>
