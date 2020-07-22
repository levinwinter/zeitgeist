<template>
    <div class="choice-composer-subject">
        <!--TODO implement proper state management-->
        <choice-composer-button :state="subject.asMajor ? 'default' : 'forbidden'">LK</choice-composer-button>
        <choice-composer-button :state="subject.asMinor ? 'default' : 'forbidden'">GK</choice-composer-button>
        <p>{{subject.name}}</p>
        <div class="background shadow"></div>
    </div>
</template>

<script>
    import ChoiceComposerButton from "@/components/ChoiceComposer/ChoiceComposerButton";
    export default {
        name: "ChoiceComposerSubject",
        components: { ChoiceComposerButton },
        props: {
            subject: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .choice-composer-subject {
        position: relative;
        margin-left: $standard-margin;

        * {
            display: inline-block;
        }

        .background {
            position: absolute;
            left: -$standard-margin;
            height: 50%;
            width: 100vw;
            transform: translate(0, 50%);

            z-index: -1;

            outline: solid $line-width $color-dark;
        }
    }
</style>
