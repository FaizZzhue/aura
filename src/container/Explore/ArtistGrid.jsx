import { useEffect, useState } from "react"
import ArtistCard from "./ArtistCard"

export default function ArtistGrid() {
    const [artists, setArtists] = useState([])

    useEffect(() => {
        async function fetchArtists() {
            const response = await fetch("https://itunes.apple.com/search?term=top&entity=song&limit=50")
            const data = await response.json()
            const uniqueArtists = []
            const ids = new Set()

            data.results.forEach(song => {
                if (!ids.has(song.artistId)) {
                    ids.add(song.artistId)
                    uniqueArtists.push(song)
                }
            })

            setArtists(uniqueArtists.slice(0, 8))
        }
        fetchArtists()
    }, [])

    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {
                artists.map(artist => (
                    <ArtistCard
                        key={artist.artistId}
                        artist={artist}
                    />
                ))
            }
        </div>
    )
}