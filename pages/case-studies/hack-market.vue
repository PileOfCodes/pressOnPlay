<template>
    <div class="bg-[#30e462]">
        <div class="flex flex-col justify-center items-center md:flex-row md:flex-wrap 
        md:px-20 pt-20 leading-[70px] sm:leading-[90px] md:leading-[110px] 
        lg:leading-[130px] xl:leading-[150px] ">
            <div class="text-[5rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem]">HACK</div>
            <div class="text-[5rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem]">MARKET</div>
        </div>
        <div class="flex flex-col sm:flex-row sm:justify-between text-[14px] gap-y-4 px-8 lg:px-16 xl:px-32 lg:pb-10 lg:pt-20 py-4">
            <div class="flex flex-col lg:flex-row lg:gap-x-4">
                <span>Designed with love for</span>
                <span>Back Market</span>
            </div>
            <div class="flex flex-col lg:flex-row lg:gap-x-4">
                <span>Teamed with</span>
                <span>Marcel Worldwide</span>
            </div>
            <div class="flex flex-col lg:flex-row lg:gap-x-4">
                <span>Our craft</span>
                <span>Sound Design, Audio Post</span>
            </div>
        </div>
        <CaseStudiesPlayBoard />
        <div class="py-8 px-5">
            <div class="text-[40px] sm:text-[80px] sm:pr-10 sm:leading-[100px]" style="font-weight: 900;">Crafting the sound of digital rebellion – one AirDrop at a time.</div>
            <div class="flex items-end justify-end">
                <div class="mt-32 text-[14px] leading-[15px] w-[200px] sm:w-[300px]">In honor of Earth Day 2022, Press Play On Tape played its role in Back Market's 'Hack Market'. Our mission? Craft the sound engineering that gave voice to the ethos of reconditioned electronics. We harmonized voices advocating sustainable practices and fine-tuned the familiar sounds of AirDrop notifications, adding our characteristic vintage flair.</div>
            </div>
        </div>
    </div>
    <CaseStudiesAdSection>
        <template #header>
            <div class="w-full flex gap-x-2 md:gap-x-32 items-start" ref="container-1">
                <div class="flex w-52 items-center">
                <span class="w-3 h-3 rounded-full bg-black mr-1"></span>
                <span>Greener world</span>
                </div>
                <div class="text-[2.5rem] w-[350px] md:w-[500px] lg:w-3/4  leading-[40px] tracking-tighter" id="item-1">The sharp 'ping' of an AirDrop, the voices advocating for a greener world - we weaved them into a sonic tapestry that amplified the call for sustainable electronics.</div>
            </div>
        </template>
        <template #circles>
            <span class="bg-[#F9B71B] circle">SD</span>
            <span class="bg-[#1795f0] circle">AP</span>
        </template>
        <template #images>
            <div class="parallax-container relative overflow-hidden w-[340px] md:w-[540px] lg:w-[640px] xl:w-[800px] h-[200px] md:h-[340px] lg:h-[420px] rounded-xl mt-6">
                <NuxtImg src="/hack-1.jpg" class="parallax-image absolute w-full h-[300px] md:h-[460px] lg:h-[560px] object-contain scale-[1.2]  lg:scale-110" alt="keyboards" />
            </div>
            <div class="parallax-container relative overflow-hidden w-[220px] sm:w-[260px] md:w-[340px] h-[120px] md:h-[200px] lg:h-[280px] lg:w-[400px] rounded-xl mt-6">
                <NuxtImg src="/hack-2.jpg" class="parallax-image absolute w-full h-[180px] md:h-[300px] lg:h-[320px] object-cover scale-[1.2]  lg:scale-110" alt="keyboards" />
            </div>
        </template>
    </CaseStudiesAdSection>
    <div class="lg:px-32 sm:px-10 md:px-20 mt-[100px] md:mt-[200px] lg:mt-[300px]" ref="hackContainer">
        <div class="bg-[#1795f0] w-full rounded-2xl box pt-[100px] pb-[500px] md:py-[200px]">
            <CaseStudiesSnapContainer color="!bg-[#1795f0]">
                <template #front>
                    <div class="text-[5rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem] leading-[100px] lg:leading-[140px]">SAMARITAIN</div>
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
const hackContainer = ref()
const router = useRouter()
let ctx = ref()
onMounted(() => {
    ctx.value = gsap.context(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: hackContainer.value,
                start: '100px 10%',
                end: '+=4000',
                pin: true,
                anticipatePin: 1
            }
        })
        tl.to(hackContainer.value, {
            padding: '0'
        }).to('.box', {
            borderRadius: 'unset',
            y: -20,
            onComplete: () => {
                router.replace('/case-studies/samaritain')
            }
        })
    }, hackContainer.value)
})

onUnmounted(() => {
    ctx.value.revert()
})
</script>