<template>
    <div class="absolute left-2 bottom-[420px] md:bottom-[420px] transition-all duration-75 z-50" 
    :style="`transform: translateX(${mouseX}px)`" v-if="onHover">
        <template v-for="(image, index) in oneyImages" :key="index" >
            <div class="w-[140px] h-[80px] lg:w-[260px] lg:h-[160px]"  v-if="index == current">
                <img :src="image.src" class="w-full h-full object-cover rounded-md animatedImg" alt="">
            </div>
        </template>
    </div>
    <div class="oney oney--shadows"  @mouseenter="onHover = true" @mouseleave="onHover = false" :class="onHover ? 'oney--back' : 'oney--top'">
        <div class="oney__container">
            <div class="oney__container__face oney__container__face--front"></div>
            <div class="oney__container__face oney__container__face--top">
                <div class="w-full h-full overflow-clip flex items-center justify-evenly">
                    <div>
                        <span class="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-36 lg:h-36 bg-black rounded-full"></span>
                        <span class="text-[4rem] lg:text-[12rem] md:text-[6rem] tracking-tighter">NEY</span>
                    </div>
                </div>
            </div>
            <div class="oney__container__face oney__container__face--back" ref="backFace" :class="onHover ? 'bg-[#F9B71B] block' : 'bg-[#f4f5ef] hidden'">
                <NuxtLink to="/studio" class="w-full h-full overflow-clip flex items-center ">
                    <div ref="audioBox">
                        <ClientOnly>
                            <Vue3Marquee :duration="9">
                                <div class="flex items-center gap-x-[300px]">
                                    <div>
                                        <span class="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-36 lg:h-36 bg-black rounded-full"></span>
                                        <span class="text-[4rem] lg:text-[12rem] md:text-[6rem] tracking-tighter">NEY</span>
                                    </div>
                                    <div>
                                        <span class="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-36 lg:h-36 bg-black rounded-full"></span>
                                        <span class="text-[4rem] lg:text-[12rem] md:text-[6rem] tracking-tighter">NEY</span>
                                    </div>
                                </div>
                            </Vue3Marquee>
                        </ClientOnly>
                    </div>
                </NuxtLink>
            </div>
            <div class="oney__container__face oney__container__face--bottom"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const onHover = ref(false)
const {$viewport} = useNuxtApp()
const backFace = ref<HTMLDivElement | null>(null)
const {x : mouseX} = useMouseInElement(backFace)

const current = ref(0)
const oneyImages = ref([
    {
        src: '/img-4.jpg'
    },
    {
        src: '/img-5.jpg'
    },
    {
        src: '/img-6.jpg'
    }
])

watch([$viewport.breakpoint, mouseX], ([newBreakPoint, newMouseVal]) => {
    if(newBreakPoint == 'xs') {
        if(newMouseVal < 0) {
            mouseX.value = 0
        }else if(newMouseVal > 340){
            mouseX.value = 340
        }
        if(newMouseVal < 150) {
        current.value = 0
        }else if(newMouseVal > 150 && newMouseVal < 250){
            current.value = 1
        }else{
            current.value = 2
        }
    }
})

</script>

<style>

.oney {
    position: relative;
    width: 100%;
    height: 200px;
    color: black;
    perspective: 100vw; 
    overflow: hidden;
}

.oney__container {
    height: 100%;
    position: relative;
    transform: translateZ(-50px) rotateX(0deg);
    transform-style: preserve-3d;
    transition: transform 1s cubic-bezier(.25,1,.5,1);
    width: 100%;
}

.oney>.oney__container {
    transition-duration: .65s;
}

.oney:nth-child(2) {
    z-index: 0;
}

.oney__container__face {
    @apply w-full h-full text-center absolute transition-opacity duration-[0.6s] ease-[cubic-bezier(.65,0,.35,1)]
}

.oney--top>.oney__container {
    transform: translateZ(-100px) rotateX(-90.1deg);
}

.oney--back>.oney__container {
    transform:  rotateX(-180deg);
}

.oney__container__face--front {
    transform: rotateY(0deg) translateZ(100px);
}
.oney__container__face--top {
    transform: rotateX(90.1deg) translateZ(100px);
}
.oney__container__face--back {
    transform: translateZ(-100px) rotateY(-180deg) rotate(180deg);
}
.oney__container__face--bottom {
    transform: rotateX(-90.1deg) translateZ(100px);
}

.oney--shadows .oney__container__face:after {
    background-color: var(--dark);
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: opacity .6s cubic-bezier(.35,0,.65,1);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 100%;
    z-index: 2;
}
.oney--top>.oney__container>.oney__container__face--back:after {
    opacity: 0.2;
}

@media screen and (max-width: 800px) {
    .oney {
    height: 100px;
}

.oney__container {
    transform: translateZ(-100px) rotateX(0deg);
}

.oney--top>.oney__container {
    transform: translateZ(-50px) rotateX(-90.1deg);
}

.oney--back>.oney__container {
    transform:  rotateX(-180deg);
}

.oney__container__face--front {
    transform: rotateY(0deg) translateZ(50px);
}
.oney__container__face--top {
    transform: rotateX(90.1deg) translateZ(50px);
}
.oney__container__face--back {
    transform: translateZ(-50px) rotateY(-180deg) rotate(180deg);
}
.oney__container__face--bottom {
    transform: rotateX(-90.1deg) translateZ(50px);
}
}
</style>