<template>
    <div class="home">
        <floating-card>
            <floating-card-text>
                Jetzt kannst du dir deine Kombination zusammenklicken. Los geht's!<br>Sobald du fertig bist klicke am Ende der Seite auf den Button.
            </floating-card-text>
        </floating-card>
        <floating-card>
            <floating-card-text>
                Deine Kombination ist perfekt!
            </floating-card-text>
            <floating-card-button state="highlighted">Weiter ></floating-card-button>
        </floating-card>
    </div>
</template>

<script>
    // @ is an alias to /src
    import FloatingCard from "@/components/FloatingCard/FloatingCard";
    import FloatingCardText from "@/components/FloatingCard/FloatingCardText";
    import FloatingCardButton from "@/components/FloatingCard/FloatingCardButton";

    export default {
        name: 'Home',
        components: {
            FloatingCardButton,
            FloatingCardText,
            FloatingCard
        }
    }
</script>
