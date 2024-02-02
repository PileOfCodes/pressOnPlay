<template>
    <div class="absolute left-2 bottom-[430px] md:bottom-[330px] transition-all duration-75 z-50" 
    :style="`transform: translateX(${mouseX}px)`" v-if="onHover">
        <template v-for="(image, index) in fleaImages" :key="index" >
            <div class="[140px] h-[80px] lg:w-[260px] lg:h-[160px]"  v-if="index == current">
                <img :src="image.src" class="w-full h-full object-cover rounded-md animatedImg" alt="">
            </div>
        </template>
    </div>
    <div class="flex flex-col">
        <div class="flea flea--shadows"  @mouseenter="onHover = true" @mouseleave="onHover = false" :class="onHover ? 'flea--back' : 'flea--top'">
            <div class="flea__container">
                <div class="flea__container__face flea__container__face--front"></div>
                <div class="flea__container__face flea__container__face--top">
                    <div class="w-full h-full overflow-clip flex items-center justify-evenly">
                        <span class="text-[4rem] lg:text-[12rem] md:text-[6rem] tracking-tighter">FLEA TICKETS</span>
                    </div>
                </div>
                <div class="flea__container__face flea__container__face--back" ref="backFace" :class="onHover ? 'bg-[#ff2803] block' : 'bg-[#f4f5ef] hidden'">
                    <NuxtLink to="/studio" class="w-full h-full overflow-clip flex items-center justify-between">
                        <div ref="audioBox">
                            <ClientOnly>
                                <Vue3Marquee :duration="9">
                                    <div v-for="(word, index) in words" :key="index">
                                        <span class="text-[4rem] lg:text-[12rem] md:text-[6rem] tracking-tighter">{{ word }}</span>
                                    </div>
                                </Vue3Marquee>
                            </ClientOnly>
                        </div>
                    </NuxtLink>
                </div>
                <div class="flea__container__face flea__container__face--bottom"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const onHover = ref(false)
const {$viewport} = useNuxtApp()
const backFace = ref<HTMLDivElement | null>(null)
const {x : mouseX} = useMouseInElement(backFace)
const words = ref(['FLEA TICKETS'])
const current = ref(0)
const fleaImages = ref([
    {
        src: '/img-7.jpg'
    },
    {
        src: '/img-8.jpg'
    },
    {
        src: '/img-9.jpg'
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
.flea {
    position: relative;
    width: 100%;
    height: 200px;
    color: black;
    perspective: 100vw; 
    overflow: hidden;
}

.flea__container {
    height: 100%;
    position: relative;
    transform: translateZ(-100px) rotateX(0deg);
    transform-style: preserve-3d;
    transition: transform 1s cubic-bezier(.25,1,.5,1);
    width: 100%;
}

.flea>.flea__container {
    transition-duration: .65s;
}

.flea:nth-child(2) {
    z-index: 0;
}

.flea__container__face {
    @apply w-full h-full text-center absolute transition-opacity duration-[0.6s] ease-[cubic-bezier(.65,0,.35,1)]
}

.flea--top>.flea__container {
    transform: translateZ(-100px) rotateX(-90.1deg);
}

.flea--back>.flea__container {
    transform:  rotateX(-180deg);
}

.flea__container__face--front {
    transform: rotateY(0deg) translateZ(100px);
}
.flea__container__face--top {
    transform: rotateX(90.1deg) translateZ(100px);
}
.flea__container__face--back {
    transform: translateZ(-100px) rotateY(-180deg) rotate(180deg);
}
.flea__container__face--bottom {
    transform: rotateX(-90.1deg) translateZ(100px);
}

.flea--shadows .flea__container__face:after {
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

.flea--top>.flea__container>.flea__container__face--back:after {
    opacity: 0.2;
}

@media screen and (max-width: 800px) {
    .flea {
    height: 100px;
}

.flea__container {
    transform: translateZ(-50px) rotateX(0deg);
}

.flea--top>.flea__container {
    transform: translateZ(-50px) rotateX(-90.1deg);
}

.flea--back>.flea__container {
    transform:  rotateX(-180deg);
}

.flea__container__face--front {
    transform: rotateY(0deg) translateZ(50px);
}
.flea__container__face--top {
    transform: rotateX(90.1deg) translateZ(50px);
}
.flea__container__face--back {
    transform: translateZ(-50px) rotateY(-180deg) rotate(180deg);
}
.flea__container__face--bottom {
    transform: rotateX(-90.1deg) translateZ(50px);
}
}
</style>