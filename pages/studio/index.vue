<template>
    <div class="my-20 relative flex flex-col">
        <PerspectiveContainer color="!bg-white" delay="delay-0">
            <template #front>
                <div class="w-full h-full overflow-clip flex items-center justify-between px-8 md:px-20">
                    <div class="pl-[3%] pr-[6%] md:pr-[30%] flex items-center">
                        <div class="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-8">
                            <BouncingCircle target="firstCircle" />
                            <span class="text-[5.5rem] lg:text-[12rem] md:text-[11rem] sm:text-[8rem]">N</span>
                        </div>
                        <span class="pl-4 sm:pl-6 md:pl-8 text-[5.5rem] md:text-[11rem] lg:text-[12rem] sm:text-[8rem] tracking-tighter lg:pl-12">BEAT.</span>
                    </div>
                </div>
            </template>
            <template #top>
                <div class="w-full h-full overflow-clip flex items-center justify-between px-8 md:px-20">
                    <div class="pl-[3%] pr-[6%] md:pr-[30%] flex items-center">
                        <div class="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-8">
                            <BouncingCircle target="firstCircle" />
                            <span class="text-[5.5rem] lg:text-[12rem] md:text-[11rem] sm:text-[8rem]">N</span>
                        </div>
                        <span class="pl-4 sm:pl-6 md:pl-8 text-[5.5rem] md:text-[11rem] lg:text-[12rem] sm:text-[8rem] tracking-tighter lg:pl-12">BEAT.</span>
                    </div>
                </div>
            </template>
        </PerspectiveContainer>
        <PerspectiveContainer color="!bg-white" delay="delay-100">
            <template #front>
                <div class="w-full h-full overflow-clip flex items-center px-6 sm:px-8 md:px-20 lg:px-0">
                    <div class="pl-[3%] flex items-center">
                        <div class="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-8">
                            <div class="hidden lg:block w-[180px] mr-8 lg:mr-12 pt-16 text-[14px]">What we feel and where we stand is who we are</div>
                            <BouncingCircle target="secondCircle" />
                            <span class="text-[5.5rem] lg:text-[12rem] md:text-[11rem] sm:text-[8rem]">FF</span>
                        </div>
                        <div class="pl-12 sm:pl-20 md:pl-32 lg:pl-60 text-[5.5rem] md:text-[11rem] lg:text-[12rem] sm:text-[8rem] tracking-tighter">THE</div>
                    </div>
                </div>
            </template>
            <template #top>
                <div class="w-full h-full overflow-clip flex items-center px-6 sm:px-8 md:px-20 lg:px-0">
                    <div class="pl-[3%] flex items-center">
                        <div class="flex items-center gap-x-4 sm:gap-x-6 md:gap-x-8">
                            <div class="hidden lg:block w-[180px] mr-8 lg:mr-12 pt-16 text-[14px]">What we feel and where we stand is who we are</div>
                            <BouncingCircle target="secondCircle" />
                            <span class="text-[5.5rem] lg:text-[12rem] md:text-[11rem] sm:text-[8rem]">FF</span>
                        </div>
                        <div class="pl-12 sm:pl-20 md:pl-32 lg:pl-60 text-[5.5rem] md:text-[11rem] lg:text-[12rem] sm:text-[8rem] tracking-tighter">THE</div>
                    </div>
                </div>
            </template>
        </PerspectiveContainer>
        <PerspectiveContainer color="!bg-white" delay="delay-200">
            <template #front>
                <div class="w-full h-full overflow-clip flex items-center justify-between px-8 md:px-20">
                    <div class="pr-[6%] md:pr-[30%]">
                        <span class="text-[5.5rem] lg:text-[12rem] md:text-[11rem] sm:text-[8rem] tracking-tighter ">BEATEN</span>
                    </div>
                </div>
            </template>
            <template #top>
                <div class="w-full h-full overflow-clip flex items-center justify-between px-8 md:px-20">
                    <div class="pr-[6%] md:pr-[30%]">
                        <span class="text-[5.5rem] lg:text-[12rem] md:text-[11rem] sm:text-[8rem] tracking-tighter ">BEATEN</span>
                    </div>
                </div>
            </template>
        </PerspectiveContainer>
        <PerspectiveContainer color="!bg-white" deley="delay-300">
            <template #front>
                <div class="w-full h-full overflow-clip flex items-center justify-between px-8 md:px-20">
                    <div class="text-[5.5rem] lg:text-[12rem] md:text-[11rem] sm:text-[8rem] tracking-tighter lg:pl-[30%] xl:lg:pl-[35%]">TRACKS</div>
                </div>
            </template>
            <template #top>
                <div class="w-full h-full overflow-clip flex items-center justify-between px-8 md:px-20">
                    <div class="text-[5.5rem] lg:text-[12rem] md:text-[11rem] sm:text-[8rem] tracking-tighter lg:pl-[30%] xl:lg:pl-[35%]">TRACKS</div>
                </div>
            </template>
        </PerspectiveContainer>
        <div style="font-weight: 900" class="pl-4 w-[220px] mr-8 pt-4 text-[14px] lg:hidden">What we feel and where we stand is who we are</div>
    </div>
    <StudioSecondSection />
    <StudioThirdSection />
    <StudioFourthSection />
    <StudioLastSection />
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