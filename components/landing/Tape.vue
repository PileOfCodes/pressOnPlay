<template>
        <div class="Tape Tape--shadows" :class="isMounted ? 'Tape--back' : 'Tape--top'">
        <div class="Tape__container">
            <div  class="Tape__container__face Tape__container__face--front"></div>
            <div  class="Tape__container__face Tape__container__face--top">
                <div class="w-full h-full overflow-clip flex flex-col md:flex-row md:items-center justify-center md:pl-[400px]">
                    <div class="text-[6rem] md:text-[12rem]">TAPE</div>
                    <div class="md:absolute md:w-full leading-[20px] md:text-start md:pl-[150px] text-[24px] tracking-tight md:bottom-8">Amplify your worlds</div>
                </div>
                <div class="hidden absolute w-full lg:flex items-center justify-end pr-16 font-thin tracking-tight bottom-8">
                    <div class="h-6">
                        <ClientOnly>
                            <Vue3Marquee :vertical="true" :duration="2" :clone="true" :direction="'reverse'">
                                <div v-for="(word, index) in words" :key="index">
                                    {{ word }}
                                </div>
                            </Vue3Marquee>
                        </ClientOnly>
                    </div>
                </div>
            </div>
            <div  class="Tape__container__face Tape__container__face--back">
                <div class="w-full h-full overflow-clip flex flex-col  md:flex-row md:items-center justify-center md:pl-[400px]">
                    <div class="text-[6rem] md:text-[12rem]">TAPE</div>
                    <div class="md:absolute md:w-full leading-[20px] md:text-start md:pl-[150px] text-[24px] tracking-tight md:bottom-8">Amplify your worlds</div>
                </div>
                <div class="hidden absolute w-full lg:flex items-center justify-end pr-16 font-thin tracking-tight bottom-8">
                    <div class="h-6">
                        <ClientOnly>
                            <Vue3Marquee :vertical="true" :duration="2" :clone="true" :direction="'reverse'">
                                <div v-for="(word, index) in words" :key="index">
                                    {{ word }}
                                </div>
                            </Vue3Marquee>
                        </ClientOnly>
                    </div>
                </div>
            </div>
            <div  class="Tape__container__face Tape__container__face--bottom"></div>
        </div>
    </div>
</template>

<script setup>
const isMounted = ref(false)
const words = ref(['scroll'])
onMounted(() => {
    isMounted.value = true
})
</script>

<style>
:root {
    --dark: #150c0f;
}

.Tape {
    perspective: 100vw; 
    @apply relative w-full h-[300px] md:h-[200px] text-black overflow-hidden
}

.Tape__container {
    height: 100%;
    position: relative;
    transform: translateZ(-150px) rotateX(0deg);
    transform-style: preserve-3d;
    transition: transform 1s cubic-bezier(.25,1,.5,1);
    width: 100%;
}

.Tape>.Tape__container {
    transition-duration: .65s;
}

.Tape:nth-child(2) {
    z-index: 0;
}

.Tape__container__face {
    @apply w-full h-full text-center bg-[#30e462] absolute transition-opacity duration-[0.6s] ease-[cubic-bezier(.65,0,.35,1)]
}

.Tape--top>.Tape__container {
    transform: translateZ(-150px) rotateX(-90.1deg);
}

.Tape--back>.Tape__container {
    transform:  rotateX(-180deg);
}

.Tape__container__face--front {
    transform: rotateY(0deg) translateZ(150px);
}
.Tape__container__face--top {
    transform: rotateX(90.1deg) translateZ(150px);
}
.Tape__container__face--back {
    transform: translateZ(-150px) rotateY(-180deg) rotate(180deg);
}
.Tape__container__face--bottom {
    transform: rotateX(-90.1deg) translateZ(150px);
}

.Tape--shadows .Tape__container__face:after {
    background-color: var(--dark);
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: opacity .6s cubic-bezier(.35,0,.65,1);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 100%;
    z-index: 2;
}

.Tape--top>.Tape__container>.Tape__container__face--back:after {
    opacity: 0.2;
}
</style>