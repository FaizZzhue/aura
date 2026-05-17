import { useState, useEffect } from "react"

const useFetchMusic = (keyword) => {
    const [songs, setSongs] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!keyword) return

        const fetchMusic = async () => {
            setLoading(true)
            setError(null)
            setSongs([])

            try {
                const url = `https://itunes.apple.com/search?term=${encodeURIComponent(keyword)}&media=music&limit=20&entity=song`

                const res = await fetch(url)

                if (!res.ok) {
                    throw new Error("Failed to fetch music data.")
                }

                const data = await res.json()
                setSongs(data.results || [])

            } catch (err) {
                console.error(err)
                setError("Failed to load music")
            } finally {
                setLoading(false)
            }
        }

        fetchMusic()
    }, [keyword])

    return { songs, loading, error }
}

export default useFetchMusic