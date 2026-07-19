import { useEffect } from "react"
import { usePlayer } from "../context/PlayerContext"

export const useAudioPlayer = () => {

    const {audioRef, currentSong, isPlaying, setIsPlaying, currentTime, setCurrentTime, duration, setDuration, volume, setVolume, nextSong, repeat} = usePlayer()

    useEffect(() => {
        if (!currentSong) return

        const audio = audioRef.current

        if (!audio) return

        audio.src = currentSong.previewUrl
        audio.load()
        audio.play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false))
    }, [currentSong])

    useEffect(() => {
        if (!audioRef.current) return

        audioRef.current.volume = volume
    }, [volume])

    const togglePlay = () => {
        const audio = audioRef.current

        if (!audio) return
        if (isPlaying) {
            audio.pause()
            setIsPlaying(false)
        } else {
            audio.play()
            setIsPlaying(true)
        }
    }

    const handleSeek = (e) => {
        const value = Number(e.target.value)

        if (!audioRef.current) return

        audioRef.current.currentTime = value
        setCurrentTime(value)
    }

    const handleEnded = () => {
        if (repeat === "one") {
            audioRef.current.currentTime = 0
            audioRef.current.play()
            return
        }
        nextSong()
    }

    const progress = duration
        ? (currentTime / duration) * 100
        : 0

    return {audioRef, currentSong, isPlaying, currentTime, duration, volume, progress, setVolume, setCurrentTime, setDuration, setIsPlaying, togglePlay, handleSeek, handleEnded}

}