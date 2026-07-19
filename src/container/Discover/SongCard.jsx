import { FaPlay, FaPause, FaHeart, FaPlus } from "react-icons/fa"
import { useState } from "react"

import { useSongCard } from "../../hooks/useSongCard"
import { usePlayer } from "../../context/PlayerContext"
import { useFavoriteContext } from "../../context/FavoriteContext"
import { usePlaylistContext } from "../../context/PlaylistContext"

const SongCard = ({ song }) => {
    const { id, title, artist, album, artwork, duration } = song
    const { isHover, setIsHover, formatDuration } = useSongCard(song)
    const { currentSong, playSong } = usePlayer()
    const { toggleFavorite, isFavorite } = useFavoriteContext()
    const { playlists, addSongToPlaylist } = usePlaylistContext()
    const liked = isFavorite(id)
    const isPlaying = currentSong?.id === id
    const [showPlaylist, setShowPlaylist] = useState(false)

    const handleAddToPlaylist = (playlistId) => {
        addSongToPlaylist(playlistId, song)
        setShowPlaylist(false)
    }

    return (
        <div
            onClick={() => playSong(song)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => {
                setIsHover(false)
                setShowPlaylist(false)
            }}
            className={`relative isolate flex items-center gap-3 rounded-xl border border-white/10 px-3 py-2 backdrop-blur-md transition-all duration-300 group cursor-pointer lg:gap-5 lg:rounded-2xl lg:bg-gradient-to-r lg:from-[#0f172a]/40 lg:px-5 lg:py-4 ${
                showPlaylist
                    ? "z-50"
                    : "z-0"
            } ${
                isPlaying
                    ? "border-[#00d4aa]/40 shadow-[0_0_20px_rgba(0,212,170,.15)]"
                    : "hover:border-[#00d4aa]/30"
            }`}
        >
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 shrink-0">
                <img
                    src={artwork?.replace("150x150", "180x180")}
                    alt={title}
                    className="w-full h-full rounded-md lg:rounded-xl object-cover"
                />

                <div className={`hidden lg:flex absolute inset-0 z-10 items-center justify-center rounded-xl bg-black/50 transition-opacity duration-200 ${isHover || isPlaying ? "opacity-100" : "opacity-0"}`}>
                    {isPlaying
                        ? <FaPause className="text-white text-base" />
                        : <FaPlay className="text-white text-base ml-0.5" />
                    }
                </div>
            </div>

            <div className="flex-1 min-w-0">
                <p className={`text-sm lg:text-base font-semibold truncate ${isPlaying ? "text-[#00d4aa]" : "text-white"}`}>
                    {title}
                </p>

                <p className="text-xs lg:text-sm text-zinc-500 truncate">
                    {artist}
                    {album && (
                        <span className="hidden lg:inline">
                            {" • "}
                            {album}
                        </span>
                    )}
                </p>
            </div>

            <div className="relative hidden lg:flex items-center gap-4">
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        setShowPlaylist((prev) => !prev)
                    }}
                    className="opacity-0 group-hover:opacity-100 transition text-zinc-400 hover:text-[#00d4aa]"
                >
                    <FaPlus />
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(song)
                    }}
                    className={`opacity-0 group-hover:opacity-100 transition text-lg ${
                        liked
                            ? "text-red-500"
                            : "text-zinc-400 hover:text-white"
                    }`}
                >
                    <FaHeart />
                </button>

                {showPlaylist && (
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute right-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#111827] p-2 shadow-2xl"
                    >
                        {playlists.length === 0 ? (
                            <p className="px-3 py-2 text-sm text-zinc-500">
                                No playlist found
                            </p>
                        ) : (
                            playlists.map((playlist) => (
                                <button
                                    key={playlist.id}
                                    onClick={() => handleAddToPlaylist(playlist.id)}
                                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition hover:bg-white/5"
                                >
                                    <span className="truncate">
                                        {playlist.name}
                                    </span>

                                    <span className="text-zinc-500">
                                        {playlist.songs.length}
                                    </span>
                                </button>
                            ))
                        )}
                    </div>
                )}
            </div>

            <span className="w-10 text-right text-xs lg:text-sm text-zinc-500">
                {formatDuration(duration)}
            </span>
        </div>
    )
}

export default SongCard