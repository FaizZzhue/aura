import { useEffect, useState } from "react"
import AlbumCard from "./AlbumCard"

export default function AlbumGrid() {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        async function fetchAlbums() {
            const response = await fetch("https://itunes.apple.com/search?term=album&entity=album&limit=8")
            const data = await response.json()

            setAlbums(data.results || [])
        }
        fetchAlbums()
    }, [])

    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {
                albums.map(album => (
                    <AlbumCard
                        key={album.collectionId}
                        album={album}
                    />
                ))
            }
        </div>
    )
}