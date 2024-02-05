<template>
    <div v-if="showMenu" :class="showMenu ? 'showAnimateMenu' : ''" class="bg-black text-white">
        <MobileMenu :showMenu="showMenu" @send-audio-trigger="(input) => audioTrigger(input)" @send-show-menu="(input) => showMenu = input" />
    </div>
    <div ref="header" :class="[showMenu ? '' : 'hideAnimateMenu',`${bgc}`]" class="text-black relative flex items-center justify-between pl-6 pr-6">
        <HeaderHome bgc="white" color="black" :afterBgc="false" />
        <div class="">
            <HeaderPlayer :is-vertical="false" @send-audio-trigger="audioTrigger" />
        </div>
        <div  class="md:flex items-center w-[500px] justify-between text-[14px] hidden ">
            <div class="flex items-center gap-x-8">
                <NuxtLink to="/studio" active-class="opacity-65" class="hover:opacity-65 transition-opacity duration-150">Studio</NuxtLink>
                <NuxtLink to="/case-studies" active-class="opacity-65" class="hover:opacity-65 transition-opacity duration-150">Case studies</NuxtLink>
                <NuxtLink to="/services" active-class="opacity-65" class="hover:opacity-65 transition-opacity duration-150">Services</NuxtLink>
            </div>
            <div>
                <NuxtLink to="/contact" active-class="opacity-65" class="hover:opacity-65 transition-opacity duration-150">Contact</NuxtLink>
            </div>
        </div>
        <div  class="hamburgger__menu" @click="showMenu = true">
            <div class="hamburgger__menu__firstChild"></div>
            <div class="hamburgger__menu__secondChild"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['audioTrigger', 'sendHeader'])
const route = useRoute()
const bgc = ref('bg-white')
function audioTrigger(input : any) {
    emit('audioTrigger', input)
}
const showMenu = ref(false)
const header = ref<HTMLDivElement | null>(null)
const {width} = useElementSize(header)

watchEffect(() => {
    if(route.path == '/case-studies/remy-martin-x-lee-broom') {
        bgc.value = 'bg-[#F9B71B]'
    }else if(route.path == '/case-studies/hack-market'){
        bgc.value = 'bg-[#30e462]'
    }else if(route.path == '/case-studies/samaritain'){
        bgc.value = 'bg-[#1795f0]'
    }
    else if(route.path == '/case-studies/nars'){
        bgc.value = 'bg-[#ff2803]'
    }
    else {
        bgc.value = 'bg-[#fff]'
    }
})

watchEffect(() => {
    if(width.value > 800) {
        emit('sendHeader', true)
        showMenu.value = false
    }else {
        emit('sendHeader', false)
    }
})
</script>

<style>
.hamburgger__menu {
    @apply w-12 h-2 relative flex flex-col items-center justify-between cursor-pointer md:hidden
}
.hamburgger__menu__firstChild {
    @apply w-12 h-[1px] rounded-sm bg-black 
}
.hamburgger__menu__secondChild {
    @apply w-12 h-[1px] rounded-sm bg-black
}
.showAnimateMenu {
    animation: showAnimateMenu forwards 0.3s 1 ease-in-out;
    z-index: 100;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
}
@keyframes showAnimateMenu {
    from{height: 0;}
    to{height: 100vh;}
}

.hideAnimateMenu {
    animation: hideAnimateMenu forwards 0.3s 1 ease-in-out;
}

@keyframes hideAnimateMenu {
    from{height: 0;}
    to{height: 3rem;}
}
.drawer__text__mobile--on {
    animation: move_on_text forwards 0.3s 1 ease-in;
    position: absolute;
    background-color: black;
    width: 4rem;
}

@keyframes move_on_text {
    from {left: 22px;}
    to{left: 99px;padding-left: 4px;}
}

.drawer__text__mobile--play {
    animation: move_play_text forwards 0.3s 1 ease-in;
    position: absolute;
    background-color: black;
    width: 4rem;
    
}

@keyframes move_play_text {
    from {left: 11px;}
    to{left: 52px;padding-left: 4px;}
}

.fill__mobile__o {
    @apply relative after:content-[''] after:absolute
}

.menu--o {
    @apply after:bg-white after:w-[9px] after:h-[9px] after:block after:left-[2px] after:rounded-full after:top-[8px]
}

.drawer__text__mobile--tape {
    animation: move_tape_text forwards 0.3s 1 ease-in;
    position: absolute;
    background-color: black;
    width: 4rem;
    letter-spacing: 5px;
}

@keyframes move_tape_text {
    from {left: 35px;}
    to{left: 128px;margin-left: 7px;letter-spacing: normal;}
}

.drawer__text__mobile--space {
    animation: move_space_text forwards 0.3s 1 ease-in;
    position: absolute;
    background-color: black;
    width: 4rem;
    height: 1rem;
    letter-spacing: 5px;
}

@keyframes move_space_text {
    from {left: 46px;}
    to{left: 177px;padding-left: 4px;letter-spacing: normal;}
}
</style>