<template>
    <LandingPressPlay @send-audio-trigger="(input : HTMLDivElement) => getAudioTrigger(input)" />
    <LandingVisualiser :audio-box="audioTrigger" />
    <LandingTape />
    <LandingStudio />
    <LandingCaseStudies />
    <LandingServices />
</template>


<script setup lang="ts">
import {usePlayerStore} from '@/store/Player'
import {storeToRefs} from 'pinia'
const playerStore = usePlayerStore()
const {isPlaying, player} = storeToRefs(playerStore)

onBeforeRouteLeave(() => {
    if(isPlaying.value) {
        player.value?.pause()
        isPlaying.value = false
    }
})
const audioTrigger = ref()
function getAudioTrigger(input : HTMLDivElement) {
    audioTrigger.value = input
}
</script>

<style>
.yourClass {
    background-color: yellow;
}
</style>


