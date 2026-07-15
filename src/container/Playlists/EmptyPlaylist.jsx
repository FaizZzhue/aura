import {Music2,Plus} from "lucide-react"

const EmptyPlaylist = ({onCreate})=>{

    return(
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-gradient-to-b from-[#0f172a]/40 to-transparent px-8 text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#00d4aa]/10">
                <Music2
                    size={56}
                    className="text-[#00d4aa]"
                />

            </div>

            <h2 className="mt-8 text-3xl font-bold text-white">
                No Playlist Yet
            </h2>

            <p className="mt-4 max-w-lg text-zinc-400">
                Create your first playlist and organize your favorite songs from Discover and Explore into one place.
            </p>

            <button
                onClick={onCreate}
                className="mt-8 flex items-center gap-3 rounded-2xl bg-[#00d4aa] px-6 py-3 font-semibold text-[#050816] transition hover:scale-[1.02] hover:opacity-90"
            >
                <Plus size={18}/>
                Create Playlist
            </button>
        </div>
    )

}

export default EmptyPlaylist