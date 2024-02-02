<template>
    <div ref="visualiser" class="bg-[#30e462] px-6 pb-20 pt-4 tracking-tighter">
        <div id="item1" class="w-[490px] text-[35px] sm:w-full sm:text-[65px] xl:text-[75px]" style="font-weight: 900">The right sound is always an experiment that went just fine.</div>
        <div class="w-full flex lg:justify-end">
            <div id="item2" class="mt-6 w-[460px] lg:w-[300px] text-[13px]">Press Play On Tape is an ambassador for serendipity and the power of our 
                lucky stars. We like to give quirky or ill-shaped sounds a second chance by 
                looking at them with love and providing plenty of care.
            </div>
        </div>
        <div class="h-[500px] pt-20">
            <BouncingCircle target="thirdCircle" />
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
const visualiser = ref()
let ctx = ref<any>()
onMounted(() => {
    ctx.value = gsap.context(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: visualiser.value,
                start: 'top 90%',
                end: 'bottom 90%'
            }
        })
        tl.fromTo(['#item1', '#item2'], {
            y: 60,
            opacity: 0
        }, {
            y: 0,
            duration: 0.7,
            opacity: 1
        })
    }, visualiser.value)
})

onUnmounted(() => {
    ctx.value.revert()
})
</script>