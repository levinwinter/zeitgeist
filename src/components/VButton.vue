<template>
    <button class="v-button" :class="[state, expand]" type="button" :disabled="disableButton">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "VButton",
        props: {
            state: {
                default: "default",
                validator(value) {
                    return ["default", "highlighted", "disabled", "forbidden"].indexOf(value) !== -1;
                }
            },
            expand: {
                default: "fit",
                validator(value) {
                    return ["fit", "full"].indexOf(value) !== -1;
                }
            }
        },
        computed: {
            disableButton() {
                return this.state === "disabled" || this.state === "forbidden";
            }
        }
    }
</script>

<style lang="scss" scoped>
    button {
        padding: $card-text-padding;

        background-color: $color-white;
        outline: solid $line-width $color-dark;
        border: 0;

        font-family: 'Fira Sans', sans-serif;
        font-size: $font-size-normal;
        font-weight: $font-weight-light;
        color: $color-dark;

        &.highlighted {
            background-color: $color-yellow;
        }

        &.disabled {
            background-color: $color-disabled;
            font-weight: $font-weight-thin;
        }

        &.forbidden {
            color: $color-forbidden;
            background-color: $color-forbidden;
            opacity: 0.5;
        }

        &.full {
            width: 100%;
        }
    }
</style>
