<template>
    <div class="FooterCube FooterCube--shadows'" ref="container">
        <div class="FooterCube__container">
            <div :class="props.fromContact ? 'bg-white text-black' : 'bg-black text-white'"  class="FooterCube__container__face FooterCube__container__face--front"></div>
            <div :class="props.fromContact ? 'bg-white text-black' : 'bg-black text-white'" class="FooterCube__container__face FooterCube__container__face--top">
                <div class="w-full h-full overflow-clip flex items-center justify-between ">
                    <div class="text-[5rem] md:text-[13rem] tracking-tighter">LET'S</div>
                    <div class="text-[5rem] md:text-[13rem] tracking-tighter md:pr-6">PLAY</div>
                </div>
            </div>
            <div :class="props.fromContact ? 'bg-white text-black' : 'bg-black text-white'"  class="FooterCube__container__face FooterCube__container__face--back">
                <div class="w-full h-full overflow-clip flex items-center justify-between">
                    <div class="text-[5rem] md:text-[13rem] tracking-tighter">LET'S</div>
                    <div class="text-[5rem] md:text-[13rem] tracking-tighter md:pr-6">PLAY</div>
                </div>
            </div>
            <div  :class="props.fromContact ? 'bg-white text-black' : 'bg-black text-white'" class="FooterCube__container__face FooterCube__container__face--bottom"></div>
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
        gsap.timeline({
        scrollTrigger: {
            trigger: container.value,
            start: '-100px 60%',
            end: 'bottom 100%',
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

<style>
:root {
--dark: #150c0f;
}

.FooterCube {
position: relative;
width: 100%;
height: 200px;
color: black;
perspective: 5000px; 
overflow: hidden;
}

.FooterCube__container {
height: 100%;
position: relative;
transform: translateZ(-100px) rotateX(0deg);
transform-style: preserve-3d;
transition: transform 1s cubic-bezier(.25,1,.5,1);
width: 100%;
}

.FooterCube > .FooterCube__container {
transition-duration: .65s;
}

.FooterCube:nth-child(2) {
    z-index: 0;
}

.FooterCube__container__face {
    @apply w-full h-full text-center absolute transition-opacity duration-[0.6s] ease-[cubic-bezier(.65,0,.35,1)]
}

.FooterCube--top>.FooterCube__container {
transform: translateZ(-100px) rotateX(-90.1deg);
}

.FooterCube--back>.FooterCube__container {
transform:  rotateX(-180deg);
}

.FooterCube__container__face--front {
transform: rotateY(0deg) translateZ(100px);
}
.FooterCube__container__face--top {
transform: rotateX(90.1deg) translateZ(100px);
}
.FooterCube__container__face--back {
transform: translateZ(-100px) rotateY(-180deg) rotate(180deg);
}
.FooterCube__container__face--bottom {
transform: rotateX(-90.1deg) translateZ(100px);
}

.FooterCube--shadows .FooterCube__container__face:after {
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

.FooterCube--top>.FooterCube__container>.FooterCube__container__face--back:after {
opacity: 0.2;
}

@media screen and (max-width: 800px) {
    .FooterCube {
    height: 100px;
}

.FooterCube__container {
    transform: translateZ(-50px) rotateX(0deg);
}

.FooterCube--top>.FooterCube__container {
    transform: translateZ(-50px) rotateX(-90.1deg);
}

.FooterCube--back>.FooterCube__container {
    transform:  rotateX(-180deg);
}

.FooterCube__container__face--front {
    transform: rotateY(0deg) translateZ(50px);
}
.FooterCube__container__face--top {
    transform: rotateX(90.1deg) translateZ(50px);
}
.FooterCube__container__face--back {
    transform: translateZ(-50px) rotateY(-180deg) rotate(180deg);
}
.FooterCube__container__face--bottom {
    transform: rotateX(-90.1deg) translateZ(50px);
}
}
</style>