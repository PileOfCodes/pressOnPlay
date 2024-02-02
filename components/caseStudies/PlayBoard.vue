<template>
    <div class="px-5 py-4">
        <div ref="playboard" class="bg-black relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] xl:h-[700px] overflow-hidden rounded-2xl cursor-pointer">
            <div :style="`transform: translate(${elementX + 20}px, ${elementY}px)`" 
            :class="[isPlaying ? 'w-8 h-8 p-20' : 'w-24 h-24', isOutside ? 'animateOut' : '']" 
            class="text-white relative rounded-full flex items-center justify-center z-50
             bg-black transition-all duration-75 ">{{ isPlaying ? 'pause' : 'play' }}</div>
            <video ref="video" loop src="/15seconds.mp4" class="absolute top-0 w-full h-full z-0"></video>
        </div>
    </div>
</template>

<script setup lang="ts">
const playboard = ref()
const isPlaying = ref(false)
const {elementX, elementY, isOutside} = useMouseInElement(playboard)
const video = ref<HTMLVideoElement>()

onMounted(() => {
    video.value?.addEventListener('click', () => {        
        if(video.value?.paused) {
            video.value.play()
            isPlaying.value = true
        }else {
            video.value?.pause()
            isPlaying.value = false
        }
    })
})
</script>

<style>
.animateOut {
    animation: playboardOut forwards 0.5s 1 ease-in-out;
}
@keyframes playboardOut {
    from {opacity: 1}
    to {opacity: 0}
}
</style>