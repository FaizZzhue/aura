import {createContext, useContext, useMemo, useRef, useState} from "react"

const PlayerContext = createContext(null)

export const PlayerProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null)
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(1)
    const playSong = (song) => {setCurrentSong(song)}
    const closePlayer = () => {
        if (audioRef.current) {
            audioRef.current.pause()
        }

        setCurrentSong(null)
        setIsPlaying(false)
        setCurrentTime(0)
        setDuration(0)
    }

    const value = useMemo(() => (
        {currentSong, playSong, closePlayer, audioRef, isPlaying, setIsPlaying, currentTime, setCurrentTime, duration, setDuration, volume, setVolume}), 
        [currentSong, isPlaying, currentTime, duration, volume ]
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