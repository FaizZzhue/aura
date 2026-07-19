import {createContext, useContext, useMemo, useRef, useState} from "react"

const PlayerContext = createContext(null)

export const PlayerProvider = ({ children }) => {

    const [currentSong, setCurrentSong] = useState(null)
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [queue, setQueue] = useState([])
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(1)
    const [shuffle, setShuffle] = useState(false)
    const [repeat, setRepeat] = useState("off")
    const playSong = (song, songs = null) => {
        if (songs && songs.length > 0) {
            const index = songs.findIndex(item => item.id === song.id)
            setQueue(songs)
            setCurrentIndex(index)
        }
        setCurrentSong(song)
    }

    const nextSong = () => {
        if (queue.length === 0) return

        if (shuffle) {
            const random = Math.floor(Math.random() * queue.length)
            setCurrentIndex(random)
            setCurrentSong(queue[random])
            return
        }

        const next = currentIndex + 1

        if (next < queue.length) {
            setCurrentIndex(next)
            setCurrentSong(queue[next])
            return
        }

        if (repeat === "all") {
            setCurrentIndex(0)
            setCurrentSong(queue[0])
            return
        }

        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
        }

        setCurrentTime(0)
        setIsPlaying(false)
    }

    const previousSong = () => {
        if (queue.length === 0) return

        if (shuffle) {
            const random = Math.floor(Math.random() * queue.length)
            setCurrentIndex(random)
            setCurrentSong(queue[random])
            return
        }

        const prev = currentIndex - 1

        if (prev >= 0) {
            setCurrentIndex(prev)
            setCurrentSong(queue[prev])
            return
        }

        if (repeat === "all") {
            const last = queue.length - 1
            setCurrentIndex(last)
            setCurrentSong(queue[last])
            return
        }

        setCurrentTime(0)
    }

    const toggleShuffle = () => {
        setShuffle(prev => !prev)
    }

    const toggleRepeat = () => {
        setRepeat(prev => {
            if (prev === "off") return "all"

            if (prev === "all") return "one"

            return "off"
        })

    }

    const closePlayer = () => {
        if (audioRef.current) {
            audioRef.current.pause()
        }
        setCurrentSong(null)
        setCurrentIndex(-1)
        setQueue([])
        setCurrentTime(0)
        setDuration(0)
        setIsPlaying(false)
    }

    const value = useMemo(() => (
        {audioRef, queue, currentIndex, currentSong, playSong, nextSong, previousSong, shuffle, repeat, toggleShuffle, toggleRepeat, closePlayer, isPlaying, setIsPlaying, currentTime, setCurrentTime, duration, setDuration, volume, setVolume}), 
        [queue, currentIndex, currentSong, shuffle, repeat, isPlaying, currentTime, duration, volume ]
    )

    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    )

}

export const usePlayer = () => {

    const context = useContext(PlayerContext)

    if (!context) {
        throw new Error(
            "usePlayer harus digunakan di dalam PlayerProvider."
        )
    }

    return context

}