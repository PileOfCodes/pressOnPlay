<template>
    <div v-if="props.target == 'firstCircle'">
        <span ref="circle1" class="hidden"></span>
        <span ref="circle2" class="hidden"></span>
        <span ref="circle3" class="hidden"></span>
        <span ref="circle4" class="hidden"></span>
        <span ref="circle5" class="inline-block w-8 h-8 scale-[2] sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px] bg-black rounded-full"></span>
    </div>
    <div v-else-if="props.target == 'case'" class="flex items-center">
        <span ref="circle1" class="hidden"></span>
        <span ref="circle2" class="hidden"></span>
        <span ref="circle3" class="hidden"></span>
        <span ref="circle4" class="hidden"></span>
        <div ref="circle5" class="w-[22px] h-[22px] scale-[2] sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[68px] lg:h-[68px] bg-black rounded-full"></div>
    </div>
    <div v-else-if="props.target == 'slug'" class="flex items-center">
        <span ref="circle1" class="inline-block w-[30px] h-[30px] sm:w-[37px] sm:h-[37px] scale-[2] md:w-[45px] md:h-[45px] lg:w-[70px] lg:h-[70px] bg-black rounded-full ml-3 mr-4 sm:mr-5 sm:ml-4 md:mx-6 lg:ml-8 lg:mr-8"></span>
        <span ref="circle2" class="hidden"></span>
        <span ref="circle3" class="hidden"></span>
        <span ref="circle4" class="hidden"></span>
        <span ref="circle5" class="inline-block w-[30px] h-[30px] sm:w-[37px] sm:h-[37px] scale-[2] md:w-[45px] md:h-[45px] lg:w-[70px] lg:h-[70px] bg-black rounded-full ml-4 mr-3 sm:ml-5 sm:mr-4 md:mx-6 lg:ml-10 lg:mr-8"></span>
    </div>
    <div v-else-if="props.target == 'secondCircle'">
        <span ref="circle1" class="inline-block w-8 h-8 scale-[2] sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px] bg-black rounded-full"></span>
        <span ref="circle2" class="hidden"></span>
        <span ref="circle3" class="hidden"></span>
        <span ref="circle4" class="hidden"></span>
        <span ref="circle5" class="hidden"></span>
    </div>
    <div v-else-if="props.target == 'footer'">
        <span ref="circle1" class="hidden"></span>
        <span ref="circle2" class="hidden"></span>
        <span ref="circle3" class="hidden"></span>
        <span ref="circle4" class="hidden"></span>
        <span ref="circle5" :class="props.color" class="inline-block w-[28px] scale-[2] h-[28px] mr-3 ml-4 md:ml-10 md:mr-10 md:w-[70px] md:h-[70px] rounded-full"></span>
    </div>
    <div v-else-if="props.target == 'visualiser'" class="w-full h-full overflow-clip flex items-center justify-between px-8 md:px-20">
        <div class="flex items-center">
            <div class="w-8 h-8 lg:w-20 lg:h-20 bg-black rounded-full" ref="circle1"></div>
            <div class="w-8 h-8 lg:w-20 lg:h-20 bg-black rounded-full ml-12 md:ml-24" ref="circle2"></div>
        </div>
        <div class="flex items-center">
            <div class="w-8 h-8 lg:w-20 lg:h-20 bg-black rounded-full" ref="circle3"></div>
            <div class="w-8 h-8 lg:w-20 lg:h-20 bg-black rounded-full ml-12 md:ml-24" ref="circle4"></div>
        </div>
        <div>
            <div class="w-8 h-8 lg:w-20 lg:h-20 bg-black rounded-full" ref="circle5"></div>
        </div>
    </div>
    <div v-else class="relative w-[340px] h-[260px] lg:w-[500px] lg:h-[300px]">
        <span ref="circle1" class="absolute left-24 lg:left-48 top-0 w-12 h-12 scale-[2] lg:w-16 lg:h-16 bg-black rounded-full"></span>
        <span ref="circle2" class="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 scale-[2] lg:w-16 lg:h-16 bg-black rounded-full"></span>
        <span ref="circle3" class="hidden"></span>
        <span ref="circle4" class="hidden"></span>
        <span ref="circle5" class="absolute left-24 lg:left-48 bottom-0 w-12 h-12 scale-[2] lg:w-16 lg:h-16 bg-black rounded-full"></span>
    </div>
</template>

<script setup lang="ts">
import {inject} from 'vue'
import {usePlayerStore} from '@/store/Player'
import {useVisualiserStore} from '@/store/visualiser'

import {storeToRefs} from 'pinia'

const useVisualiser = useVisualiserStore()
const {analyser, frequencyData, ctx} = storeToRefs(useVisualiser)
const props = defineProps(['target', 'color'])
const audioBox = inject<any>('audioTrigger')
const menuAudioBox = inject<any>('menuAudioTrigger')
const playerStore = usePlayerStore()
const {isPlaying, player} = storeToRefs(playerStore)
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
        if(circle3.value) circle3.value.style.transform = 'scale(2)'
        if(circle4.value) circle4.value.style.transform = 'scale(2)'
        if(circle5.value) circle5.value.style.transform = 'scale(2)'
    }
    function implementation() {
        ctx.value?.resume()
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