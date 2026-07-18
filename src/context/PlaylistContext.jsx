import { createContext, useContext, useMemo } from "react"
import usePlaylist from "../hooks/usePlaylist"

const PlaylistContext = createContext(null)

export const PlaylistProvider = ({ children }) => {
    const {playlists, createPlaylist, renamePlaylist, deletePlaylist, addSongToPlaylist, removeSongFromPlaylist, getPlaylistById} = usePlaylist()

    const value = useMemo(() => (
        {playlists, createPlaylist, renamePlaylist, deletePlaylist, addSongToPlaylist, removeSongFromPlaylist, getPlaylistById}
    ), [playlists])

    return (
        <PlaylistContext.Provider value={value}>
            {children}
        </PlaylistContext.Provider>
    )
}

export const usePlaylistContext = () => {
    const context = useContext(PlaylistContext)

    if (!context) {
        throw new Error("usePlaylistContext harus digunakan di dalam PlaylistProvider.")
    }

    return context
}