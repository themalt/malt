<template>
    <div id="app">
        <top-bar />
        <router-view />
        <footer-bar />
    </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
    components: {
        TopBar,
        FooterBar,
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
