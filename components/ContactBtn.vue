<template>
  <button class="w-[110px] p-3 rounded-[4px] border-[1px]  flex items-center justify-center" 
  :class="changeStyle ? 'bg-white text-black border-white' : 'bg-black text-white border-white'"
  @mouseenter="changeStyle = true" 
  @mouseleave="changeStyle = false">
      <Transition name="slide-y" mode="out-in">
          <div v-if="changeStyle" class="absolute" >{{ props.btnText }}</div>
          <div v-else class="absolute">{{props.btnText}}</div>
      </Transition>
  </button>
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