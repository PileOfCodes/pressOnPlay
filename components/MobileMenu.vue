<template>
    <div :class="props.showMenu ? '' : 'hidden' ">
        <div class="flex flex-col space-y-2 text-[52px] mt-8 px-6">
            <NuxtLink to="/studio" active-class="opacity-65" class="hover:opacity-75 transition-opacity duration-150">Studio</NuxtLink>
            <NuxtLink to="/case-studies" active-class="opacity-65" class="hover:opacity-75 transition-opacity duration-150">Case studies</NuxtLink>
            <NuxtLink to="/services" active-class="opacity-65" class="hover:opacity-75 transition-opacity duration-150">Services</NuxtLink>
            <NuxtLink to="/contact" active-class="opacity-65" class="hover:opacity-75 transition-opacity duration-150">Contacts</NuxtLink>
        </div>
        <div class="mt-20">
            <HeaderPlayer :is-vertical="true" @send-audio-trigger="(input) => emit('sendAudioTrigger', input)" />
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps(['showMenu'])
const emit = defineEmits(['sendAudioTrigger'])

</script>

<style>
.hamburgger__menu__secondChild-hidden {
    @apply mt-0 opacity-0 transition-all duration-300 
}
</style>