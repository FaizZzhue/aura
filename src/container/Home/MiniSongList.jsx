import { FaPlay, FaHeart } from "react-icons/fa"
import { PREVIEW_SONGS } from "../../constants/previewSongs"

const MiniSongList = () => {
    return (
        <div className="space-y-3">
            {PREVIEW_SONGS.map((song, index) => (
                <div
                    key={song.title}
                    className={`
                        flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3
                        ${index === 0 ? "shadow-[0_0_35px_rgba(127,255,212,0.25)] border-[#7fffd4]/30" : ""}
                    `}
                >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-300 to-cyan-300" />

                    <div className="flex-1 text-left min-w-0">
                        <p className="font-semibold truncate">{song.title}</p>
                        <p className="text-sm text-zinc-500 truncate">{song.artist}</p>
                    </div>

                    <span className="text-sm text-zinc-500 hidden sm:block">
                        {song.time}
                    </span>

                    <FaHeart className="text-zinc-500 hidden sm:block" />

                    <button className="w-10 h-10 rounded-full bg-[#7fffd4] text-black flex items-center justify-center">
                        <FaPlay className="ml-0.5" />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default MiniSongList