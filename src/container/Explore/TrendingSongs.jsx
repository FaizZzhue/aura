import { useEffect, useState } from "react"
import SearchMusicCard from "./SearchMusicCard"

export default function TrendingSongs() {
    const [songs, setSongs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await fetch(
                    "https://itunes.apple.com/search?term=top&entity=song&limit=10"
                )

                const data = await response.json()

                setSongs(data.results ?? [])
            } catch (error) {
                console.error("Failed to fetch trending songs:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchTrending()
    }, [])

    if (loading) {
        return (
            <div className="space-y-4">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className="h-20 animate-pulse rounded-2xl bg-white/5"
                    />
                ))}
            </div>
        )
    }

    if (!songs.length) {
        return (
            <div className="rounded-2xl border border-white/10 bg-[#111627] p-6 text-center text-zinc-400">
                No trending songs available.
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {songs.map(song => (
                <SearchMusicCard
                    key={song.trackId}
                    song={song}
                />
            ))}
        </div>
    )
}