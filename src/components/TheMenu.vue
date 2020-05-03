<template>
    <div class="menu shadow">
        <span class="progress">2/3</span>
        <span class="title">MSS Oberstufenwahl</span>
        <span class="help">?</span>
    </div>
</template>

<script>
    export default {
        name: "TheMenu"
    }
</script>

<style lang="scss" scoped>
    .menu {
        z-index: 3;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        height: $standard-height;

        * {
            position: fixed;
            top: 0;
            height: $standard-height;
            line-height: $standard-height;
            text-align: center;

            background-color: $color-white;
            outline: solid $line-width $color-dark;
        }

        .title {
            left: $standard-height;
            right: $standard-height;

            font-size: $font-size-bigger;
            font-weight: $font-weight-medium;
        }

        .progress, .help {
            width: $standard-height;

            font-size: $font-size-normal;
            font-weight: $font-weight-light;
        }

        .progress {
            left: 0;
        }

        .help {
            right: 0;
        }
    }
</style>
