<template>
        <div class="relative w-full bg-white pb-12 lg:pb-32 pt-5" ref="studies">
            <div class="w-full flex gap-x-12 md:justify-between px-5 items-start">
                <div class="flex w-52 items-center">
                    <span class="w-3 h-3 rounded-full bg-black mr-1"></span>
                    <span>Process</span>
                </div>
                <div class="flex">
                    <div class="text-[2.5rem] md:text-[2.5rem] leading-[45px] tracking-tighter" id="item-1">Probably best described as a creative collaboration minus the headaches.</div>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
let ctx = ref()
const studies = ref()
onMounted(() => {
    ctx.value = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '#item-1',
            start: '-300px 60%',
            end: '-100px 90%'
          }  
        })

        tl.fromTo('#item-1', {
            y: 40,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })
    }, studies.value)
})

onUnmounted(() => {
    ctx.value.revert()
})
</script>