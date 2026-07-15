import {Music2,CalendarDays} from "lucide-react"

const PlaylistCard = ({playlist, onClick})=>{

    const artwork = playlist.cover
    const totalSongs = playlist.songs.length
    const updatedDate = new Date(
        playlist.updatedAt
    ).toLocaleDateString()

    return(
        <button
            onClick={()=>onClick?.(playlist)}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0f172a]/70 to-[#111827]/40 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4aa]/40 hover:shadow-[0_15px_40px_rgba(0,212,170,0.12)]"
        >
            <div className="relative aspect-square overflow-hidden">
                {artwork
                    ?(
                        <img
                            src={artwork.replace("150x150","400x400")}
                            alt={playlist.name}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        />
                    ):(
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#00d4aa]/30 via-[#00d4aa]/10 to-transparent">

                            <Music2
                                size={60}
                                className="text-white/70"
                            />

                        </div>
                    )
                }
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent"/>
            </div>

            <div className="space-y-4 p-5">
                <div>
                    <h3 className="truncate text-lg font-semibold text-white transition group-hover:text-[#00d4aa]">
                        {playlist.name}
                    </h3>

                    {playlist.description && (
                        <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
                            {playlist.description}
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-between text-sm text-zinc-500">
                    <div className="flex items-center gap-2">
                        <Music2
                            size={16}
                        />

                        <span>
                            {totalSongs} Songs
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <CalendarDays
                            size={16}
                        />

                        <span>
                            {updatedDate}
                        </span>
                    </div>
                </div>
            </div>
        </button>
    )

}

export default PlaylistCard