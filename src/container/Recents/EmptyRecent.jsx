import {History} from "lucide-react"

const EmptyRecent = () => {

    return(
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl px-8 text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#00d4aa]/10">
                <History
                    size={56}
                    className="text-[#00d4aa]"
                />
            </div>

            <h2 className="mt-8 text-3xl font-bold text-white">
                No Recent Activity
            </h2>

            <p className="mt-4 max-w-lg text-zinc-400">
                Start playing songs from Discover, Explore or your Playlists. Your listening history will appear here automatically.
            </p>
        </div>
    )

}

export default EmptyRecent