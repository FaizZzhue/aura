import { useEffect, useState } from "react"

const useExploreSearch = (query) => {
    const [songs, setSongs] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const keyword = query.trim()

        if (!keyword) {
            setSongs([])
            setError(null)
            setLoading(false)
            return
        }

        const controller = new AbortController()

        const timer = setTimeout(async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch(
                    `https://itunes.apple.com/search?term=${encodeURIComponent(keyword)}&entity=song&limit=20`,
                    {
                        signal: controller.signal,
                    }
                )

                if (!response.ok) {
                    throw new Error("Failed to fetch songs.")
                }

                const data = await response.json()

                setSongs(data.results ?? [])
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error(err)
                    setError(err.message)
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }, 400)

        return () => {
            clearTimeout(timer)
            controller.abort()
        }
    }, [query])

    return {songs, loading, error}
}

export default useExploreSearch