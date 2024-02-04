<template>
    <div class="flex gap-x-60">
        <div class="w-full flex gap-x-12 md:justify-between items-start p-5" ref="container">
            <div class="flex gap-x-1 items-center">
                <span class="w-3 h-3 rounded-full bg-black"></span>
                <span>Services</span>
            </div>
            <div class="flex flex-col md:gap-y-[500px]">
                <div class="text-[2.5rem] w-[350px] md:w-[500px] leading-[45px] tracking-tighter" id="item-1">Music, sound and voice. Secretly designed to unlock a little love.</div>
                <NuxtLink to="/services" class="hidden md:block" id="item-2">
                    <CustomeBtn btn-text="VIEW ALL SERVICES" />
                </NuxtLink >
            </div>
        </div>
        <div class="hidden md:block">
            <LandingServiceCarousel />
        </div>
    </div>
    <div class="md:hidden">
        <div class="menu bg-[#ff2803]">
            <div class="menu__badge__container">
                <div class="menu__badge__container--item">VM</div>
            </div>
            <div class="menu__title__container">Voice & Mix</div>
            <div class="menu__image__container">
                <img src="/service-1.jpg" class="menu__image__container--image" alt="voice & mix picture">
            </div>
            <div class="menu__caption__container">
                <div class="menu__caption__container--line"></div>
                <span>Casting & Recording</span>
                <div class="menu__caption__container--line"></div>
                <span>Talent Direction</span>
                <div class="menu__caption__container--line"></div>
                <span>Voice over</span>
                <div class="menu__caption__container--line"></div>
                <span>Commercials & Trailers</span>
                <div class="menu__caption__container--line"></div>
                <span>Post Sync</span>
                <div class="menu__caption__container--line"></div>
                <span>Remote recording</span>
                <div class="menu__caption__container--line"></div>
            </div>
        </div>
        <div class="menu bg-[#f9b71b]">
            <div class="menu__badge__container">
                <div class="menu__badge__container--item">AB</div>
            </div>
            <div class="menu__title__container">Audio Branding</div>
            <div class="menu__image__container">
                <img src="/service-2.jpg" class="menu__image__container--image" alt="Audio Branding picture">
            </div>
            <div class="menu__caption__container">
                <div class="menu__caption__container--line"></div>
                <span>Audio Strategy</span>
                <div class="menu__caption__container--line"></div>
                <span>Brand Themes</span>
                <div class="menu__caption__container--line"></div>
                <span>Audio Logo</span>
                <div class="menu__caption__container--line"></div>
                <span>Audio Identity</span>
                <div class="menu__caption__container--line"></div>
                <span>Audio Guidelines</span>
                <div class="menu__caption__container--line"></div>
                <span>Core Principles</span>
                <div class="menu__caption__container--line"></div>
            </div>
        </div>
        <div class="menu bg-[#1795f0]">
            <div class="menu__badge__container">
                <div class="menu__badge__container--item">C</div>
            </div>
            <div class="menu__title__container">Compositions</div>
            <div class="menu__image__container">
                <img src="/service-3.jpg" class="menu__image__container--image" alt="Compositions picture">
            </div>
            <div class="menu__caption__container">
                <div class="menu__caption__container--line"></div>
                <span>Creative Direction</span>
                <div class="menu__caption__container--line"></div>
                <span>Original Music</span>
                <div class="menu__caption__container--line"></div>
                <span>Soundtracks</span>
                <div class="menu__caption__container--line"></div>
                <span>Video games & virtual experience music</span>
                <div class="menu__caption__container--line"></div>
                <span>Brand Music</span>
                <div class="menu__caption__container--line"></div>
                <span>Generative music</span>
                <div class="menu__caption__container--line"></div>
                <span>Licencing & Supervision</span>
                <div class="menu__caption__container--line"></div>
            </div>
        </div>
        <div class="menu bg-[#30e462]">
            <div class="menu__badge__container">
                <div class="menu__badge__container--item">SD</div>
            </div>
            <div class="menu__title__container">Sound Design</div>
            <div class="menu__image__container">
                <img src="/service-4.jpg" class="menu__image__container--image" alt="Sound Design picture">
            </div>
            <div class="menu__caption__container">
                <div class="menu__caption__container--line"></div>
                <span>Audio UX</span>
                <div class="menu__caption__container--line"></div>
                <span>Immersive Audio</span>
                <div class="menu__caption__container--line"></div>
                <span>Interactive Sounds</span>
                <div class="menu__caption__container--line"></div>
                <span>Experiential Sounds</span>
                <div class="menu__caption__container--line"></div>
                <span>Soundscapes</span>
                <div class="menu__caption__container--line"></div>
                <span>Product Sound Design</span>
                <div class="menu__caption__container--line"></div>
                <span>Interface & App Sound Design</span>
                <div class="menu__caption__container--line"></div>
            </div>
        </div>
        <NuxtLink to="/services" id="item-2">
            <CustomeBtn btn-text="VIEW ALL SERVICES" />
        </NuxtLink>
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

<style scoped>
.menu {
    @apply p-5 
}
.menu__badge__container {
    @apply flex items-center justify-end
}
.menu__badge__container--item {
    @apply bg-black w-10 h-10 flex items-center justify-center rounded-full text-white 
}
.menu__title__container {
    @apply text-[50px]
}
.menu__image__container {
    @apply w-full h-[500px] rounded-md overflow-hidden my-5
}
.menu__image__container--image {
    @apply w-full h-full scale-125 sm:scale-100 object-cover
}
.menu__caption__container {
    @apply py-5
}
.menu__caption__container--line {
    @apply h-[1px] w-[550px] bg-black
}
</style>