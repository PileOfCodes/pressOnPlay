<template>
    <div v-if="showMenu" :class="showMenu ? 'showAnimateMenu' : ''" class="bg-black text-white">
        <MobileMenu :showMenu="showMenu" @send-audio-trigger="(input) => audioTrigger(input)" @send-show-menu="(input) => showMenu = input" />
    </div>
    <div v-else class="fixed top-0 z-[99] left-[50%] translate-x-[-50%] overflow-hidden h-[100px]" :class="[isHidden ? 'hideMenu' : 'showMenu', showOnScroll ? 'showMenu' : 'hideMenu']">
        <div class="sideMenu">
            <svg preserveAspectRatio="none" viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.6973 8.17791L22.313 43.7756C17.9205 50.761 10.2475 55 1.99592 55H59.5V0C53.488 0 47.8976 3.08849 44.6973 8.17791Z" fill="white"></path></svg>
        </div>
        <div class="h-[55%] bg-white flex items-center gap-x-8 px-12">
            <HeaderHome />
            <HeaderPlayer @send-audio-trigger="audioTrigger" />
            <div v-if="props.isLargeEnough" class="flex items-center gap-x-12 text-[14px] ">
                <NuxtLink to="/" class="hover:opacity-75 transition-opacity duration-150">Studio</NuxtLink>
                <NuxtLink to="/" class="hover:opacity-75 transition-opacity duration-150 w-[90px]">Case studies</NuxtLink>
                <NuxtLink to="/" class="hover:opacity-75 transition-opacity duration-150">Services</NuxtLink>
                <NuxtLink to="/" class="hover:opacity-75 transition-opacity duration-150">Contacts</NuxtLink>
            </div>
            <div v-else class="hamburgger__menu" @click="showMenu = true">
                <div class="hamburgger__menu__firstChild"></div>
                <div class="hamburgger__menu__secondChild"></div>
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
        } else if (st < lastScrollTop) {
            showOnScroll.value = true
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);

    document.addEventListener('scroll', function() {
        if(window.scrollY > 250) {
            isHidden.value = false
        }else if(window.scrollY < 250) {
            isHidden.value = true
        }
    })
})

</script>

<style>
.hoverOnMe:hover #wider {
    background-color: blue !important;
}
.showMenu {
    animation: showStickyMenu forwards 0.25s 1 ease-in;
    display: flex;
    height: 0;
}

@keyframes showStickyMenu {
    form {display: none;height: 0; opacity: 0;}
    to {display: flex;height: 100px; opacity: 1;}
}

.hideMenu {
    animation: hideStickyMenu forwards 0.25s 1 ease-in;
    display: flex;
}

@keyframes hideStickyMenu {
    form {display: flex;height: 100px; }
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