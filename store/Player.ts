import {defineStore} from 'pinia'


export const usePlayerStore = defineStore('player', () => {
    const isPlaying = ref(false)
    const player = ref<HTMLAudioElement | null>(null)
    const song = '/higher.mp3'
    
    onMounted(() => {
        player.value = new Audio()
        if (!player.value) return;
        player.value.src = song
    })

    function togglePlay() {
        if(isPlaying.value) {
            player.value?.pause()
            isPlaying.value = false
        }else {
            player.value?.play()
            isPlaying.value = true
        }
    }

    watch(isPlaying, () => {
        if(isPlaying) {
            player.value?.addEventListener('ended', function() {
                if(player.value) {
                    player.value.currentTime = 0
                    player.value.play();
                }
            })
        }
    })

    return {isPlaying, player, song, togglePlay}
})