import { Play, Clock3 } from "lucide-react"
import { useSongCard } from "../../hooks/useSongCard"

const SearchMusicCard = ({ song }) => {
    const { formatDuration } = useSongCard()

    return (
        <div className=" group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111627] p-4 transition-all duration-300 hover:border-emerald-400/40 hover:bg-[#171d2e]">
            <img
                src={song.artworkUrl100}
                alt={song.trackName}
                className="h-16 w-16 rounded-xl object-cover"
            />

            <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-white">
                    {song.trackName}
                </h3>

                <p className="truncate text-sm text-zinc-400">
                    {song.artistName}
                </p>

                <p className="truncate text-xs text-zinc-500">
                    {song.collectionName}
                </p>
            </div>

            <div className="hidden items-center gap-2 text-sm text-zinc-500 md:flex">
                <Clock3 size={15} />
                {formatDuration(song.trackTimeMillis)}
            </div>

            <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
                <Play
                    size={18}
                    fill="currentColor"
                />
            </button>
        </div>
    )
}

export default SearchMusicCard