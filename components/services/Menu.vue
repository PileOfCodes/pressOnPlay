<template>
    <div class="bg-[#150c0f] text-white p-5">
        <div class="flex flex-wrap items-center text-[42px] sm:text-[75px] cursor-default" style="font-weight: 900">
            <div @mouseover="option = 1" class="transition-all duration-300" :class="{'opacity-45' : option != 1}">Voice & Mix</div>
            <div class="w-16 h-16 rounded-full bg-[#f9b71b] mx-2"></div>
            <div @mouseover="option = 2" class="transition-all duration-300" :class="{'opacity-45' : option != 2}">Audio Branding</div>
            <div @mouseover="option = 3" class="transition-all duration-300" :class="{'opacity-45' : option != 3}">Compositions</div>
            <div class="w-16 h-16 rounded-full bg-[#1795f0] mx-2"></div>
            <div @mouseover="option = 4" class="transition-all duration-300" :class="{'opacity-45' : option != 4}">Sound Design</div>
        </div>
        <div v-for="(item, index) in selected" :key="index" class="h-[220px] sm:h-[200px]  mt-12">
            <div v-for="(st, index) in item.body" :key="index"> 
                <span class="text-[25px] leading-[25px]">{{ st }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const option = ref(1)
const options = reactive([
    {
        index: 1,
        body: [
            'Casting & Recording',
            'Talent Direction',
            'Voice over',
            'Commercials & Trailers',
            'Post Sync',
            'Remote recording'
        ]
    },
    {
        index: 2,
        body: [
            'Audio Strategy',
            'Brand Themes',
            'Audio Logo',
            'Audio Identity',
            'Audio Guidelines',
            'Core Principles'
        ]
    },
    {
        index: 3,
        body: [
            'Creative Direction',
            'Original Music',
            'Soundtracks',
            'Video games & virtual experience music',
            'Brand Music',
            'Generative music',
            'Licencing & Supervision'
        ]
    },
    {
        index: 4,
        body: [
            'Audio UX',
            'Immersive Audio',
            'Interactive Sounds',
            'Experiential Sounds',
            'Product Sound Design',
            'Interface & App Sound Design'
        ]
    },
])

const selected = computed(() => options.filter((item) => item.index == option.value))
</script>