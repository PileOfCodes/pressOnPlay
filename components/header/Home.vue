<template>
    <div>
        <NuxtLink to="/" class="relative z-20 font-bold text-[17px] group flex items-center py-1 ">
            <span :class="props.showMenu ? 'bg-black text-white' : bgc">PRESS</span>
            <span :class="props.showMenu ? 'bg-black text-white drawer__text__mobile--play' : `${bgc} drawer__text__desktop--play`">PLAY</span>
            <span :class="props.showMenu ? 'bg-black text-white drawer__text__mobile--on' : `${bgc} drawer__text__desktop--on`">
                <span :class="props.showMenu ? 'fill__mobile__o menu--o' : 'fill__desktop__o o'">O</span>N
            </span>
            <span :class="props.showMenu ? 'bg-black text-white drawer__text__mobile--tape' : `${bgc} drawer__text__desktop--tape`">TAPE</span>
            <span :class="props.showMenu ? 'bg-black text-white drawer__text__mobile--space' : `${bgc} drawer__text__desktop--space`"></span>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const bgc = ref('bg-white')
const route = useRoute()
const props = defineProps(['showMenu'])
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
        bgc.value = 'bg-white'
    }
})
</script>

<style>
.drawer__text__desktop--on {
    @apply absolute left-[22px] w-16 transition-all duration-500 
    group-hover:left-[99px] group-hover:transition-all group-hover:duration-500 
    group-hover:ease-in-out ease-in-out group-hover:pl-1
}

.drawer__text__desktop--play {
    @apply absolute left-[11px] w-16  transition-all duration-500 
    group-hover:left-[52px] group-hover:transition-all group-hover:duration-500 
    group-hover:ease-in-out ease-in-out group-hover:pl-1
}

.fill__desktop__o {
    @apply relative after:content-[''] after:absolute
}
.o {
    @apply after:bg-black after:w-[9px] after:h-[9px] after:block after:left-[2px] after:rounded-full after:top-[8px]
}

.drawer__text__desktop--tape {
    @apply absolute left-[35px] w-16  transition-all duration-500
    group-hover:left-[128px] group-hover:transition-all group-hover:duration-500
    group-hover:ease-in-out group-hover:tracking-normal tracking-[5px] ease-in-out
    group-hover:pl-1
}

.drawer__text__desktop--space {
    @apply absolute left-[46px] w-12 h-4 transition-all duration-500
    group-hover:left-[177px] group-hover:transition-all group-hover:duration-500 
    group-hover:ease-in-out ease-in-out
}
</style>