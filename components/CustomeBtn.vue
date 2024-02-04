<template>
    <div class="py-4 px-6 w-full lg:w-[200px] relative" id="item-3">
        <button class="w-full lg:w-[200px] p-6 rounded-[4px] border-[1px] border-black flex items-center justify-center" 
        :class="changeStyle ? 'bg-black text-white' : 'bg-white text-black'"
        @mouseenter="changeStyle = true" 
        @mouseleave="changeStyle = false">
            <Transition name="slide-y" mode="out-in">
                <div v-if="changeStyle" class="absolute" >{{ props.btnText }}</div>
                <div v-else class="absolute">{{props.btnText}}</div>
            </Transition>
        </button>
    </div>
</template>

<script setup lang="ts">
const changeStyle = ref(false)
const props = defineProps(['btnText'])
</script>

<style scoped>
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
</style>