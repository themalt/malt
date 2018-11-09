<template>
    <div id="app">
        <top-bar />
        <router-view />
    </div>
</template>

<script>
import TopBar from './components/TopBar.vue';

export default {
    components: {
        TopBar,
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
