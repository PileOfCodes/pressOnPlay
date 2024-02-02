<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'

onMounted(() => {
  gsap.defaults({
        duration: 1
  })
  gsap.registerPlugin(ScrollTrigger)
  const lenis = new Lenis()
  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
})
</script>
