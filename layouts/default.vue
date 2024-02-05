<template>
    <LayoutHeader @send-header="input => getHeader(input)" @audioTrigger="(input : HTMLDivElement) => getAudioTrigger(input)" />
    <StickyMenu :isLargeEnough="isLargeEnough" @menuAudioTrigger="(input : any) => getMenuAudioTrigger(input)"  />
    <slot/>
    <LayoutFooter />
</template>

<script setup lang="ts">
const audioTrigger = ref()
const menuAudioTrigger = ref()
const isLargeEnough = ref()

function getAudioTrigger(input : HTMLDivElement) {
    audioTrigger.value = input
}

function getHeader(input : boolean) {
    isLargeEnough.value = input
}

function getMenuAudioTrigger(input : any) {
    menuAudioTrigger.value = input
}
provide('audioTrigger', audioTrigger)
provide('menuAudioTrigger', menuAudioTrigger)

</script>