<template>
    <div class="choice-composer-category">
        <h2>{{categoryData.categoryName}}</h2>
        <choice-composer-subject
                v-for="subject in categoryData.subjects"
                :key="subject.abbreviation"
                :subject-data="subject"
        ></choice-composer-subject>
    </div>
</template>

<script>
    import ChoiceComposerSubject from "@/components/ChoiceComposer/ChoiceComposerSubject";
    export default {
        name: "ChoiceComposerCategory",
        components: {ChoiceComposerSubject},
        props: {
            categoryData: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    h2 {
        margin-left: $standard-margin;
        margin-bottom: 0;

        font-size: $font-size-bigger;
        font-weight: $font-weight-medium;
    }
</style>
