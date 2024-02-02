<template>
    <div class="bg-[#1795f0]">
        <div class="flex flex-col justify-center items-center md:flex-row md:flex-wrap 
        md:px-20 pt-20 leading-[70px] sm:leading-[90px] md:leading-[110px] 
        lg:leading-[130px] xl:leading-[150px] ">
            <div class="text-[5rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem]">SAMARITAIN</div>
        </div>
        <div class="flex flex-col sm:flex-row sm:justify-between text-[14px] gap-y-4 px-8 lg:px-16 xl:px-32 lg:pb-10 lg:pt-20 py-4">
            <div class="flex flex-col lg:flex-row lg:gap-x-4">
                <span>Designed with love for</span>
                <span>LVMH</span>
            </div>
            <div class="flex flex-col lg:flex-row lg:gap-x-4">
                <span>Teamed with</span>
                <span>DFS</span>
            </div>
            <div class="flex flex-col lg:flex-row lg:gap-x-4">
                <span>Our craft</span>
                <span>Original Score, Voice Over</span>
            </div>
        </div>
        <CaseStudiesPlayBoard />
        <div class="py-8 px-5">
            <div class="text-[40px] sm:text-[80px] sm:pr-10 sm:leading-[100px]" style="font-weight: 900;">Unveiling history with a modern twist: the soundtrack of Samaritaine.</div>
            <div class="flex items-end justify-end">
                <div class="mt-32 text-[14px] leading-[15px] w-[200px] sm:w-[300px]">When LVMH tasked Press Play On Tape with scoring the online comeback of the iconic Samaritaine, we jumped at the chance. We composed a track named "Pont Neuf", a blend of 60s vibes and modern composition, infusing a touch of vintage charm into Samaritaine's bold revival.</div>
            </div>
        </div>
    </div>
    <CaseStudiesAdSection>
        <template #header>
            <div class="w-full flex gap-x-2 md:gap-x-32 items-start" ref="container-1">
                <div class="flex w-52 items-center">
                <span class="w-3 h-3 rounded-full bg-black mr-1"></span>
                <span>Iconic identity</span>
                </div>
                <div class="text-[2.5rem] w-[350px] md:w-[500px] lg:w-3/4  leading-[40px] tracking-tighter" id="item-1">Crafting music for Samaritaine was like playing with history. Its iconic identity became a love letter in notes and melodies.</div>
            </div>
        </template>
        <template #circles>
            <span class="bg-[#F9B71B] circle">OS</span>
            <span class="bg-[#1795f0] circle">VO</span>
        </template>
        <template #images>
            <div class="parallax-container relative overflow-hidden w-[340px] md:w-[540px] lg:w-[640px] xl:w-[840px] h-[200px] md:h-[340px] lg:h-[520px] rounded-xl mt-6">
                <NuxtImg src="/samaritain-1.jpg" class="parallax-image absolute w-full h-[300px] md:h-[460px] lg:h-[560px] object-contain scale-[1.2]  lg:scale-110" alt="keyboards" />
            </div>
            <div class="parallax-container relative overflow-hidden w-[220px] sm:w-[260px] md:w-[400px] h-[120px] md:h-[200px] lg:h-[320px] lg:w-[400px] rounded-xl mt-6">
                <NuxtImg src="/samaritain-2.jpg" class="parallax-image absolute w-full h-[180px] md:h-[300px] lg:h-[340px] object-cover scale-[1.2]  lg:scale-110" alt="keyboards" />
            </div>
        </template>
        <template #footer>
            <div class="w-full flex gap-x-2 md:gap-x-32 items-start pt-10" ref="container-2">
                <div class="flex w-52 items-center">
                    <span class="w-3 h-3 rounded-full bg-black mr-1"></span>
                    <span>Nostalgia</span>
                </div>
                <div class="text-[2.5rem] w-[350px] md:w-[500px] lg:w-3/4  leading-[40px] tracking-tighter" id="item-1">With vintage beats and lush vocals, every note in 'Pont Neuf' is a hint of nostalgia yet resolutely fresh and catchy.</div>
            </div>
        </template>
    </CaseStudiesAdSection>
    <div class="lg:px-32 sm:px-10 md:px-20 mt-[100px] md:mt-[200px] lg:mt-[300px]" ref="samContainer">
        <div class="bg-[#ff2803] w-full rounded-2xl box pt-[100px] pb-[500px] md:py-[200px]">
            <CaseStudiesSnapContainer color="!bg-[#ff2803]">
                <template #front>
                    <div class="text-[4rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem] leading-[100px] lg:leading-[140px]">PLAY</div>
                    <div class="flex items-center justify-center leading-[50px] sm:leading-[80px] md:leading-[140px] lg:leading-[150px]">
                        <span class="text-[4rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem] mr-1 sm:mr-2 lg:mr-2">Y</span>
                        <div class="w-[22px] h-[22px] scale-[2] sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[54px] lg:h-[54px] bg-black rounded-full mr-2"></div>
                        <span class="text-[4rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem] mr-1 sm:mx-2  lg:mr-6 lg:ml-6">UR P</span>
                        <div class="w-[22px] h-[22px] scale-[2] sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[54px] lg:h-[54px] bg-black rounded-full ml-1 sm:mx-2 "></div>
                        <span class="text-[4rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem] ml-1 lg:ml-4">WER</span>
                    </div>
                </template>
            </CaseStudiesSnapContainer>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
definePageMeta({
    layout: 'without-footer'
})
const samContainer = ref()
const router = useRouter()
let ctx = ref()
onMounted(() => {
    ctx.value = gsap.context(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: samContainer.value,
                start: '100px 10%',
                end: '+=4000',
                pin: true,
                anticipatePin: 1
            }
        })
        tl.to(samContainer.value, {
            padding: '0',
        }).to('.box', {
            borderRadius: 'unset',
            y: -20,
            onComplete: () => {
                router.replace('/case-studies/nars')
            }
        })
    }, samContainer.value)
})

onUnmounted(() => {
    ctx.value.revert()
})
</script>