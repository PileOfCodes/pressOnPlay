import {defineStore} from 'pinia'
import {usePlayerStore} from '@/store/Player'


export const useVisualiserStore = defineStore('visualiser', () => {
    const playerStore = usePlayerStore()
    const {isPlaying,player} = storeToRefs(playerStore)
    const ctx = ref<AudioContext | null>(null)
    const analyser = ref<AnalyserNode | null>(null)
    const audioSource = ref<MediaElementAudioSourceNode | null>(null);
    const frequencyData = ref<Uint8Array | any>(null)

    onMounted(() => {
        if(!ctx.value) {
            ctx.value = new (window.AudioContext)()
            audioSource.value = ctx.value.createMediaElementSource(player.value as HTMLMediaElement)
            analyser.value = ctx.value.createAnalyser()
            audioSource.value.connect(analyser.value)
            audioSource.value.connect(ctx.value.destination)
            frequencyData.value = new Uint8Array(analyser.value.frequencyBinCount)
        }
    })

    return {frequencyData, analyser, ctx}
})