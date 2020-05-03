<template>
    <div class="floating-card shadow">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "FloatingCard"
    }
</script>

<style lang="scss" scoped>
    .floating-card {
        margin: $standard-margin;

        outline: solid $line-width $color-dark;
    }

    .card .button {
        padding: var(--card-text-padding);

        text-align: right;

        outline: solid var(--outline-width) var(--color-dark);
    }
</style>
