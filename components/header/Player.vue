<template>
    <button @click="playerStore.togglePlay" class="relative">
        <div ref="audioBox" :class="props.isVertical ? 'w-[1400px]' : 'w-[70px] hover:scale-[1.4]'" class="marquee_container scale-1 transition-all duration-300">
            <ClientOnly>
                <Transition name="slide-up" mode="out-in" appear>
                    <Vue3Marquee v-if="isPlaying == false" :clone="true"  :pause="isPlaying" :pauseOnHover="isPlaying" :duration="1" class="h-[20px] leading-[20px]">
                        <div
                        v-for="(word, index) in words"
                        :key="index"
                        class="px-2"
                        >
                            <div class="flex items-center">
                                <span>{{ word }}</span>
                                <Icon name="ph:play-fill" />
                            </div>
                        </div>
                    </Vue3Marquee>
                    <div v-else :class="props.isVertical ? 'flex items-center absolute left-6' : 'flex items-center justify-center'">
                        <span>PAUSE</span>
                        <Icon name="ph:pause-fill" />
                    </div>
                </Transition>
            </ClientOnly>
        </div>
    </button>
</template>

<script setup lang="ts">
import {usePlayerStore} from '@/store/Player'
import {storeToRefs} from 'pinia'
const props = defineProps(['isVertical'])
const emit = defineEmits(['sendAudioTrigger'])

const playerStore = usePlayerStore()
const {isPlaying} = storeToRefs(playerStore )
const words = ref(['PLAY'])
const audioBox = ref<HTMLDivElement | null>(null)
emit('sendAudioTrigger', audioBox)

</script>


<style>
.marquee_container {
    @apply bg-black h-[20px] leading-[20px] rounded-[4px] text-white text-[14px] flex items-center justify-center relative
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.15s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>