import {Music} from "lucide-react"

const PlaylistCard = ({playlist,onClick}) => {

    return(
        <button
            onClick={() => onClick?.(playlist)}
            className="group w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left transition-all duration-300 hover:border-primary/40 hover:bg-white/10"
        >

            <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-primary/30 via-primary/10 to-transparent">
                <Music
                    size={56}
                    className="text-white/70 transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            <div className="space-y-1 p-4">
                <h3 className="truncate text-base font-semibold text-white">
                    {playlist.name}
                </h3>

                <p className="text-sm text-white/60">
                    {playlist.songs.length} Songs
                </p>
            </div>
        </button>
    )
}

export default PlaylistCard;