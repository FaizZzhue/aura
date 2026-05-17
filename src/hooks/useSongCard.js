import { useState } from "react"

export const useSongCard = () => {
    const [isHover, setIsHover] = useState(false)

    const formatDuration = (ms) => {
        if (!ms) return "--:--"

        const s = Math.floor(ms / 1000)
        const m = Math.floor(s / 60)
        const sec = s % 60

        return `${m}:${sec.toString().padStart(2, "0")}`
    }

    return {isHover, setIsHover, formatDuration}
}