import { FaPlay, FaPause, FaHeart } from "react-icons/fa"
import { useSongCard } from "../../hooks/useSongCard"

const SongCard = ({song, isPlaying, onPlay, toggleFavorite, isFavorite}) => {
    const {id, title, artist, album, artwork, duration} = song
    const {isHover, setIsHover, formatDuration} = useSongCard(song)
    const liked = isFavorite(id)

    return (
        <div 
            onClick={onPlay} 
            onMouseEnter={() => setIsHover(true)} 
            onMouseLeave={() => setIsHover(false)} 
            className={`flex items-center gap-3 px-3 py-2 lg:gap-5 lg:px-5 lg:py-4 rounded-xl lg:rounded-2xl border border-white/10 lg:bg-gradient-to-r lg:from-[#0f172a]/40 lg:to-transparent backdrop-blur-md transition-all duration-300 group cursor-pointer 
                ${isPlaying 
                ? "border-[#00d4aa]/40 shadow-[0_0_20px_rgba(0,212,170,0.15)]" 
                : "hover:border-[#00d4aa]/30"
            }`}
        >
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 shrink-0">
                <img src={artwork?.replace("150x150", "180x180")} alt={title} className="w-full h-full rounded-md lg:rounded-xl object-cover" />
                <div className={`hidden lg:flex absolute inset-0 z-10 items-center justify-center rounded-xl bg-black/50 transition-opacity duration-200 ${isHover || isPlaying ? "opacity-100" : "opacity-0"}`}>
                    {isPlaying ? <FaPause className="text-white text-base" /> : <FaPlay className="text-white text-base ml-0.5" />}
                </div>
            </div>

            <div className="flex-1 min-w-0">
                <p className={`text-sm lg:text-base font-semibold truncate ${isPlaying ? "text-[#00d4aa]" : "text-white"}`}>{title}</p>
                <p className="text-xs lg:text-sm text-zinc-500 truncate">{artist}{album && <span className="hidden lg:inline"> • {album}</span>}</p>
            </div>

            <button
                onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(song)
                }}
                className={`hidden lg:block opacity-0 group-hover:opacity-100 transition text-lg
                    ${liked
                        ? "text-red-500"
                        : "text-zinc-400 hover:text-white"
                    }`}
            >
                <FaHeart />
            </button>

            <span className="text-xs lg:text-sm text-zinc-500 w-10 text-right">{formatDuration(duration)}</span>
        </div>
    )
}

export default SongCard