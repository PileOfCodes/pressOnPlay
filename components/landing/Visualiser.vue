<template>
    <div class="Perspective Perspective--shadows" :class="isPlaying ? 'Perspective--top' : 'Perspective--front'">
        <div class="Perspective__container">
            <div  class="Perspective__container__face Perspective__container__face--front">
                <div class="w-full h-full overflow-clip flex items-center justify-end md:justify-center">
                    <div class="uppercase pr-[6%] md:pr-[30%]">
                        <span class="inline-block w-36 h-36 bg-black rounded-full"></span>
                        <span class="text-[12.3rem]">n</span>
                    </div>
                </div>
            </div>
            <div  class="Perspective__container__face Perspective__container__face--top">
                <div class="w-full h-full overflow-clip flex items-center justify-between px-8 md:px-20">
                    <div>
                        <span class="inline-block w-8 h-8 lg:w-20 lg:h-20 bg-black rounded-full" ref="circle1"></span>
                        <span class="inline-block w-8 h-8 lg:w-20 lg:h-20 bg-black rounded-full ml-12 md:ml-24" ref="circle2"></span>
                    </div>
                    <div>
                        <span class="inline-block w-8 h-8 lg:w-20 lg:h-20 bg-black rounded-full" ref="circle3"></span>
                        <span class="inline-block w-8 h-8 lg:w-20 lg:h-20 bg-black rounded-full ml-12 md:ml-24" ref="circle4"></span>
                    </div>
                    <div>
                        <span class="inline-block w-8 h-8 lg:w-20 lg:h-20 bg-black rounded-full" ref="circle5"></span>
                    </div>
                </div>
            </div>
            <div  class="Perspective__container__face Perspective__container__face--back">

            </div>
            <div  class="Perspective__container__face Perspective__container__face--bottom"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {inject} from 'vue'
import {usePlayerStore} from '@/store/Player'
import {useVisualiserStore} from '@/store/visualiser'
import {storeToRefs} from 'pinia'
const props = defineProps(['audioBox'])

const audioBox = inject<any>('audioTrigger')
const menuAudioBox = inject<any>('menuAudioTrigger')
const playerStore = usePlayerStore()
const visualiserStore = useVisualiserStore()
const {isPlaying} = storeToRefs(playerStore)
const {frequencyData, analyser} = storeToRefs(visualiserStore)
const circle1 = ref<HTMLSpanElement | null>(null)
const circle2 = ref<HTMLSpanElement | null>(null)
const circle3 = ref<HTMLSpanElement | null>(null)
const circle4 = ref<HTMLSpanElement | null>(null)
const circle5 = ref<HTMLSpanElement | null>(null)
let interval = ref<any>(null)
onMounted(() => {
    function defaultCircle() {
        if(circle1.value) circle1.value.style.transform = 'scale(2)'
        if(circle2.value) circle2.value.style.transform = 'scale(2)'
        if(circle5.value) circle5.value.style.transform = 'scale(2)'
    }
    function implementation() {

        if(!isPlaying.value) {
            interval.value = setInterval(() => {
            analyser.value?.getByteFrequencyData(frequencyData.value)
            const ranges = [
                { min: 0, max: 100 },
                { min: 100, max: 200 },
                { min: 200, max: 300 },
                { min: 300, max: 400 },
                { min: 400, max: 510 }
            ]
            for (let index = 0; index < 5; index++) {
                const fd = frequencyData.value[index]
                const range = ranges[index];
                const result = (fd - range.min) / (range.max - range.min)
                const scale = Math.max(0.7 , Math.min(2.1, Math.abs(result))) 
                const circle = eval(`circle${index + 1}.value`);
                if (circle) {
                    circle.style.transition = 'all 0.05s'
                    circle.style.transform = `scale(${scale})`;
                }
            }
            }, 1)
        }else {
            clearInterval(interval.value)
            defaultCircle()
        }
    }

    props.audioBox.value?.addEventListener('click', function() {
        implementation()
    })

    audioBox.value?.value.addEventListener('click', function(){
        implementation()
    })

    menuAudioBox.value?.value.addEventListener('click', function(){
        implementation()
    })
})

onUnmounted(() => {
    clearInterval(interval.value)
})
</script>

<style>

:root {
    --dark: #150c0f;
}

.Perspective {
    position: relative;
    width: 100%;
    height: 200px;
    color: black;
    perspective: 100vw; 
    overflow: hidden;
}

.Perspective__container {
    transform-style: preserve-3d;
    transform: translateZ(-100px) rotateX(0deg);
    @apply relative w-full h-full transition-transform duration-1000 ease-[cubic-bezier(.25,1,.5,1)]
}

.Perspective>.Perspective__container {
    transition-duration: .65s;
}

.Perspective:nth-child(2) {
    z-index: 0;
}

.Perspective__container__face {
    @apply w-full h-full text-center bg-[#1795f0] absolute transition-opacity duration-[0.6s] ease-[cubic-bezier(.65,0,.35,1)]
}

.Perspective--top>.Perspective__container {
    transform: translateZ(-100px) rotateX(-90.1deg);
}

.Perspective--front>.Perspective__container {
    transform:  translateZ(-100px) rotateX(0deg);
}

.Perspective__container__face--front {
    transform: rotateY(0deg) translateZ(100px);
}
.Perspective__container__face--top {
    transform: rotateX(90.1deg) translateZ(100px);
}
.Perspective__container__face--back {
    transform: translateZ(-100px) rotateY(-180deg) rotate(180deg);
}
.Perspective__container__face--bottom {
    transform: rotateX(-90.1deg) translateZ(100px);
}

.Perspective--shadows .Perspective__container__face:after {
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

.Perspective--top>.Perspective__container>.Perspective__container__face--back:after {
    opacity: 0.2;
}
</style>



