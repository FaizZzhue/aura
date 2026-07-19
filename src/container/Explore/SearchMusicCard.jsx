import { Play, Pause, Clock3 } from "lucide-react"
import { useSongCard } from "../../hooks/useSongCard"
import { usePlayer } from "../../context/PlayerContext"

const SearchMusicCard = ({ song, songs = [] }) => {

    const { formatDuration } = useSongCard()
    const { currentSong, playSong } = usePlayer()
    const normalizedSong = {
        id: song.trackId,
        title: song.trackName,
        artist: song.artistName,
        album: song.collectionName,
        artwork: song.artworkUrl100,
        duration: song.trackTimeMillis,
        previewUrl: song.previewUrl
    }
    const queue = songs.length
        ? songs.map(item => ({
            id: item.trackId,
            title: item.trackName,
            artist: item.artistName,
            album: item.collectionName,
            artwork: item.artworkUrl100,
            duration: item.trackTimeMillis,
            previewUrl: item.previewUrl
        }))
        : [normalizedSong]
    const isPlaying = currentSong?.id === normalizedSong.id
    const handlePlay = () => {
        playSong(normalizedSong, queue)
    }

    return (
        <div
            onClick={handlePlay}
            className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-white/10 bg-[#111627] p-4 transition-all duration-300 hover:border-emerald-400/40 hover:bg-[#171d2e]"
        >
            <img
                src={normalizedSong.artwork}
                alt={normalizedSong.title}
                className="h-16 w-16 rounded-xl object-cover"
            />

            <div className="min-w-0 flex-1">
                <h3 className={`truncate font-semibold ${isPlaying ? "text-[#00d4aa]" : "text-white"}`}>
                    {normalizedSong.title}
                </h3>

                <p className="truncate text-sm text-zinc-400">
                    {normalizedSong.artist}
                </p>

                <p className="truncate text-xs text-zinc-500">
                    {normalizedSong.album}
                </p>
            </div>

            <div className="hidden items-center gap-2 text-sm text-zinc-500 md:flex">
                <Clock3 size={15} />
                {formatDuration(normalizedSong.duration)}
            </div>

            <button
                onClick={(e) => {
                    e.stopPropagation()
                    handlePlay()
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-black opacity-0 transition-all duration-300 group-hover:opacity-100"
            >
                {isPlaying
                    ? <Pause size={18}/>
                    : <Play size={18} fill="currentColor"/>
                }
            </button>
        </div>
    )

}

export default SearchMusicCard