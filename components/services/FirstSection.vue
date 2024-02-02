<template>
    <div class="px-4 pt-8 pb-6">
        <div style="font-weight: 900" 
        class=" text-[46px] sm:text-[115px] leading-[60px] sm:leading-[140px]">
        Cool sounds to supercharge digital and real-life moments.
        </div>
        <div class="lg:flex lg:justify-end lg:items-end">
            <div class="text-[23px] pt-20 leading-[25px] lg:w-[300px] lg:pr-8">From motions design to apps through AR, VR or 3D immersive experiences, we visualize and produce the audio for all your creative journeys.</div>
            <div class="parallax-container relative overflow-hidden w-full h-[480px] md:h-[800px] lg:h-[480px] lg:w-[450px] rounded-xl mt-6">
                <NuxtImg src="/claireDorn.jpg" class="parallax-image absolute w-full h-[530px] md:h-[850px] lg:h-[530px] object-cover scale-[1.2] lg:scale-110" alt="keyboards" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'

onMounted(() => {
    gsap.utils.toArray(".parallax-container .parallax-image").forEach((section : any, i) => {
        const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;
        
        gsap.fromTo(section,{ 
            y: -heightDiff
        }, {
            scrollTrigger: {
            trigger: section,
            scrub: true
            },
            y: 0,
            ease: "none"
        });
    });
})
</script>

<style>

</style>