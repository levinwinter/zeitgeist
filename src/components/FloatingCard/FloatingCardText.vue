<template>
    <div class="floating-card-text">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "FloatingCardText"
    }
</script>

<style lang="scss" scoped>
    .floating-card-text {
        padding: $card-text-padding;

        font-family: 'Fira Sans', sans-serif;
        font-size: $font-size-normal;
        font-weight: $font-weight-light;
        text-align: center;
    }
</style>
