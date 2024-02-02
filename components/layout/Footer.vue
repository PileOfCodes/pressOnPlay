<template>
    <div class="p-8 bg-black text-white" ref="contact">
        <FooterFirstCube :from-contact="false" />
        <FooterSecondCube :from-contact="false" />
        <div class="w-full flex flex-col md:items-end justify-start py-16 md:pr-[160px]">
            <div id="contactText">
                <div class="w-[400px] text-[1.7rem]">We saw your future and it sounds good.</div>
                <NuxtLink to="/contact">
                    <ContactBtn :btn-text="'CONTACT US'" />
                </NuxtLink>
            </div>
        </div>
        <div class="flex justify-between mt-8 md:text-[14px]" style="font-weight: 400;">
            <div class="flex items-center gap-x-4 md:gap-x-12">
                <div class="flex flex-col gap-y-1">
                    <NuxtLink to="/case-studies" active-class="opacity-65">Case studies</NuxtLink>
                    <NuxtLink to="/services" active-class="opacity-65">Services</NuxtLink>
                    <NuxtLink to="/studio" active-class="opacity-65">Studie</NuxtLink>
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
const contact = ref()
let ctx = ref<any>()
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