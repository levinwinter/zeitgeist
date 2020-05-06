<template>
    <div class="choice-composer">
        <choice-composer-category
                v-for="category in xyzData"
                :key="category.categoryName"
                :category-data="category"
        ></choice-composer-category>
    </div>
</template>

<script>
    import ChoiceComposerCategory from "@/components/ChoiceComposer/ChoiceComposerCategory";
    export default {
        name: "ChoiceComposer",
        components: {ChoiceComposerCategory},
        data() {
            return {
                xyzData: [ //TODO rename data or replace with internal API
                    {
                        categoryName: "Sprachen",
                        subjects: [
                            {
                                name: "Deutsch",
                                abbreviation: "D",
                                asMajor: true,
                                asMinor: true
                            },
                            {
                                name: "Englisch",
                                abbreviation: "E",
                                asMajor: true,
                                asMinor: true
                            },
                            {
                                name: "Spanisch",
                                abbreviation: "SN",
                                asMajor: true,
                                asMinor: true
                            },
                            {
                                name: "Französisch",
                                abbreviation: "F",
                                asMajor: true,
                                asMinor: true
                            },
                            {
                                name: "Latein",
                                abbreviation: "L",
                                asMajor: true,
                                asMinor: true
                            }
                        ]
                    },
                    {
                        categoryName: "Künstlerische Fächer",
                        subjects: [
                            {
                                name: "Bildende Kunst",
                                abbreviation: "BK",
                                asMajor: true,
                                asMinor: true
                            },
                            {
                                name: "Musik",
                                abbreviation: "MU",
                                asMajor: true,
                                asMinor: true
                            },
                            {
                                name: "Darstellendes Spiel",
                                abbreviation: "DS",
                                asMajor: false,
                                asMinor: true
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .choice-composer {
        margin-top: $standard-margin;
    }
</style>
