<template>
    <div ref="container" class="my-12 px-6 lg:flex lg:justify-between">
        <div class="lg:flex lg:flex-col lg:justify-between">
            <div id="item1" class="w-[500px] sm:w-[600px] md:w-[700px] lg:w-[600px] text-[50px] leading-[60px]" style="font-weight: 900">
                A Paris-based studio, working with creative teams all over the planet.
            </div>
            <div id="item2" class="hidden lg:flex mt-12 justify-start items-start gap-x-6 text-[14px] xl:pl-32">
                <div class="w-[180px] lg:w-[340px]">Loïc Bénart started his career in a renowned agency. After 10 years, he tried to escape the advertising world, but as it always does, life brought him back by the ears. Luckily it didn’t pull too hard. Those ears remained highly operational, allowing him to found Press Play On Tape to focus on what he had always been best at and had most fun with, sounds.</div>
                <div class="w-[180px] lg:w-[340px]">Since he was a child, Loïc has been immersed in music and image , creating the soundtracks for his Super 8 films on a Casio VL-1. Something from back then stuck, probably playfulness. He was often seen throwing in analog sounds in pioneering digital experience or making use of generative compositions in classic productions.</div>
            </div>
        </div>
        <div class="mt-6 md:h-[800px] lg:w-[450px] lg:h-[600px] h-[470px] overflow-hidden rounded-xl">
            <NuxtImg src="/guy.jpg" class="w-full h-full object-cover scale-125 md:scale-105 lg:scale-105" />
        </div>
        <div id="item2" class="lg:hidden mt-12 flex justify-end md:justify-between items-start gap-x-6 text-[14px]">
            <div class="w-[180px] sm:w-[220px] md:w-[350px]">Loïc Bénart started his career in a renowned agency. After 10 years, he tried to escape the advertising world, but as it always does, life brought him back by the ears. Luckily it didn’t pull too hard. Those ears remained highly operational, allowing him to found Press Play On Tape to focus on what he had always been best at and had most fun with, sounds.</div>
            <div class="w-[180px] sm:w-[220px] md:w-[350px]">Since he was a child, Loïc has been immersed in music and image , creating the soundtracks for his Super 8 films on a Casio VL-1. Something from back then stuck, probably playfulness. He was often seen throwing in analog sounds in pioneering digital experience or making use of generative compositions in classic productions.</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
const container = ref()
let ctx = ref<any>()
onMounted(() => {
    ctx.value = gsap.context(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.value,
                start: '-300px 20%',
                end: 'bottom 70%'
            }
        })
        tl.fromTo('#item1', {
            y: 60,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })
        tl.fromTo('#item2', {
            y: 70,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })
    }, container.value)
})

onUnmounted(() => {
    ctx.value.revert()
})
</script>