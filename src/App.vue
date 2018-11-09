<template>
    <div id="app">
        <top-bar />
        <b-container
            fluid
            tag="main"
        >
            <transition
                name="fade"
                mode="out-in"
                appear
            >
                <router-view :key="$route.fullPath" />
            </transition>
        </b-container>
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
