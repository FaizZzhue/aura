import { createContext, useContext, useMemo } from "react"
import useFavorite from "../hooks/useFavorite"

const FavoriteContext = createContext(null)

export const FavoriteProvider = ({ children }) => {
    const { favorites, toggleFavorite, isFavorite } = useFavorite()

    const value = useMemo(() => ({favorites, toggleFavorite, isFavorite}), [favorites])

    return (
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    )
}

export const useFavoriteContext = () => {
    const context = useContext(FavoriteContext)

    if (!context) {
        throw new Error("useFavoriteContext harus digunakan di dalam FavoriteProvider.")
    }

    return context
}