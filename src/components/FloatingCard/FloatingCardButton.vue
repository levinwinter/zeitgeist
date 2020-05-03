<template>
    <v-button class="floating-card-button" :state="state" expand="full">
        <slot></slot>
    </v-button>
</template>

<script>
    import VButton from "@/components/VButton";
    export default {
        name: "FloatingCardButton",
        props: [
            "state"
        ],
        components: {
            VButton
        }
    }
</script>

<style lang="scss" scoped>

</style>
