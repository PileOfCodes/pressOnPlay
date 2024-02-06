<template>
    <div class="Perspective Perspective--shadows" :class="isPlaying ? 'Perspective--top' : 'Perspective--front'">
        <div class="Perspective__container">
            <div  class="Perspective__container__face Perspective__container__face--front">
                <div class="w-full h-full overflow-clip flex items-center justify-end md:justify-center">
                    <div class="uppercase pr-[6%] md:pr-[30%]">
                        <span class="inline-block w-36 h-36 bg-black rounded-full"></span>
                        <span class="text-[12.3rem]">n</span>
                    </div>
                </div>
            </div>
            <div  class="Perspective__container__face Perspective__container__face--top">
                <BouncingCircle target="visualiser" />
            </div>
            <div  class="Perspective__container__face Perspective__container__face--back">

            </div>
            <div  class="Perspective__container__face Perspective__container__face--bottom"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {usePlayerStore} from '@/store/Player'
import {storeToRefs} from 'pinia'

const playerStore = usePlayerStore()
const {isPlaying} = storeToRefs(playerStore)

</script>

<style>

:root {
    --dark: #150c0f;
}

.Perspective {
    position: relative;
    width: 100%;
    height: 200px;
    color: black;
    perspective: 100vw; 
    overflow: hidden;
}

.Perspective__container {
    transform-style: preserve-3d;
    transform: translateZ(-100px) rotateX(0deg);
    @apply relative w-full h-full transition-transform duration-1000 ease-[cubic-bezier(.25,1,.5,1)]
}

.Perspective>.Perspective__container {
    transition-duration: .65s;
}

.Perspective:nth-child(2) {
    z-index: 0;
}

.Perspective__container__face {
    @apply w-full h-full text-center bg-[#1795f0] absolute transition-opacity duration-[0.6s] ease-[cubic-bezier(.65,0,.35,1)]
}

.Perspective--top>.Perspective__container {
    transform: translateZ(-100px) rotateX(-90.1deg);
}

.Perspective--front>.Perspective__container {
    transform:  translateZ(-100px) rotateX(0deg);
}

.Perspective__container__face--front {
    transform: rotateY(0deg) translateZ(100px);
}
.Perspective__container__face--top {
    transform: rotateX(90.1deg) translateZ(100px);
}
.Perspective__container__face--back {
    transform: translateZ(-100px) rotateY(-180deg) rotate(180deg);
}
.Perspective__container__face--bottom {
    transform: rotateX(-90.1deg) translateZ(100px);
}

.Perspective--shadows .Perspective__container__face:after {
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

.Perspective--top>.Perspective__container>.Perspective__container__face--back:after {
    opacity: 0.2;
}
</style>



