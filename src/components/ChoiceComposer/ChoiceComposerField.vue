<template>
    <div class="choice-composer-field">
        <choice-composer-subject
                v-for="subject in field.subjects"
                :key="subject.abbreviation"
                :subject="subject"
        ></choice-composer-subject>
    </div>
</template>

<script>
    import ChoiceComposerSubject from "@/components/ChoiceComposer/ChoiceComposerSubject";
    import { Field } from "@/models/field";
    export default {
        name: "ChoiceComposerField",
        components: { ChoiceComposerSubject },
        props: {
            field: {
                type: Field,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
