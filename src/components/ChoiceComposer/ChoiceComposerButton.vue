<template>
    <v-button class="choice-composer-button shadow" :state="state">
        <slot></slot>
    </v-button>
</template>

<script>
    import VButton from "@/components/VButton";
    export default {
        name: "ChoiceComposerButton",
        components: {
            VButton
        },
        props: [
            "state"
        ]
    }
</script>

<style lang="scss" scoped>
    .choice-composer-button {
        margin-top: $button-margin * 0.5;
        margin-bottom: $button-margin * 0.5;
        margin-right: $button-margin;
    }
</style>
