<template>
        <div class="relative w-full bg-[#f4f5ef] pb-8 pt-5" ref="studies">
            <div class="w-full flex gap-x-12 md:justify-between px-5 items-start">
                <div class="flex w-52 items-center">
                    <span class="w-3 h-3 rounded-full bg-black mr-1"></span>
                    <span>Case studies</span>
                </div>
                <div class="flex  md:mr-28">
                    <div class="text-[2.2rem] md:text-[2.5rem] w-[300px] md:w-[900px] leading-[45px] tracking-tighter" id="item-1">Bringing audio to the trailblazing worlds of those shaping fresh narratives.</div>
                </div>
            </div>
            <div class="md:my-4">
                <CaseStudiesDookie />
                <CaseStudiesOney />
                <CaseStudiesFlea />
            </div>
            <div class="w-full flex items-center justify-center mt-4">
                <CustomeBtn btn-text="VIEW OUR WORK" />
            </div>
        </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'

const studies = ref()
let ctx = ref<any>()
onMounted(() => {
    ctx.value = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: studies.value,
                start: 'top 100%',
                end: '30% 90%'
            }
        })

        tl.fromTo('#item-1', {
            y: 70
        }, {
            y:0
        })
    }, studies.value)
})

onUnmounted(() => {
    ctx.value.revert()
})
</script>