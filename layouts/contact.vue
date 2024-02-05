<template>
    <div v-if="showMenu" :class="showMenu ? 'showAnimateMenu' : ''" class="bg-black text-white">
        <MobileMenu :showMenu="showMenu" @send-audio-trigger="(input) => getAudioTrigger(input)" @send-show-menu="(input) => showMenu = input" />
    </div>
    <div ref="header" :class="showMenu ? '' : 'hideAnimateMenu'" class="bg-black text-white relative flex items-center justify-between pl-6 pr-6">
        <NuxtLink to="/" class="relative font-bold text-[17px] group flex items-center py-1 ">
            <span>PRESS</span>
            <span class="drawer__text__desktop--play bg-black">PLAY</span>
            <span class="drawer__text__desktop--on bg-black">
                <span class="fill__desktop__o o bg-black">O</span>N
            </span>
            <span class="drawer__text__desktop--tape bg-black">TAPE</span>
            <span class="drawer__text__desktop--space bg-black"></span>
        </NuxtLink>
        <div class="">
            <HeaderPlayer :is-vertical="false" @send-audio-trigger="(input) => getAudioTrigger(input)" />
        </div>
        <div v-if="isHidden" class="flex items-center w-[500px] justify-between text-[14px]">
            <div class="flex items-center gap-x-8">
                <NuxtLink to="/studio" active-class="opacity-65" class="hover:opacity-65 transition-opacity duration-150">Studio</NuxtLink>
                <NuxtLink to="/case-studies" active-class="opacity-65" class="hover:opacity-65 transition-opacity duration-150">Case studies</NuxtLink>
                <NuxtLink to="/services" active-class="opacity-65" class="hover:opacity-65 transition-opacity duration-150">Services</NuxtLink>
            </div>
            <div>
                <NuxtLink to="/contact" active-class="opacity-65" class="hover:opacity-65 transition-opacity duration-150">Contact</NuxtLink>
            </div>
        </div>
        <div v-else class="hamburgger__menu" @click="showMenu = true">
            <div class="hamburgger__menu__firstChild"></div>
            <div class="hamburgger__menu__secondChild"></div>
        </div>
    </div>
    <StickyMenu v-if="false" :isLargeEnough="isLargeEnough" @menuAudioTrigger="(input : any) => getMenuAudioTrigger(input)"  />
    <div class="p-8 bg-black text-white" ref="contact">
        <FooterFirstCube />
        <FooterSecondCube />
        <div class="w-full flex items-start justify-between pb-6 pt-16 md:pr-[200px]" id="contactText">
            <div class="xs:w-[200px] md:w-[520px] text-[2.5rem]">We saw your future and it sounds good.</div>
            <div class="flex flex-col">
                <div class="h-[100px]">
                    <div class="flex gap-x-1 items-center">
                        <span class="w-3 h-3 rounded-full bg-white"></span>
                        <span>Get in touch</span>
                    </div>
                    <div class="mt-5">+33 6 17 05 30 38</div>
                    <div @click="copy(source)">
                        <Transition name="slide-y" mode="out-in">
                            <div v-if="!copied" class="absolute" >
                                <div  class="flex gap-x-4 cursor-pointer group">
                                    <span>loic@pressplayontape.studio</span>
                                    <div class="clipboard">
                                        <div class="clipboard__cube clipboard__cube--first"></div>
                                        <div class="clipboard__cube clipboard__cube--second"></div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="absolute">copy to clipboard</div>
                        </Transition>
                    </div>
                </div>
                <div class="mt-5">
                    <div class="flex gap-x-1 items-center">
                        <span class="w-3 h-3 rounded-full bg-white"></span>
                        <span>Visit us</span>
                    </div>
                    <div class="mt-5">(studio)</div>
                    <div>41 rue Amilcar Cipriani</div>
                    <div>93400 Saint-Ouen</div>
                    <div class="mt-5">(Paperwork)</div>
                    <div>21 rue Eugène Lumeau</div>
                    <div>93400 Saint-Ouen</div>
                </div>
            </div>
        </div>
        <div class="flex justify-between mt-8 md:text-[14px]" style="font-weight: 400;">
            <div class="flex items-center gap-x-4 md:gap-x-12">
                <div class="flex flex-col gap-y-1">
                    <NuxtLink to="/">Case studies</NuxtLink>
                    <NuxtLink to="/">Services</NuxtLink>
                    <NuxtLink to="/">Studie</NuxtLink>
                </div>
                <div class="flex flex-col gap-y-1">
                    <NuxtLink to="/">Instagram</NuxtLink>
                    <NuxtLink to="/">Linkedin</NuxtLink>
                    <NuxtLink to="/">Facebook</NuxtLink>
                </div>
            </div>
            <div class="flex flex-col md:flex-row md:gap-x-20 items-end">
                <NuxtLink>Privacy Policy & Cookies</NuxtLink>
                <NuxtLink>Web Credits</NuxtLink>
                <span>© 2024</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
const emit = defineEmits(['audioTrigger', 'sendHeader'])
const contact = ref()
const isHidden = ref(false)
const showMenu = ref(false)
const header = ref<HTMLDivElement | null>(null)
const {width} = useElementSize(header)

let ctx = ref<any>()
const audioTrigger = ref()
const isLargeEnough = ref()
const menuAudioTrigger = ref()
const source = ref('loic@pressplayontape.studio')
const { copy, copied} = useClipboard({ source })

function getAudioTrigger(input : HTMLDivElement) {
    audioTrigger.value = input
}
function getMenuAudioTrigger(input : any) {
    menuAudioTrigger.value = input
}
function getHeader(input : boolean) {
    isLargeEnough.value = input
}

watchEffect(() => {
    if(width.value > 800) {
        getHeader(true)
        isHidden.value = true
        showMenu.value = false
    }else {
        getHeader(false)
        isHidden.value = false
    }
})

provide('audioTrigger', audioTrigger)
provide('menuAudioTrigger', menuAudioTrigger)

onMounted(() => {
    gsap.defaults({
        duration: 1
    })
    ctx.value = gsap.context(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#contactText',
                start: '-100px 70%',
                end: '30% 100%'
            }
        })
        tl.fromTo('#contactText',{
            y: 70,
            opacity: 0
        },{
            y: 0,
            opacity: 1
        })
    }, contact.value)
})

onUnmounted(() => {
    ctx.value.revert()
})
</script>

<style scoped>
.clipboard {
    @apply relative
}
.clipboard__cube {
    @apply absolute w-4 h-4 rounded-[3px] bg-transparent border-white border-2 
    transition-all duration-300 group-hover:transition-all group-hover:duration-300
}
.clipboard__cube--first {
    @apply left-[7px] z-10 group-hover:-translate-x-1 group-hover:translate-y-1 
}

.clipboard__cube--second {
    @apply left-0 top-2 z-0 group-hover:translate-x-1 group-hover:-translate-y-1
}

.slide-y-enter-active,
.slide-y-leave-active {
  transition: all 0.28s ease-out;
}

.slide-y-enter-from {
  opacity: 0;
  transform: translateY(-4px);
}

.slide-y-leave-to {
  opacity: 0;
  transform: translateY(4px);
}
.o {
    @apply after:bg-white after:w-[9px] after:h-[9px] after:block after:left-[2px] after:rounded-full after:top-[8px]
}
</style>