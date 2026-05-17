import { useEffect, useState } from "react"

const useFavorite = () => {

    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites")
        return saved
            ? JSON.parse(saved)
            : []
    })

    useEffect(() => {
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        )
    }, [favorites])

    const toggleFavorite = (item) => {
        setFavorites((prevFavorites) => {
            const exists = prevFavorites.find(
                (fav) => fav.id === item.id
            )
            if (exists) {
                return prevFavorites.filter(
                    (fav) => fav.id !== item.id
                )
            }
            return [...prevFavorites, item]
        })
    }

    const isFavorite = (itemId) => {
        return favorites.some(
            (fav) => fav.id === itemId
        )
    }

    return {favorites, toggleFavorite, isFavorite}
}

export default useFavorite