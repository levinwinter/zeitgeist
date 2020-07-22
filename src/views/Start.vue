<template>
    <div>
        <floating-card>
            <floating-card-text>Um dir deine Kombination zusammenstellen zu können, fülle bitte folgende Fragen aus.</floating-card-text>
        </floating-card>
        <data-input-text label="Vorname" v-model="forename"></data-input-text>
        <data-input-checkbox v-model="bilingual">Ich möchte das bilinguale Fach in der Oberstufe fortsetzen</data-input-checkbox>
        <floating-card>
            <floating-card-text v-show="!finished">Deine Eingabe ist noch nicht komplett</floating-card-text>
            <floating-card-button :state="finished ? 'highlighted' : 'disabled'">Weiter ></floating-card-button>
        </floating-card>
    </div>
</template>

<script>
    import DataInputText from "@/components/DataInput/DataInputText.vue"
    import DataInputCheckbox from "@/components/DataInput/DataInputCheckbox.vue"
    import FloatingCard from "@/components/FloatingCard/FloatingCard";
    import FloatingCardText from "@/components/FloatingCard/FloatingCardText";
    import FloatingCardButton from "@/components/FloatingCard/FloatingCardButton";

    export default {
        name: "Start.vue",
        components: {FloatingCardButton, FloatingCardText, FloatingCard, DataInputText, DataInputCheckbox},
        computed: {
            forename: {
                get () {
                    return this.$store.state.forename
                },
                set (forename) {
                    this.$store.commit('setForename', forename);
                }
            },
            bilingual: {
                get () {
                    return this.$store.state.bilingual
                },
                set (bilingual) {
                    this.$store.commit('setBilingual', bilingual);
                }
            },
            finished() {
                return this.forename !== '';
            }
        }
    }
</script>

<style scoped>

</style>
