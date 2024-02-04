<template>
    <div class="mt-32 mb-10">
        <CaseStudiesPerspectiveContainer frontColor="!bg-[#F9B71B]" color="!bg-white" topColor="!bg-white">
            <template #front>
                <NuxtLink to="/case-studies/remy-martin-x-lee-broom" >
                    <ClientOnly>
                        <Vue3Marquee  :duration="9">
                            <div class="w-full h-full overflow-clip flex items-center text-center lg:leading-[200px]">
                                <span class="text-[4rem] lg:text-[11rem] md:text-[6rem] mr-3 md:mr-4 lg:mr-8">REMY MARTIN X LEE BR</span>
                                <div class="flex items-end gap-x-6 md:gap-x-10 lg:gap-x-[70px]">
                                    <BouncingCircle  target="case" />
                                    <BouncingCircle  target="case" />
                                </div>
                                <span class="text-[4rem] lg:text-[11rem] md:text-[6rem] ml-3 md:ml-4 lg:ml-8">M</span>
                            </div>
                        </Vue3Marquee>
                    </ClientOnly>
                </NuxtLink>
            </template>
            <template #top>
                <NuxtLink to="/case-studies/remy-martin-x-lee-broom" class="text-nowrap text-clip w-full h-full overflow-clip flex items-center justify-between">
                    <span class="text-[4rem] lg:text-[11rem] md:text-[6rem]">REMY MARTIN X LEE BR</span>
                    <span class="w-12 h-12 md:w-16 md:h-16 lg:w-36 lg:h-36 bg-black rounded-full"></span>
                    <span class="w-12 h-12 md:w-16 md:h-16 lg:w-36 lg:h-36 bg-black rounded-full ml-1"></span>
                    <span class="text-[4rem] lg:text-[11rem] md:text-[6rem] tracking-tighter">M</span>
                </NuxtLink>
            </template>
        </CaseStudiesPerspectiveContainer>
        <CaseStudiesPerspectiveContainer frontColor="!bg-[#30e462]" color="!bg-white" topColor="!bg-white">
            <template #front>
                <NuxtLink to="/case-studies/hack-market" >
                    <ClientOnly>
                        <Vue3Marquee  :duration="9">
                            <div class="w-full h-full overflow-clip flex items-center text-center lg:leading-[200px]">
                                <span class="text-[4rem] lg:text-[11rem] md:text-[6rem] ">HACK MARKET</span>
                            </div>
                        </Vue3Marquee>
                    </ClientOnly>
                </NuxtLink>
            </template>
            <template #top>
                <NuxtLink to="/case-studies/hack-market" class="text-nowrap text-clip w-full h-full overflow-clip flex items-center justify-between">
                    <span class="text-[4rem] lg:text-[11rem] md:text-[6rem]">HACK MARKET</span>
                </NuxtLink>
            </template>
        </CaseStudiesPerspectiveContainer>
        <CaseStudiesPerspectiveContainer frontColor="!bg-[#1795f0]" color="!bg-white" topColor="!bg-white">
            <template #front>
                <NuxtLink to="/case-studies/samaritain" >
                    <ClientOnly>
                        <Vue3Marquee  :duration="9">
                            <div class="w-full h-full overflow-clip flex items-center text-center lg:leading-[200px]">
                                <span class="text-[4rem] lg:text-[11rem] md:text-[6rem] ">SAMARITAIN</span>
                            </div>
                        </Vue3Marquee>
                    </ClientOnly>
                </NuxtLink>
            </template>
            <template #top>
                <NuxtLink to="/case-studies/samaritain" class="text-nowrap text-clip w-full h-full overflow-clip flex items-center justify-between">
                    <span class="text-[4rem] lg:text-[11rem] md:text-[6rem]">SAMARITAIN</span>
                </NuxtLink>
            </template>
        </CaseStudiesPerspectiveContainer>
        <CaseStudiesPerspectiveContainer frontColor="!bg-[#ff2803]" color="!bg-white" topColor="!bg-white">
            <template #front>
                <NuxtLink to="/case-studies/nars" >
                    <ClientOnly>
                        <Vue3Marquee  :duration="9">
                            <div class="w-full h-full overflow-clip flex items-center text-center lg:leading-[200px]">
                                <span class="text-[4rem] lg:text-[11rem] md:text-[6rem] mr-2 md:mr-3 lg:mr-6">PLAY Y</span>
                                <div class="flex items-end gap-x-6 md:gap-x-10 lg:gap-x-[70px]">
                                    <BouncingCircle  target="case" />
                                </div>
                                <span class="text-[4rem] lg:text-[11rem] md:text-[6rem] mr-3 md:mr-4 lg:mr-8 ml-3 md:ml-4 lg:ml-8">UR P</span>
                                <BouncingCircle  target="case" />
                                <span class="text-[4rem] lg:text-[11rem] md:text-[6rem] ml-2 md:ml-4 lg:ml-6">WER</span>
                            </div>
                        </Vue3Marquee>
                    </ClientOnly>
                </NuxtLink>
            </template>
            <template #top>
                <NuxtLink to="/case-studies/nars" class="text-nowrap text-clip flex items-center overflow-clip">
                    <span class="text-[4rem] lg:text-[11rem] md:text-[6rem] mr-2 md:mr-3 lg:mr-6">PLAY Y</span>
                    <div class="flex items-end gap-x-6 md:gap-x-10 lg:gap-x-[70px]">
                        <BouncingCircle  target="case" />
                    </div>
                    <span class="text-[4rem] lg:text-[11rem] md:text-[6rem] mr-3 md:mr-4 lg:mr-8 ml-3 md:ml-4 lg:ml-8">UR P</span>
                    <BouncingCircle  target="case" />
                    <span class="text-[4rem] lg:text-[11rem] md:text-[6rem] ml-2 md:ml-4 lg:ml-6">WER</span>
                </NuxtLink>
            </template>
        </CaseStudiesPerspectiveContainer>
    </div>
    <CaseStudiesLastSection />
</template>

<script setup lang="ts">
import {usePlayerStore} from '@/store/Player'
import {storeToRefs} from 'pinia'
const playerStore = usePlayerStore()
const {isPlaying, player} = storeToRefs(playerStore)

onBeforeRouteLeave(() => {
    if(isPlaying.value) {
        player.value?.pause()
        isPlaying.value = false
    }
})
</script>