<template>
    <div class="flex justify-between items-center px-6 relative h-[3rem]">
        <div>
            <NuxtLink to="/" class="relative font-bold text-[17px] group flex items-center mr-[120px] md:mr-[240px]">
            <span>PRESS</span>
            <span :class="props.showMenu ? 'drawer__text__mobile--play' : 'drawer__text__desktop--play'">PLAY</span>
            <span :class="props.showMenu ? 'drawer__text__mobile--on' : 'drawer__text__desktop--on'">
                <span class="menu--o" :class="props.showMenu ? 'fill__mobile__o' : 'fill__desktop__o'">O</span>N
            </span>
            <span :class="props.showMenu ? 'drawer__text__mobile--tape' : 'drawer__text__desktop--tape'">TAPE</span>
            <span :class="props.showMenu ? 'drawer__text__mobile--space' : 'drawer__text__desktop--space'"></span>
            </NuxtLink>
        </div>
        <div class="hamburgger__menu" @click="emit('sendShowMenu', false)">
            <div class="hamburgger__menu__firstChild !bg-white"></div>
            <div class="hamburgger__menu__secondChild-hidden !bg-white"></div>
        </div>
    </div>
    <div class="flex flex-col space-y-2 text-[52px] mt-8 px-6">
        <NuxtLink to="/studio" active-class="opacity-65" class="hover:opacity-75 transition-opacity duration-150">Studio</NuxtLink>
        <NuxtLink to="/case-studies" active-class="opacity-65" class="hover:opacity-75 transition-opacity duration-150">Case studies</NuxtLink>
        <NuxtLink to="/services" active-class="opacity-65" class="hover:opacity-75 transition-opacity duration-150">Services</NuxtLink>
        <NuxtLink to="/contact" active-class="opacity-65" class="hover:opacity-75 transition-opacity duration-150">Contacts</NuxtLink>
    </div>
    <div class="mt-20">
        <HeaderPlayer :is-vertical="true" @send-audio-trigger="(input) => emit('sendAudioTrigger', input)" />
    </div>
</template>

<script setup lang="ts">

const props = defineProps(['showMenu'])
const emit = defineEmits(['sendShowMenu', 'sendAudioTrigger'])

</script>

<style>
.hamburgger__menu__secondChild-hidden {
    @apply mt-0 opacity-0 transition-all duration-300 
}
</style>