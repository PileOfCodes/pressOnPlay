<template>
    <div :class="showMenu ? 'showAnimateMenu' : 'hideAnimateMenu'" class="bg-black text-white">
        <div :class="showMenu ? '' : 'hidden' ">
            <div class="relative flex items-center justify-between z-20 px-6 py-3">
                <HeaderHome :show-menu="showMenu" />
                <div class="hamburgger__menu" @click="showMenu = !showMenu">
                    <div :class="showMenu ? 'bg-white' : 'bg-black'" class="hamburgger__menu__firstChild"></div>
                    <div :class="showMenu ? 'bg-white' : 'bg-black'" class="hamburgger__menu__secondChild"></div>
                </div>
            </div>
            <div class="flex flex-col space-y-2 text-[52px] mt-8 px-6">
                <NuxtLink to="/studio" active-class="opacity-65" class="hover:opacity-75 transition-opacity duration-150">Studio</NuxtLink>
                <NuxtLink to="/case-studies" active-class="opacity-65" class="hover:opacity-75 transition-opacity duration-150">Case studies</NuxtLink>
                <NuxtLink to="/services" active-class="opacity-65" class="hover:opacity-75 transition-opacity duration-150">Services</NuxtLink>
                <NuxtLink to="/contact" active-class="opacity-65" class="hover:opacity-75 transition-opacity duration-150">Contacts</NuxtLink>
            </div>
            <div class="mt-20">
                <HeaderPlayer :is-vertical="true" @send-audio-trigger="(input) => audioTrigger(input)" />
            </div>
        </div>
    </div>
    <div class="fixed top-0 z-[99] left-[50%] translate-x-[-50%] overflow-hidden h-[100px]" :class="[isHidden ? 'hideMenu' : '',showOnScroll ? 'showMenu' : 'hideMenu', showMenu ? 'hideMenu' : '']">
        <div class="sideMenu">
            <svg preserveAspectRatio="none" viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.6973 8.17791L22.313 43.7756C17.9205 50.761 10.2475 55 1.99592 55H59.5V0C53.488 0 47.8976 3.08849 44.6973 8.17791Z" fill="white"></path></svg>
        </div>
        <div class="flex items-center justify-center h-[55%] md:pr-24 bg-white transition-all duration-500" id="headerHome">
            <NuxtLink to="/" class="relative font-bold text-[17px] group flex items-center py-1 ">
                <span>PRESS</span>
                <span class="drawer__text__desktop--play bg-white">PLAY</span>
                <span class="drawer__text__desktop--on bg-white">
                    <span class="fill__desktop__o o">O</span>N
                </span>
                <span class="drawer__text__desktop--tape bg-white">TAPE</span>
                <span class="drawer__text__desktop--space bg-white"></span>
            </NuxtLink>
        </div>
        <div class="h-[55%] bg-white relative flex items-center gap-x-8 px-10">
            <HeaderPlayer @send-audio-trigger="(input) => audioTrigger(input)" />
            <div v-if="props.isLargeEnough" class="flex items-center gap-x-12 text-[14px] ">
                <NuxtLink to="/studio" class="hover:opacity-75 transition-opacity duration-150">Studio</NuxtLink>
                <NuxtLink to="/case-studies" class="hover:opacity-75 transition-opacity duration-150 w-[90px]">Case studies</NuxtLink>
                <NuxtLink to="/services" class="hover:opacity-75 transition-opacity duration-150">Services</NuxtLink>
                <NuxtLink to="/contact" class="hover:opacity-75 transition-opacity duration-150">Contacts</NuxtLink>
            </div>
            <div v-else class="hamburgger__menu" @click="showMenu = !showMenu">
                <div  class="hamburgger__menu__firstChild bg-black"></div>
                <div  class="hamburgger__menu__secondChild bg-black"></div>
            </div>
        </div>
        <div class="sideMenu sideMenu--inverse">
            <svg preserveAspectRatio="none" viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.6973 8.17791L22.313 43.7756C17.9205 50.761 10.2475 55 1.99592 55H59.5V0C53.488 0 47.8976 3.08849 44.6973 8.17791Z" fill="white"></path></svg>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['menuAudioTrigger'])
const props = defineProps(['isLargeEnough'])
const isHidden = ref(true)
const showOnScroll = ref(false)
function audioTrigger(input: any) {
    emit('menuAudioTrigger', input)
}
const showMenu = ref(false)
onMounted(() => {
    let lastScrollTop = 0;
    window.addEventListener("scroll", function(){
        var st = window.scrollY || document.documentElement.scrollTop
        if (st > lastScrollTop) {
            showOnScroll.value = false
        } else if (st < lastScrollTop && window.scrollY > 250) {
            showOnScroll.value = true
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);

    document.addEventListener('scroll', function() {
        if(window.scrollY > 250) {
            isHidden.value = false
        }else if(window.scrollY < 250) {
            showOnScroll.value = false
        }
    })
})

</script>

<style >
#headerHome:hover {
    padding-right: 150px;
    transition: all 0.5s ease-in-out;
}

.showMenu {
    animation: showStickyMenu forwards 0.25s 1 ease-in;
    display: flex;
    height: 0;
}

@keyframes showStickyMenu {
    from {display: none;height: 0; opacity: 0;}
    to {display: flex;height: 100px; opacity: 1;}
}

.hideMenu {
    animation: hideStickyMenu forwards 0.25s 1 ease-in;
    display: flex;
}

@keyframes hideStickyMenu {
    from {display: flex;height: 100px; }
    to {display: none;height: 0;}
}

.sideMenu {
    height: 55%;
    transform: rotateX(180deg) translate(1px);
    background-color: transparent;
}
.sideMenu svg {
    display: block;
    height: 100%;
    width: 59px;
}
.sideMenu--inverse {
    transform: rotateX(180deg) rotateY(180deg) translate(1px) !important;
}
</style>