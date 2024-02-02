<template>
    <div class="absolute left-2 bottom-[430px] md:bottom-[520px] transition-all duration-75 z-50" 
    :style="`transform: translateX(${mouseX}px)`" v-if="onHover">
        <template v-for="(image, index) in dookieImages" :key="index">
            <div class="w-[140px] h-[80px] lg:w-[260px] lg:h-[160px]"  v-if="index == current">
                <img :src="image.src" class="w-full h-full object-cover rounded-md animatedImg" alt="">
            </div>
        </template>
    </div>
    <div class="mt-20 md:mt-52">
        <div class="cstudies cstudies--shadows" @mouseenter="onHover = true" @mouseleave="onHover = false" :class="onHover ? 'cstudies--back' : 'cstudies--top'">
            <div class="cstudies__container">
                <div class="cstudies__container__face cstudies__container__face--front"></div>
                <div class="cstudies__container__face cstudies__container__face--top">
                    <div class="w-full h-full overflow-clip flex items-center justify-evenly">
                        <div>
                            <span class="text-[4rem] lg:text-[12rem] md:text-[6rem]">D</span>
                            <span class="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-36 lg:h-36 bg-black rounded-full"></span>
                            <span class="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-36 lg:h-36 bg-black rounded-full ml-1"></span>
                            <span class="text-[4rem] lg:text-[12rem] md:text-[6rem] tracking-tighter">KEY</span>
                        </div>
                        <div class="ml-12">
                            <span class="text-[4rem] lg:text-[12rem] md:text-[6rem] tracking-tighter"> DASH</span>
                        </div>
                    </div>
                </div>
                <div class="cstudies__container__face cstudies__container__face--back" ref="backFace" :class="onHover ? 'bg-sky-500 block' : 'bg-[#f4f5ef] hidden'">
                    <NuxtLink to="/studio" class="w-full h-full overflow-clip flex items-center justify-between">
                        <div ref="audioBox">
                            <ClientOnly>
                                <Vue3Marquee :duration="9">
                                    <div>
                                        <span class="text-[4rem] lg:text-[12rem] md:text-[6rem]">D</span>
                                        <span class="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-36 lg:h-36 bg-black rounded-full"></span>
                                        <span class="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-36 lg:h-36 bg-black rounded-full ml-1"></span>
                                        <span class="text-[4rem] lg:text-[12rem] md:text-[6rem] tracking-tighter">KEY</span>
                                    </div>
                                    <div class="ml-12">
                                        <span class="text-[4rem] lg:text-[12rem] md:text-[6rem] tracking-tighter">DASH</span>
                                    </div>
                                </Vue3Marquee>
                            </ClientOnly>
                        </div>
                    </NuxtLink>
                </div>
                <div class="cstudies__container__face cstudies__container__face--bottom"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const onHover = ref(false)
const {$viewport} = useNuxtApp()
const backFace = ref<HTMLDivElement | null>(null)
const {x : mouseX} = useMouseInElement(backFace)

const current = ref(0)
const dookieImages = ref([
    {
        src: '/img-1.jpg'
    },
    {
        src: '/img-2.jpg'
    },
    {
        src: '/img-3.jpg'
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

.animatedImg {
    animation: animatedImg forwards 0.2s 1 ease-in ;
}

@keyframes animatedImg {
    from {transform: scale(1.1);opacity: 0.6;}
    to {transform: scale(1.2);opacity: 1;}
}
.cstudies {
    position: relative;
    width: 100%;
    height: 200px;
    color: black;
    perspective: 100vw; 
    overflow: hidden;
}

.cstudies__container {
    height: 100%;
    position: relative;
    transform: translateZ(-100px) rotateX(0deg);
    transform-style: preserve-3d;
    transition: transform 1s cubic-bezier(.25,1,.5,1);
    width: 100%;
}

.cstudies>.cstudies__container {
    transition-duration: .65s;
}

.cstudies:nth-child(2) {
    z-index: 0;
}

.cstudies__container__face {
    @apply w-full h-full text-center absolute transition-opacity duration-[0.6s] ease-[cubic-bezier(.65,0,.35,1)]
}

.cstudies--top>.cstudies__container {
    transform: translateZ(-100px) rotateX(-90.1deg);
}

.cstudies--back>.cstudies__container {
    transform:  rotateX(-180deg);
}

.cstudies__container__face--front {
    transform: rotateY(0deg) translateZ(100px);
}
.cstudies__container__face--top {
    transform: rotateX(90.1deg) translateZ(100px);
}
.cstudies__container__face--back {
    transform: translateZ(-100px) rotateY(-180deg) rotate(180deg);
}
.cstudies__container__face--bottom {
    transform: rotateX(-90.1deg) translateZ(100px);
}

@media screen and (max-width: 800px) {
    .cstudies {
    height: 100px;
}

.cstudies__container {
    transform: translateZ(-50px) rotateX(0deg);
}

.cstudies--top>.cstudies__container {
    transform: translateZ(-50px) rotateX(-90.1deg);
}

.cstudies--back>.cstudies__container {
    transform:  rotateX(-180deg);
}

.cstudies__container__face--front {
    transform: rotateY(0deg) translateZ(50px);
}
.cstudies__container__face--top {
    transform: rotateX(90.1deg) translateZ(50px);
}
.cstudies__container__face--back {
    transform: translateZ(-50px) rotateY(-180deg) rotate(180deg);
}
.cstudies__container__face--bottom {
    transform: rotateX(-90.1deg) translateZ(50px);
}
}
</style>