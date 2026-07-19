import { Clock3 } from "lucide-react"
import { FaHeart, FaPlus, FaPlay, FaPause } from "react-icons/fa"
import { useState } from "react"
import { usePlayer } from "../../context/PlayerContext"
import { useFavoriteContext } from "../../context/FavoriteContext"
import { usePlaylistContext } from "../../context/PlaylistContext"
import { useSongCard } from "../../hooks/useSongCard"

const RecentCard = ({ recent, recents = [] }) => {
    
    const song = recent.song
    const queue = recents.length
        ? recents.map(item => item.song)
        : [song]
    const { currentSong, playSong } = usePlayer()
    const { toggleFavorite, isFavorite } = useFavoriteContext()
    const { playlists, addSongToPlaylist } = usePlaylistContext()
    const { isHover, setIsHover, formatDuration } = useSongCard(song)
    const liked = isFavorite(song.id)
    const isPlaying = currentSong?.id === song.id
    const [showPlaylist, setShowPlaylist] = useState(false)
    const handlePlay = () => {
        playSong(song, queue)
    }
    const handleAddToPlaylist = (playlistId) => {
        addSongToPlaylist(playlistId, song)
        setShowPlaylist(false)
    }

    return (
        <div
            onClick={handlePlay}
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
                    src={song.artwork?.replace("150x150", "180x180")}
                    alt={song.title}
                    className="w-full h-full rounded-md lg:rounded-xl object-cover"
                />

                <div className={`hidden lg:flex absolute inset-0 items-center justify-center rounded-xl bg-black/50 transition-opacity duration-200 ${isHover || isPlaying ? "opacity-100" : "opacity-0"}`}>
                    {isPlaying
                        ? <FaPause className="text-white text-base" />
                        : <FaPlay className="text-white text-base ml-0.5" />
                    }
                </div>
            </div>

            <div className="flex-1 min-w-0">
                <p className={`truncate text-sm font-semibold lg:text-base ${isPlaying ? "text-[#00d4aa]" : "text-white"}`}>
                    {song.title}
                </p>

                <p className="truncate text-xs text-zinc-500 lg:text-sm">
                    {song.artist}
                    {song.album && (
                        <span className="hidden lg:inline">
                            {" • "}
                            {song.album}
                        </span>
                    )}
                </p>

                <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
                    <Clock3 size={13} />
                    {new Date(recent.playedAt).toLocaleString()}
                </div>
            </div>

            <div className="relative hidden lg:flex items-center gap-4">
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        setShowPlaylist(prev => !prev)
                    }}
                    className="opacity-0 transition group-hover:opacity-100 text-zinc-400 hover:text-[#00d4aa]"
                >
                    <FaPlus />
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(song)
                    }}
                    className={`opacity-0 transition group-hover:opacity-100 text-lg ${
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
                        {playlists.length === 0 
                        ? (
                            <p className="px-3 py-2 text-sm text-zinc-500">
                                No playlist found
                            </p>
                        ) : (
                            playlists.map(playlist => (
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

            <span className="w-14 text-right text-xs text-zinc-500 lg:text-sm">
                {formatDuration(song.duration)}
            </span>
        </div>
    )

}

export default RecentCard