<template>
    <div class="choice-composer">
        <choice-composer-category
                v-for="category in categories"
                :key="category.name"
                :category="category"
        ></choice-composer-category>
    </div>
</template>

<script>
    import ChoiceComposerCategory from "@/components/ChoiceComposer/ChoiceComposerCategory";
    import { categories } from "@/data/categories.ts";
    export default {
        name: "ChoiceComposer",
        components: { ChoiceComposerCategory },
        data() {
            return {
                categories: categories
            }
        }
    }
</script>

<style lang="scss" scoped>
    .choice-composer {
        margin-top: $standard-margin;
    }
</style>
