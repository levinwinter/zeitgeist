<template>
    <div class="choice-composer-category">
        <h2>{{category.name + " " + this.$customThing}}</h2>
        <choice-composer-field
                v-for="field in category.fields"
                :key="field.name"
                :field="field"
        ></choice-composer-field>
    </div>
</template>

<script>
    import ChoiceComposerField from "@/components/ChoiceComposer/ChoiceComposerField";
    import {Category} from "@/models/category";
    export default {
        name: "ChoiceComposerCategory",
        components: { ChoiceComposerField },
        props: {
            category: {
                type: Category,
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
