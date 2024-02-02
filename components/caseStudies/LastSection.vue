<template>
    <div class="relative w-full bg-[#f4f5ef]" ref="container">
        <div style="font-weight: 900" class="lg:hidden my-8 text-center mx-auto w-[400px] sm:w-[380px] md:w-[800px] text-[60px] sm:text-[90px] md:text-[110px]">Success Stories</div>
        <div class="lg:hidden my-12 px-5 flex items-center justify-center">
            <div class="w-full h-[250px] sm:h-[350px] md:h-[420px] mx-auto">
                <NuxtImg src="/mic.jpg" class="w-full h-full object-cover rounded-xl" alt="girl"/>
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
        <div id="item1" class="w-full flex items-center justify-center px-5">
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
        src: '/claireDorn.jpg'
    },
    {
        src: '/mic.jpg'
    },
    {
        src: '/cassett.jpg'
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

	
