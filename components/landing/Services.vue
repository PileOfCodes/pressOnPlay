<template>
    <div class="flex gap-x-60">
        <div class="w-full flex gap-x-12 md:justify-between items-start p-5" ref="container">
            <div class="flex gap-x-1 items-center">
                <span class="w-3 h-3 rounded-full bg-black"></span>
                <span>Services</span>
            </div>
            <div class="flex flex-col md:gap-y-[500px]">
                <div class="text-[2.5rem] w-[350px] md:w-[500px] leading-[45px] tracking-tighter" id="item-1">Music, sound and voice. Secretly designed to unlock a little love.</div>
                <div class="" id="item-2">
                    <CustomeBtn btn-text="Learn More" />
                </div>
            </div>
        </div>
        <div>
            <LandingServiceCarousel />
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap/all'
const container = ref()
let ctx = ref<any>()
onMounted(() => {
    ctx.value = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.value,
                start: 'top 100%',
                end: '30% 90%',
            }
        })   
        
        tl.fromTo('#item-1',{
            y: 50,
        }, {
            y: 0,
        })
        tl.fromTo('#item-2',{
            y: 5,
        }, {
            y:0,
        })
    }, container.value) 

})

onUnmounted(() => {
    ctx.value.revert()
})
</script>