<template>
    <div id="app">
        <the-menu></the-menu>
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "~normalize.css";
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:100,300,400,500&display=swap');

    #app {
        font-family: 'Fira Sans', sans-serif;
        line-height: $standard-line-height;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $color-dark;
    }

    .shadow {
        box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2);
    }
</style>

<script>
    import TheMenu from "@/components/TheMenu";
    export default {
        components: {TheMenu}
    }
</script>
