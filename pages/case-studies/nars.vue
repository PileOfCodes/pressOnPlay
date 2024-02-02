<template>
    <div class="bg-[#ff2803]">
        <div class="flex flex-col items-center justify-center pt-20">
            <div class="text-[4rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem] leading-[100px] lg:leading-[150px]">PLAY</div>
            <div class="flex items-center justify-center leading-[150px] leading-[30px] sm:leading-[80px] md:leading-[140px] lg:leading-[150px]">
                <span class="text-[4rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem] mr-2 lg:mr-2">Y</span>
                <BouncingCircle target="case" />
                <span class="text-[4rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem] ml-3 mr-3 md:ml-5 md:mr-5 lg:mr-6 lg:ml-6">UR P</span>
                <BouncingCircle target="case" />
                <span class="text-[4rem] lg:text-[11rem] sm:text-[6rem] md:text-[8rem] ml-2 md:ml-4 lg:ml-4">WER</span>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row sm:justify-between text-[14px] gap-y-4 px-8 lg:px-16 xl:px-32 lg:pb-10 lg:pt-20 py-4">
            <div class="flex flex-col lg:flex-row lg:gap-x-4">
                <span>Designed with love for</span>
                <span>Nars</span>
            </div>
            <div class="flex flex-col lg:flex-row lg:gap-x-4">
                <span>Teamed with</span>
                <span>makemepulse</span>
            </div>
            <div class="flex flex-col lg:flex-row lg:gap-x-4">
                <span>Our craft</span>
                <span>Original score, Sound design, UI Sounds</span>
            </div>
        </div>
        <CaseStudiesPlayBoard />
        <div class="py-8 px-5">
            <div class="text-[40px] sm:text-[80px] sm:pr-10 sm:leading-[100px]" style="font-weight: 900;">Immerse yourself in Powermatte-ropolis, where the roar of engines meets the thrill of a lipstick revolution.</div>
            <div class="flex items-end justify-end">
                <div class="mt-32 text-[14px] leading-[15px] w-[200px] sm:w-[300px]">Embark on a sonic journey through Powermatte-ropolis, a neon city pulsing with NARS's vibrant shades. As part of the "Play Your Power" campaign, we crafted an electrifying soundscape, mixing echoes of personal influences such as TRON and Akira with the cutting-edge spirit of NARS. The result? A thrilling auditory ride, fueling players' quest for the top score, with nostalgia-inspiring sound that touches the heart of Press Play On Tape.</div>
            </div>
        </div>
    </div>
    <CaseStudiesAdSection >
        <template #header>
            <div class="w-full flex gap-x-2 md:gap-x-32 items-start" ref="container-1">
                <div class="flex w-52 items-center">
                <span class="w-3 h-3 rounded-full bg-black mr-1"></span>
                <span>Cyberpunk symphony</span>
                </div>
                <div class="text-[2.5rem] w-[350px] md:w-[500px] lg:w-3/4  leading-[40px] tracking-tighter" id="item-1">Echoing the sounds of the 80s classics, we crafted a cyberpunk symphony of roaring engines and ethereal synths. This is the sound of a city that thrives on lipstick power and the thrill of the chase.</div>
            </div>
        </template>
        <template #circles>
            <span class="bg-[#F9B71B] circle">OS</span>
            <span class="bg-[#1795f0] circle">SD</span>
            <span class="bg-[#30e462] circle">US</span>
        </template>
        <template #images>
            <div class="parallax-container relative overflow-hidden w-[340px] md:w-[540px] lg:w-[640px] xl:w-[800px] h-[200px] md:h-[340px] lg:h-[420px] rounded-xl mt-6">
                <NuxtImg src="/nars-1.jpg" class="parallax-image absolute w-full h-[300px] md:h-[460px] lg:h-[560px] object-contain scale-[1.2]  lg:scale-110" alt="keyboards" />
            </div>
            <div class="parallax-container relative overflow-hidden w-[160px] sm:w-[260px] md:w-[340px] h-[280px] md:h-[200px] lg:h-[320px] lg:w-[480px] rounded-xl mt-6">
                <NuxtImg src="/nars-2.jpg" class="parallax-image absolute w-full h-[300px] md:h-[300px] lg:h-[340px] object-cover scale-[1.2]  lg:scale-110" alt="keyboards" />
            </div>
        </template>
        <template #footer>
            <div class="w-full flex gap-x-2 md:gap-x-32 items-start pt-10" ref="container-2">
                <div class="flex w-52 items-center">
                    <span class="w-3 h-3 rounded-full bg-black mr-1"></span>
                    <span>Three players</span>
                </div>
                <div class="text-[2.5rem] w-[350px] md:w-[500px] lg:w-3/4  leading-[40px] tracking-tighter" id="item-1">In Powermatte-ropolis, every shade of lipstick has its unique roar, its unique rhythm. We created distinct soundtracks for each of the three players - Dragon Girl, Too Hot To Hold and American Woman. As the player, you are not just riding a bike; you are riding the wave of your chosen soundtrack, your chosen power.</div>
            </div>
        </template>
    </CaseStudiesAdSection>
    <div class="lg:px-32 px-6 sm:px-10 md:px-20 mt-[100px] md:mt-[200px] lg:mt-[300px]" ref="narsContainer">
        <div class="bg-[#F9B71B] w-full rounded-2xl box pt-[100px] pb-[500px] md:py-[200px]">
            <CaseStudiesSnapContainer color="!bg-[#F9B71B]">
                <template #front>
                    <div class="flex flex-col justify-center items-center">
                        <div class="flex gap-x-8  leading-[100px] lg:leading-[140px]">
                            <div class="text-[5rem] lg:text-[10rem] sm:text-[6rem] md:text-[8rem]">REMY</div>
                            <div class="text-[5rem] lg:text-[10rem] sm:text-[6rem] md:text-[8rem]">MARTIN</div>
                        </div>
                        <div class="flex items-center leading-[150px] leading-[50px] sm:leading-[80px] md:leading-[140px] lg:leading-[150px]">
                            <div class="text-[5rem] lg:text-[10rem] sm:text-[6rem] md:text-[8rem] ">X LEE </div>
                            <div class="flex items-center leading-[50px] sm:leading-[80px] md:leading-[140px] lg:leading-[150px]">
                                <div class="text-[5rem] lg:text-[10rem] sm:text-[6rem] md:text-[8rem]">BR</div>
                                <div class="w-[22px] h-[22px] scale-[2] md:w-8 md:h-8 lg:w-[54px] lg:h-[54px] mx-8 bg-black rounded-full"></div>
                                <div class="w-[22px] h-[22px] scale-[2] md:w-8 md:h-8 lg:w-[54px] lg:h-[54px] mx-8 bg-black rounded-full"></div>
                                <div class="text-[5rem] lg:text-[10rem] sm:text-[6rem] md:text-[8rem] tracking-tighter">M</div>
                            </div>
                        </div>
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
const narsContainer = ref()
const router = useRouter()
let ctx = ref()
onMounted(() => {
    ctx.value = gsap.context(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: narsContainer.value,
                start: '100px 10%',
                end: '+=4000',
                pin: true,
                anticipatePin: 1,
            }
        })
        tl.to(narsContainer.value, {
            padding: '0'
        }).to('.box', {
            borderRadius: 'unset',
            y: -20,
            onComplete: () => {
                router.replace('/case-studies/remy-martin-x-lee-broom')
            }
        })
    }, narsContainer.value)
})

onUnmounted(() => {
    ctx.value.revert()
})
</script>