<template>
    <ServicesFirstSection /> 
    <ServicesMenu />
    <ServicesProcess />
    <div class="sm:hidden">
        <div class="bg-[#f9b71b] number__container">
            <div class="number__container__body">
                <div class="number__container__body--number">01</div>
            </div>
            <div class="text__container">
                <div class="text__container__body">Strategy first</div>
                <div class="text__container__body--caption">The name of the game is storytelling. Well beyond neat sounds, we focus on producing ideas that make the experience stronger and meaningful. Expect clear-cut creative concepts and playful mood boards.</div>
            </div>
        </div>
        <div class="bg-[#1795f0] number__container">
            <div class="number__container__body">
                <div class="number__container__body--number">02</div>
            </div>
            <div class="text__container">
                <div class="text__container__body">Production</div>
                <div class="text__container__body--caption">We create, assemble, tweak, record and produce, from our studio or on set. We talk with your teams on Slack / WhatsApp / anywhere the heart of the project is pumping.</div>
            </div>
        </div>
        <div class="bg-[#30e462] number__container">
            <div class="number__container__body">
                <div class="number__container__body--number">03</div>
            </div>
            <div class="text__container">
                <div class="text__container__body">Spotless delivery</div>
                <div class="text__container__body--caption">Advanced experiences like WebGL, generative environments or AR come with their lot of technical specificities. We like to hand out deliverables that fit in seamlessly so you never regret going bold.</div>
            </div>
        </div>
    </div>
    <ServicesPerspectiveCube :color="1">
        <template #front>
            <div class="service__cube__container">
                <div class="service__cube__container--number">01</div>
                <div class="service__cube__container__body">
                    <div class="service__cube__container__body--front">The name of the game is storytelling. Well beyond neat sounds, we focus on producing ideas that make the experience stronger and meaningful. Expect clear-cut creative concepts and playful mood boards.</div>
                </div>
            </div>
        </template>
        <template #top>
            <div class="service__cube__container">
                <div class="service__cube__container--number">01</div>
                <div class="service__cube__container__body">
                    <div class="service__cube__container__body--top">Strategy first</div>
                </div>
            </div>
        </template>
    </ServicesPerspectiveCube>
    <ServicesPerspectiveCube :color="2">
        <template #front>
            <div class="service__cube__container">
                <div class="service__cube__container--number">02</div>
                <div class="service__cube__container__body">
                    <div class="service__cube__container__body--front">We create, assemble, tweak, record and produce, from our studio or on set. We talk with your teams on Slack / WhatsApp / anywhere the heart of the project is pumping.</div>
                </div>
            </div>
        </template>
        <template #top>
            <div class="service__cube__container">
                <div class="service__cube__container--number">02</div>
                <div class="service__cube__container__body">
                    <div class="service__cube__container__body--top">Production</div>
                </div>
            </div>
        </template>
    </ServicesPerspectiveCube>
    <ServicesPerspectiveCube :color="3">
        <template #front>
            <div class="service__cube__container">
                <div class="service__cube__container--number">03</div>
                <div class="service__cube__container__body">
                    <div class="service__cube__container__body--front">Advanced experiences like WebGL, generative environments or AR come with their lot of technical specificities. We like to hand out deliverables that fit in seamlessly so you never regret going bold.</div>
                </div>
            </div>
        </template>
        <template #top>
            <div class="service__cube__container">
                <div class="service__cube__container--number">03</div>
                <div class="service__cube__container__body">
                    <div class="service__cube__container__body--top">Spotless delivery</div>
                </div>
            </div>
        </template>
    </ServicesPerspectiveCube>
    <ServicesLastSection />
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
</script>

<style scoped>
.number__container {
    @apply h-[400px] flex justify-between pl-5 pr-36
}
.number__container__body {
    @apply h-full flex items-end
}
.number__container__body--number {
    @apply text-[100px]
}
.text__container {
    @apply flex flex-col justify-center w-[100px]
}
.text__container__body {
    @apply text-[35px] leading-10
}
.text__container__body--caption {
    @apply text-[12px]
}
.service__cube__container {
    @apply flex
}
.service__cube__container--number {
    @apply text-[150px] text-start pl-10 w-1/2
}
.service__cube__container__body {
    @apply flex items-end py-16 w-1/2
}

.service__cube__container__body--top {
    @apply text-[35px] leading-10
}
.service__cube__container__body--front {
    @apply text-[14px] leading-[16px] text-justify md:w-[350px] sm:w-[250px]
}
</style>