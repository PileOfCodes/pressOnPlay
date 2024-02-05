<template>
    <div class="w-full p-5" ref="container">
        <div class="w-full flex gap-x-12 md:justify-between items-start">
            <div class="flex gap-x-1 items-center">
                <span class="w-3 h-3 rounded-full bg-black"></span>
                <span>Studio</span>
            </div>
            <div class="flex flex-col">
                <div class="text-[3.4rem] w-[350px] leading-[60px] md:text-[3.8rem] md:w-[700px] md:leading-[70px] tracking-tighter" id="item-1">Sounds of all kinds for one-of-a-kind experiences.</div>
                <div class="flex ">
                    <div class="flex flex-col"> 
                        <div class="flex gap-x-8 justify-start pt-12 md:pt-32 md:justify-end md:mr-4" id="item-2">
                            <div class="w-[160px] md:w-[340px] tracking-tighter text-[12px] md:text-[14px]">Press Play On Tape is a multidisciplinary sound studio based in Paris
                                operating at the crossroads of sound design and composition. 
                                It was founded a few years ago by Loïc Bénart, known to some as a friend,
                                to others as a dad and to most fellows as “the sound guy.”
                            </div>
                            <div class="w-[160px] md:w-[340px] tracking-tighter text-[12px] md:text-[14px]">              
                                The studio works alongside innovative brands and institutions to help them
                                tell their story, shape ideas and gather communities through audio branding,
                                production, or basically anything where sound matters.
                            </div>
                        </div>
                        <NuxtLink to="/studio" class="py-4 relative" id="item-3">
                            <CustomeBtn btn-text="Learn More" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
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
            y: 30,
        }, {
            y: 0,
        })
        tl.fromTo('#item-3',{
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