<template>
    <b-navbar
        class="page-footer py-0"
        sticky
        tag="footer"
        type="light"
        variant="light"
    >
        <b-nav-text
            class="m-auto"
        >
            MALT &copy; {{ year }}
        </b-nav-text>
    </b-navbar>
</template>

<script>
export default {
    name: 'FooterBar',
    computed: {
        year() {
            const date = new Date();
            return date.getFullYear();
        },
    },
};
</script>
