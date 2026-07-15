import {Clock3,Play} from "lucide-react"

const RecentCard = ({recent, currentSong, onPlay})=>{

    const {song, playedAt} = recent
    const isPlaying = currentSong?.id === song.id

    return(
        <button
            onClick={()=>onPlay(song)}
            className={`group flex w-full items-center gap-5 rounded-2xl border border-white/10 bg-[#111827]/40 p-4 text-left transition-all duration-300 hover:border-[#00d4aa]/40 hover:bg-[#111827]/70 ${
                isPlaying
                    ?"border-[#00d4aa]/40 shadow-[0_0_20px_rgba(0,212,170,.15)]"
                    :""
            }`}
        >

            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
                <img
                    src={song.artwork.replace("100x100","300x300").replace("150x150","300x300")}
                    alt={song.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition group-hover:opacity-100">
                    <Play
                        size={18}
                        className="fill-white text-white"
                    />
                </div>
            </div>

            <div className="min-w-0 flex-1">
                <h3 className={`truncate text-base font-semibold ${
                    isPlaying
                        ?"text-[#00d4aa]"
                        :"text-white"
                }`}>
                    {song.title}
                </h3>

                <p className="mt-1 truncate text-sm text-zinc-400">
                    {song.artist}
                </p>

                <p className="mt-2 truncate text-xs text-zinc-500">
                    {song.album}
                </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm text-zinc-500">
                <Clock3 size={16}/>

                {new Date(playedAt).toLocaleTimeString([],{
                    hour:"2-digit",
                    minute:"2-digit"
                })}
            </div>
        </button>
    )

}

export default RecentCard