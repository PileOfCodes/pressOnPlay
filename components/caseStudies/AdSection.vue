<template>
    <div class="bg-white p-5 pb-40">
        <slot name="header"></slot>
        <div class="flex justify-start gap-x-2 items-center pt-12">
            <slot name="circles"></slot>
        </div>
        <div class="flex flex-wrap items-end gap-x-8">
            <slot name="images"></slot>
        </div>
        <slot name="footer"></slot>
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
.circle {
    @apply w-16 h-16 rounded-full flex items-center justify-center text-[30px]
}
</style>