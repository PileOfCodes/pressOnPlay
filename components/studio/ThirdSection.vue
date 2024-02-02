<template>
    <div ref="container" class="bg-black text-white px-6 py-12 lg:pt-4  lg:pb-32 lg:flex lg:items-start lg:justify-between">
        <div class="flex gap-x-1 items-center">
            <span class="w-3 h-3 rounded-full bg-white"></span>
            <span>Approach</span>
        </div>
        <div id="item1" class="py-6 lg:py-0 lg:w-[480px] text-[35px]">Nuts for aesthetics, driven by meaning.</div>
        <div id="item2" class="lg:py-0 py-6 lg:w-[350px] text-[13px]">
            The plan is to feel. At the end of the day, what we all want is an experience people will embrace. 
            When we are working on the soundscape of an app or the audio for a movie, 
            we turn to ideas and meaning to bring about those emotions. Otherwise, 
            well... just flat aesthetics. The audio is part of the experience. 
            Not a fancy garnish. It’s an enabler. A storyteller. We let it feed the creation with
            texture and stories of its own. We like it crispy, chunky, silky, gooey, 
            fiery maybe even sticky sometimes. Not the most complicated philosophy 
            but it has helped creations we’ve teamed on win awards and, most importantly, 
            real-life fans.
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
                start: '-300px 70%',
                end: '-100px 90%'
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
            y: 60,
            opacity: 0
        }, {
            y: 0,
            duration: 0.7,
            opacity: 1
        })
    }, container.value)
})

onUnmounted(() => {
    ctx.value.revert()
})
</script>