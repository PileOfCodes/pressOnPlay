<template>
    <LandingPressPlay @send-audio-trigger="(input : HTMLDivElement) => getAudioTrigger(input)" />
    <LandingVisualiser :audio-box="audioTrigger" />
    <LandingTape />
    <LandingStudio />
    <LandingCaseStudies />
    <LandingServices />
</template>


<script setup lang="ts">
const audioTrigger = ref()
function getAudioTrigger(input : HTMLDivElement) {
    audioTrigger.value = input
}
</script>

<style>

</style>


