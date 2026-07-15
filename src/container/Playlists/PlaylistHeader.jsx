import {ArrowLeft,Music2} from "lucide-react"

const PlaylistHeader = ({playlist, onBack}) => {

    return(
        <div className="space-y-8">
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
            >
                <ArrowLeft size={18}/>
                Back
            </button>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#00d4aa]/30 via-[#00d4aa]/10 to-transparent">
                    {playlist.cover
                        ?(
                            <img
                                src={playlist.cover.replace("150x150","400x400")}
                                alt={playlist.name}
                                className="h-full w-full object-cover"
                            />
                        ):(
                            <Music2
                                size={64}
                                className="text-white/70"
                            />
                        )
                    }
                </div>

                <div className="flex-1">
                    <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                        Playlist
                    </p>

                    <h1 className="mt-3 break-words text-5xl font-bold text-white lg:text-6xl">
                        {playlist.name}
                    </h1>

                    {playlist.description&&(
                        <p className="mt-4 max-w-3xl text-zinc-400">
                            {playlist.description}
                        </p>
                    )}

                    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                        <span>
                            {playlist.songs.length} Songs
                        </span>

                        <span>
                            •
                        </span>

                        <span>
                            Created {new Date(playlist.createdAt).toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PlaylistHeader