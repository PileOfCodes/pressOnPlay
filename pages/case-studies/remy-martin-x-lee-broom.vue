<template>
    <div class="bg-[#F9B71B]">
        <div class="flex flex-col justify-center items-center md:flex-row md:flex-wrap 
        md:px-20 pt-20 leading-[70px] sm:leading-[90px] md:leading-[110px] 
        lg:leading-[130px] xl:leading-[150px] ">
            <div class="text-[5rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem]">REMY</div>
            <div class="text-[5rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem]">MARTIN</div>
            <div class="text-[5rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem]">X LEE </div>
            <div class="flex items-center">
                <div class="text-[5rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem]">BR</div>
                <BouncingCircle target="slug" />
                <div class="text-[5rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem] tracking-tighter">M</div>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row sm:justify-between text-[14px] gap-y-4 px-8 lg:px-16 xl:px-32 lg:pb-10 lg:pt-20 py-4">
            <div class="flex flex-col lg:flex-row lg:gap-x-4">
                <span>Designed with love for</span>
                <span>Rémy Martin</span>
            </div>
            <div class="flex flex-col lg:flex-row lg:gap-x-4">
                <span>Teamed with</span>
                <span>Hands Agency</span>
            </div>
            <div class="flex flex-col lg:flex-row lg:gap-x-4">
                <span>Our craft</span>
                <span>Adaptative music, Original Score, Sound Design</span>
            </div>
        </div>
        <CaseStudiesPlayBoard />
        <div class="py-8 px-5" ref="container_1">
            <div class="text-[40px] sm:text-[80px] sm:pr-10 sm:leading-[100px]" style="font-weight: 900;">Harmonizing Craftsmanship: Rémy Martin x Lee Broom's Symphony of Design and Sound</div>
            <div class="flex items-end justify-end">
                <div class="mt-32 text-[14px] leading-[15px] w-[200px] sm:w-[300px]" id="item1">Respecting heritage while pushing boundaries, that's our jam. When Rémy Martin and the prestigious British designer Lee Broom joined forces, we got the chance to compose the score for this spectacular fusion of craft and modernity. We shaped an exclusive original track for the key video and engineered the symphony of sounds for the interactive digital experience.</div>
            </div>
        </div>
    </div>
    <CaseStudiesAdSection >
        <template #header>
            <div class="w-full flex gap-x-2 md:gap-x-32 items-start" ref="container_2">
                <div class="flex w-52 items-center">
                <span class="w-3 h-3 rounded-full bg-black mr-1"></span>
                <span>Aromatic symphony</span>
                </div>
                <div class="text-[2.5rem] w-[350px] md:w-[500px] lg:w-3/4  leading-[40px] tracking-tighter" id="item2">Challenged to amplify not just the radiance and opulence of the blend, but also the aromatic symphony revealed with a single ice cube - we turned that frosty element into an icy melody, a cool thread running through our composition.</div>
            </div>
        </template>
        <template #circles>
            <span class="bg-[#F9B71B] circle">AM</span>
            <span class="bg-[#30e462] circle">OS</span>
            <span class="bg-[#1795f0] circle">SD</span>
        </template>
        <template #images>
            <div class="parallax-container relative overflow-hidden w-[340px] md:w-[540px] lg:w-[640px] xl:w-[800px] h-[200px] md:h-[340px] lg:h-[420px] rounded-xl mt-6">
                <NuxtImg src="/remy-1.jpg" class="parallax-image absolute w-full h-[300px] md:h-[460px] lg:h-[560px] object-contain scale-[1.2]  lg:scale-110" alt="keyboards" />
            </div>
            <div class="parallax-container relative overflow-hidden w-[160px] sm:w-[260px] md:w-[340px] h-[280px] md:h-[200px] lg:h-[280px] lg:w-[400px] rounded-xl mt-6">
                <NuxtImg src="/remy-2.jpeg" class="parallax-image absolute w-full h-[300px] md:h-[300px] lg:h-[320px] object-cover scale-[1.2]  lg:scale-110" alt="keyboards" />
            </div>
        </template>
        <template #footer>
            <div class="w-full flex gap-x-2 md:gap-x-32 items-start pt-10" ref="container_3">
                <div class="flex w-52 items-center">
                    <span class="w-3 h-3 rounded-full bg-black mr-1"></span>
                    <span>Eaux-de-vie</span>
                </div>
                <div class="text-[2.5rem] w-[350px] md:w-[500px] lg:w-3/4  leading-[40px] tracking-tighter" id="item3">Sculpting the iconic XO decanter's sound was like 'carving' hundreds of fine 'starburst' cuts into our musical score, each one reflecting the many eaux-de-vie within the Rémy Martin XO blend.</div>
            </div>
        </template>
    </CaseStudiesAdSection>
    <div class="lg:px-32  sm:px-10 md:px-20 mt-[100px] md:mt-[200px] lg:mt-[300px]" ref="remyContainer">
        <div class="bg-[#30e462] w-full rounded-2xl box pt-[100px] pb-[500px] md:py-[200px]">
            <CaseStudiesSnapContainer color="!bg-[#30e462]">
                <template #front>
                    <div class="text-[5rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem] leading-[100px] lg:leading-[140px]">HACK</div>
                    <div class="text-[5rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem] leading-[50px] sm:leading-[80px] md:leading-[140px] lg:leading-[150px]">MARKET</div>
                </template>
            </CaseStudiesSnapContainer>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import {usePlayerStore} from '@/store/Player'
import {storeToRefs} from 'pinia'
const playerStore = usePlayerStore()
const {isPlaying, player} = storeToRefs(playerStore)

onBeforeRouteLeave(() => {
    if(isPlaying.value) {
        player.value?.pause()
        isPlaying.value = false
    }
})

definePageMeta({
    layout: 'without-footer'
})
const router = useRouter()
const remyContainer = ref()
const container_1 = ref()
const container_2 = ref()
const container_3 = ref()
let ctx = ref()
let firstCtx = ref()
let secondCtx = ref()
let thirdCtx = ref()
onMounted(() => {
    firstCtx.value = gsap.context(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container_1.value,
                start: 'top 20%',
                end: 'bottom 70%',
            }
        })
        tl.fromTo('#item1', {
            y: 70,
            opacity: 0
        },{
            y: 0,
            opacity: 1
        })
    }, container_1.value)

    secondCtx.value = gsap.context(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container_2.value,
                start: 'top 50%',
                end: 'bottom 80%',
            }
        })
        tl.fromTo('#item2', {
            y: 70,
            opacity: 0
        },{
            y: 0,
            opacity: 1
        })
    }, container_2.value)
    
    thirdCtx.value = gsap.context(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container_3.value,
                start: 'top 50%',
                end: 'bottom 80%',
            }
        })
        tl.fromTo('#item3', {
            y: 70,
            opacity: 0
        },{
            y: 0,
            opacity: 1
        })
    }, container_3.value)

    ctx.value = gsap.context(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: remyContainer.value,
                start: '100px 10%',
                end: '+=4000',
                pin: true,
                anticipatePin: 1
            }
        })
        tl.to(remyContainer.value, {
            padding: '0'
        }).to('.box', {
            borderRadius: 'unset',
            y: -20,
            onComplete: () => {
                router.replace('/case-studies/hack-market')
            }
        })
    }, remyContainer.value)
})

onUnmounted(() => {
  ctx.value.revert()
  firstCtx.value.revert()
  secondCtx.value.revert()
  thirdCtx.value.revert()
})
</script>