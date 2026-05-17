import { useState, useEffect, useRef } from "react"

export const useAudioPlayer = (currentSong) => {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(1)

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
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
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

    const progress = duration
        ? (currentTime / duration) * 100
        : 0

    return {
        audioRef,

        isPlaying,
        currentTime,
        duration,
        volume,
        progress,

        setVolume,
        setCurrentTime,
        setDuration,
        setIsPlaying,

        togglePlay,
        handleSeek,
    }
}