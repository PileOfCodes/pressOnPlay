<template>
    <div class="relative w-full bg-[#f4f5ef] pb-8 pt-5" ref="container">
        <div class="w-full flex gap-x-4 items-start md:justify-between px-5">
            <div class="flex items-start w-[120px]">
                <span class="w-3 h-3 rounded-full bg-black mr-1"></span>
                <span class="text-[13px] w-[70px]">Our values are simple ones</span>
            </div>
            <div class="text-[2.2rem] md:text-[2.5rem] md:mr-28 w-[310px] md:w-[900px] leading-[45px] tracking-tighter" id="item1">We believe in freedom, empathy, and always having a spare jack around.</div>
        </div>
        <div class="parallax-container relative overflow-hidden h-[340px] sm:h-[500px] md:h-[650px] lg:h-[700px] xl:h-[820px] mt-28">
            <NuxtImg src="/studio-1.jpg" class="parallax-image absolute w-full object-cover scale-[1.1] h-[400px] sm:h-[550px] md:h-[680px] lg:h-[750px] xl:h-[920px]" alt="studio" />
        </div>
        <div style="font-weight: 900" class="lg:hidden my-12 text-center mx-auto w-[400px] sm:w-[380px] md:w-[800px] text-[60px] sm:text-[90px] md:text-[110px]">Please don’t be quiet</div>
        <div class="lg:hidden my-12 px-5 flex items-center justify-center">
            <div class="w-full h-[250px] sm:h-[350px] md:h-[420px] mx-auto">
                <NuxtImg src="/img-4.jpg" class="w-full h-full object-cover rounded-xl" alt="girl"/>
            </div>
        </div>
        <div class="px-6 hidden lg:block">
            <div style="font-weight: 900" class="my-4 lg:text-[120px]">Please don’t</div>
            <div class="transition-all duration-75 z-50" 
            :style="`transform: translateX(${mouseX}px)`">
                <template v-for="(image, index) in dookieImages" :key="index">
                    <div class="w-[140px] h-[80px] lg:w-[260px] lg:h-[160px]"  v-if="index == current">
                        <img :src="image.src" class="w-full h-full object-cover rounded-md animatedImg" alt="">
                    </div>
                </template>
            </div>
            <div style="font-weight: 900" class="text-end mt-4 lg:text-[120px]">be quiet</div>
        </div>
        <div class="w-full flex items-center justify-center px-5">
            <div class="relative w-full lg:w-auto" id="item-3">
                <CustomeBtn btn-text="VIEW OUR WORK" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
const container = ref()
let ctx = ref<any>()
const backFace = ref<HTMLDivElement | null>(null)
const {x : mouseX} = useMouseInElement(backFace)

const current = ref(0)
const dookieImages = ref([
    {
        src: '/img-4.jpg'
    },
    {
        src: '/img-5.jpg'
    },
    {
        src: '/img-7.jpg'
    }
])

watch(mouseX, (newMouseVal) => {
    if(newMouseVal < 20) {
        mouseX.value = 20
    }else if(newMouseVal > 1040){
        mouseX.value = 1040
    }
    if(newMouseVal < 400) {
        current.value = 0
    }else if(newMouseVal > 400 && newMouseVal < 800){
        current.value = 1
    }else{
        current.value = 2
    }
})


onMounted(() => {
    gsap.utils.toArray(".parallax-container .parallax-image").forEach((section : any, i) => {
        const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;
        
        gsap.fromTo(section,{ 
            y: -heightDiff
        }, {
            scrollTrigger: {
            trigger: section,
            scrub: true
            },
            y: 0,
            ease: "none"
        });
    });

    ctx.value = gsap.context(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.value,
                start: '-300px 20%',
                end: 'bottom 70%'
            }
        })
        tl.fromTo('#item1', {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            duration: 0.6,
            opacity: 1
        })
    }, container.value)
})

onUnmounted(() => {
    ctx.value.revert()
})
</script>

	
