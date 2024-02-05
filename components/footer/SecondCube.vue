<template>
    <div class="FooterCube FooterCube--shadows" ref="container">
        <div class="FooterCube__container">
            <div   class="FooterCube__container__face FooterCube__container__face--front bg-black text-white"></div>
            <div  class="FooterCube__container__face FooterCube__container__face--top bg-black text-white">
                <div class="w-full h-full overflow-clip flex items-center justify-between ">
                    <div class="flex items-center gap-x-1">
                        <div class="text-[5rem] md:text-[13rem] tracking-tighter">T</div>
                        <BouncingCircle target="footer" :color="props.fromContact ? 'bg-black' : 'bg-white'" />
                        <div class="text-[5rem] md:text-[13rem] tracking-tighter">GETHER</div>
                    </div>
                    <div class="text-[12rem]"></div>
                </div>
            </div>
            <div  class="FooterCube__container__face FooterCube__container__face--back bg-black text-white">
                <div class="w-full h-full overflow-clip flex items-center justify-between ">
                    <div class="flex items-center gap-x-1">
                        <div class="text-[5rem] md:text-[13rem] tracking-tighter">T</div>
                        <BouncingCircle target="footer" :color="props.fromContact ? 'bg-black' : 'bg-white'" />
                        <div class="text-[5rem] md:text-[13rem] tracking-tighter">GETHER</div>
                    </div>
                    <div class="text-[12rem]"></div>
                </div>
            </div>
            <div  class="FooterCube__container__face FooterCube__container__face--bottom bg-black text-white"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
const container = ref()
const props = defineProps(['fromContact'])
let ctx = ref<any>()
onMounted(() => {
    ctx.value = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.value,
                start: '-200px 40%',
                end: '90% 90%',
                onEnter: function() {
                    container.value.classList.add('FooterCube--top');
                },
                onEnterBack: function() {
                    container.value.classList.add('FooterCube--back');
                },
                onLeave: function() {
                    container.value.classList.remove('FooterCube--back');
                },
                onLeaveBack: function() {
                    container.value.classList.remove('FooterCube--top');
                },
            }
        })   

    }, container.value) 
})

onUnmounted(() => {
    ctx.value.revert()
})
</script>