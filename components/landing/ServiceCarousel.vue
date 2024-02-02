<template>
    <div class="carousel" ref="carousel">
        <div class="carousel__container carousel__container--firstSlide group" ref="firstSlide">
            <div class="carousel__container__badge">VM</div>
            <div class="-rotate-90 -translate-x-[70px] text-[24px] w-[200px]" :class="firstItemWideness ? 'hidden' : ''">Voice & Mix</div>
            <div class="absolute top-6" :class="firstItemWideness ? '' : 'hidden'">
                <ClientOnly>
                    <Vue3Marquee :duration="12">
                        <div
                        v-for="(word, index) in ['Voice & Mix', 'Voice & Mix']"
                        :key="index"
                        >
                            <div class="uppercase px-2 tracking-tighter text-[6rem]">
                                <span>{{ word }}</span>
                            </div>
                        </div>
                    </Vue3Marquee>
                </ClientOnly>
            </div>
            <div class="absolute top-[180px] w-[280px] h-[300px] rounded-md overflow-hidden ml-4" :class="firstItemWideness ? '' : 'hidden'">
                <img src="/service-1.jpg" class="w-full h-full scale-125 object-cover" alt="voice & mix picture">
            </div>
            <div class="absolute bottom-12 px-4" :class="firstItemWideness ? 'block' : 'hidden'">
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Casting & Recording</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Talent Direction</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Voice over</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Commercials & Trailers</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Post Sync</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Remote recording</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
            </div>
        </div>
        <div class="carousel__container carousel__container--secondSlide group" ref="secondSlide">
            <div class="carousel__container__badge">AB</div>
            <div class="-rotate-90 -translate-x-[70px] text-[24px] w-[200px]" :class="secondItemWideness ? 'hidden' : 'block'">Audio Branding</div>
            <div class="absolute top-6" :class="secondItemWideness ? '' : 'hidden'">
                <ClientOnly>
                    <Vue3Marquee :duration="12">
                        <div
                        v-for="(word, index) in ['Audio Branding']"
                        :key="index"
                        >
                            <div class="uppercase tracking-tighter text-[6rem]">
                                <span>{{ word }}</span>
                            </div>
                        </div>
                    </Vue3Marquee>
                </ClientOnly>
            </div>
            <div class="absolute top-[180px] w-[280px] h-[300px] rounded-md overflow-hidden ml-4" :class="secondItemWideness ? '' : 'hidden'">
                <img src="/service-2.jpg" class="w-full h-full scale-125 object-cover" alt="voice & mix picture">
            </div>
            <div class="absolute bottom-12 px-4" :class="secondItemWideness ? 'block' : 'hidden'">
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Audio Strategy</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Brand Themes</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Audio Logo</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Audio Identity</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Audio Guidelines</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Core Principles</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
            </div>
        </div>
        <div class="carousel__container carousel__container--thirdSlide group" ref="thirdSlide">
            <div class="carousel__container__badge">C</div>
            <div class="-rotate-90 -translate-x-[70px] text-[24px] w-[200px]" :class="thirdItemWideness ? 'hidden' : 'block'">Compositions</div>
            <div class="absolute top-6" :class="thirdItemWideness ? '' : 'hidden'">
                <ClientOnly>
                    <Vue3Marquee :duration="12">
                        <div
                        v-for="(word, index) in ['Compositions']"
                        :key="index"
                        >
                            <div class="uppercase tracking-tighter text-[6rem]">
                                <span>{{ word }}</span>
                            </div>
                        </div>
                    </Vue3Marquee>
                </ClientOnly>
            </div>
            <div class="absolute top-[180px] w-[280px] h-[300px] rounded-md overflow-hidden ml-4" :class="thirdItemWideness ? '' : 'hidden'">
                <img src="/service-3.jpg" class="w-full h-full scale-125 object-cover" alt="voice & mix picture">
            </div>
            <div class="absolute bottom-12 px-4" :class="thirdItemWideness ? 'block' : 'hidden'">
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Creative Direction</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Original Music</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Soundtracks</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Video games & virtual experience music</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Brand Music</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Generative music</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Licencing & Supervision</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
            </div>
        </div>
        <div class="carousel__container carousel__container--fourthSlide group" ref="fourthSlide">
            <div class="carousel__container__badge">SD</div>
            <div class="-rotate-90 -translate-x-[70px] text-[24px] w-[200px]" :class="fourthItemWideness ? 'hidden' : 'block'">Sound Design</div>
            <div class="absolute top-6" :class="fourthItemWideness ? '' : 'hidden'">
                <ClientOnly>
                    <Vue3Marquee :duration="12">
                        <div
                        v-for="(word, index) in ['Sound Design']"
                        :key="index"
                        >
                            <div class="uppercase tracking-tighter text-[6rem]">
                                <span>{{ word }}</span>
                            </div>
                        </div>
                    </Vue3Marquee>
                </ClientOnly>
            </div>
            <div class="absolute top-[180px] w-[280px] h-[300px] rounded-md overflow-hidden ml-4" :class="fourthItemWideness ? '' : 'hidden'">
                <img src="/service-4.jpg" class="w-full h-full scale-125 object-cover" alt="voice & mix picture">
            </div>
            <div class="absolute bottom-12 px-4" :class="fourthItemWideness ? 'block' : 'hidden'">
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Audio UX</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Immersive Audio</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Interactive Sounds</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Experiential Sounds</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Soundscapes</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Product Sound Design</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
                <span>Interface & App Sound Design</span>
                <div class="h-[1px] w-[550px] bg-black"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
const carousel = ref()
const firstSlide = ref<HTMLDivElement | null>(null)
const secondSlide = ref<HTMLDivElement | null>(null)
const thirdSlide = ref<HTMLDivElement | null>(null)
const fourthSlide = ref<HTMLDivElement | null>(null)
const firstItemWideness = ref(false)
const secondItemWideness = ref(false)
const thirdItemWideness = ref(false)
const fourthItemWideness = ref(false)
let ctx = ref()
onMounted(() => {
    ctx.value = gsap.context(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: firstSlide.value,
                start: '-200px 10%',
                end: 'bottom 80%'
            }
        })
        tl.to(firstSlide.value, {
            duration: 0.4,
            width : 760
        }).call(() => {
            firstItemWideness.value = true
            secondItemWideness.value = false
            thirdItemWideness.value = false
            fourthItemWideness.value = false
        })
    }, carousel.value)
    firstSlide.value?.addEventListener('click', function() {
        if(firstSlide.value) {
            if(firstItemWideness.value) {
                firstSlide.value.style.width = '240px'
                if(secondSlide.value)secondSlide.value.style.width = '180px'
                firstItemWideness.value = false
            }else {
                firstSlide.value.style.width = '760px'
                if(secondSlide.value)secondSlide.value.style.width = '180px'
                if(thirdSlide.value)thirdSlide.value.style.width = '120px'
                if(fourthSlide.value)fourthSlide.value.style.width = '70px'
                firstItemWideness.value = true
                secondItemWideness.value = false
                thirdItemWideness.value = false
                fourthItemWideness.value = false
            }
        }
    })

    secondSlide.value?.addEventListener('click', function() {
        
        if(secondSlide.value) {
            if(secondItemWideness.value) {
                secondSlide.value.style.width = '180px'
                if(firstSlide.value)firstSlide.value.style.width = '240px'
                secondItemWideness.value = false
            }else {
                secondSlide.value.style.width = '700px'
                if(firstSlide.value)firstSlide.value.style.width = '760px'
                if(thirdSlide.value)thirdSlide.value.style.width = '120px'
                if(fourthSlide.value)fourthSlide.value.style.width = '70px'
                secondItemWideness.value = true
                firstItemWideness.value = false
                thirdItemWideness.value = false
                fourthItemWideness.value = false
            }
        }
    })

    thirdSlide.value?.addEventListener('click', function() {
        if(thirdSlide.value) {
            if(thirdItemWideness.value) {
                thirdSlide.value.style.width = '120px'
                if(secondSlide.value)secondSlide.value.style.width = '180px'
                if(firstSlide.value)firstSlide.value.style.width = '240px'
                thirdItemWideness.value = false
            }else {
                thirdSlide.value.style.width = '640px'
                if(firstSlide.value)firstSlide.value.style.width = '760px'
                if(secondSlide.value)secondSlide.value.style.width = '700px'
                if(fourthSlide.value)fourthSlide.value.style.width = '70px'
                firstItemWideness.value = false
                secondItemWideness.value = false
                thirdItemWideness.value = true
                fourthItemWideness.value = false
            }
        }
    })

    fourthSlide.value?.addEventListener('click', function() {
        if(fourthSlide.value) {
            if(fourthItemWideness.value) {
                fourthSlide.value.style.width = '70px'
                if(thirdSlide.value)thirdSlide.value.style.width = '120px'
                if(secondSlide.value)secondSlide.value.style.width = '180px'
                if(firstSlide.value)firstSlide.value.style.width = '240px'
                fourthItemWideness.value = false
            }else {
                fourthSlide.value.style.width = '590px'
                if(firstSlide.value)firstSlide.value.style.width = '760px'
                if(secondSlide.value)secondSlide.value.style.width = '700px'
                if(thirdSlide.value)thirdSlide.value.style.width = '640px'
                fourthItemWideness.value = true
                thirdItemWideness.value = false
                secondItemWideness.value = false
                firstItemWideness.value = false
            }
        }
    })
})

onUnmounted(() => {
    ctx.value.revert()
})
</script>

<style>
.carousel {
    @apply w-[240px] h-full relative flex cursor-pointer
}
.carousel__container {
    @apply  absolute flex flex-col gap-y-[550px] hover:translate-x-[-10px]
    transition-all duration-500 h-full
}
.carousel__container--firstSlide {
    @apply right-0 z-0 w-[240px] bg-[#ff2803]
}
.carousel__container--secondSlide {
    @apply right-0 z-10 w-[180px] bg-[#f9b71b]
}
.carousel__container--thirdSlide {
    @apply right-0 z-20 w-[120px] bg-[#1795f0]
}
.carousel__container--fourthSlide {
    @apply -right-[10px] z-30 w-[70px] overflow-hidden bg-[#30e462]
}
.carousel__container__badge {
    @apply bg-black w-8 h-8 leading-8 text-center rounded-full text-white 
    group-hover:scale-125 transition-all duration-500 group-hover:transition-all 
    group-hover:duration-200 mt-2 ml-4
}
</style>