<template>
    <div class="relative h-[400px] px-8 md:h-[200px] overflow-clip flex flex-col items-end md:flex-row md:items-center md:justify-between ">
        <div class="text-[8rem] md:text-[12rem] tracking-tight">PRESS</div>
        <div class="PressPlay PressPlay--shadows" :class="isPlaying ? 'PressPlay--back' : 'PressPlay--top'">
            <div class="PressPlay__container">
                <div  class="PressPlay__container__face PressPlay__container__face--front"></div>
                <div  class="PressPlay__container__face PressPlay__container__face--top">
                    <div class="absolute md:right-0 w-[660px] md:w-[560px] h-full overflow-clip flex items-center ">
                        <button @click="playerStore.togglePlay" >
                            <div ref="audioBox" class="">
                                <ClientOnly>
                                <Vue3Marquee :pause="isPlaying" :pauseOnHover="isPlaying" :duration="4" class="w-[600px]">
                                    <div
                                    v-for="(word, index) in words"
                                    :key="index"
                                    class="px-8"
                                    >
                                        <div class="uppercase text-[8rem] md:text-[11rem]">
                                            <span>{{ word }}</span>
                                        </div>
                                    </div>
                                </Vue3Marquee>
                                </ClientOnly>
                            </div>
                        </button>
                    </div>
                </div>
                <div  class="PressPlay__container__face PressPlay__container__face--back">
                    <div class="w-full h-full overflow-clip flex items-center justify-end md:justify-center pr-[120px] md:pl-28">
                        <button @click="playerStore.togglePlay" class="uppercase text-[6.5rem] md:text-[10rem] tracking-tighter">
                            PAUSE
                        </button>
                    </div>
                </div>
                <div  class="PressPlay__container__face PressPlay__container__face--bottom"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {usePlayerStore} from '@/store/Player'
import {storeToRefs} from 'pinia'
const emit = defineEmits(['sendAudioTrigger'])
const playerStore = usePlayerStore()
const {isPlaying} = storeToRefs(playerStore)
const words = ref(['PLAY', 'PLAY'])
const audioBox = ref<HTMLDivElement | null>(null)
emit('sendAudioTrigger', audioBox)
</script>

<style scoped>

:root {
--dark: #150c0f;
}

:deep(.vue3-marquee>.marquee) {
    min-width: 0 !important; 
    min-height: 0 !important;
}

.PressPlay {
    perspective: 100vw;  
    @apply relative w-[770px] h-[200px] text-black overflow-hidden
}

.PressPlay__container {
transform: translateZ(-100px) rotateX(0deg);
transform-style: preserve-3d;
@apply relative w-full h-full transition-transform duration-1000 ease-[cubic-bezier(.25,1,.5,1)]
}

.PressPlay>.PressPlay__container {
transition-duration: .65s;
}

.PressPlay:nth-child(2) {
z-index: 0;
}

.PressPlay__container__face {
width: 100%;
height: 100%;
position: absolute;
transition: opacity .6s cubic-bezier(.65,0,.35,1);
background-color: white;
text-align: center;
}

.PressPlay--top>.PressPlay__container {
transform: translateZ(-100px) rotateX(-90.1deg);
}

.PressPlay--back>.PressPlay__container {
transform:  rotateX(-180deg);
}

.PressPlay__container__face--front {
transform: rotateY(0deg) translateZ(100px);
}
.PressPlay__container__face--top {
transform: rotateX(90.1deg) translateZ(100px);
}
.PressPlay__container__face--back {
transform: translateZ(-100px) rotateY(-180deg) rotate(180deg);
}
.PressPlay__container__face--bottom {
transform: rotateX(-90.1deg) translateZ(100px);
}

.PressPlay--shadows .PressPlay__container__face:after {
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

.PressPlay--top>.PressPlay__container>.PressPlay__container__face--back:after {
    opacity: 0.2;
}
</style>