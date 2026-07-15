import {Music2} from "lucide-react"

const EmptyPlaylist = () => {

    return(
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/5 px-6 py-16 text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Music2
                    size={40}
                    className="text-primary"
                />
            </div>

            <h2 className="text-xl font-semibold text-white">
                No playlists yet
            </h2>

            <p className="mt-3 max-w-md text-sm text-white/60">
                Create your first playlist and start organizing your favorite songs.
            </p>
        </div>
    )

}

export default EmptyPlaylist