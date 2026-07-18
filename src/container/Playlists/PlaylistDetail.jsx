import { useState } from "react"
import { Pencil, Trash2 } from "lucide-react"
import PlaylistHeader from "./PlaylistHeader"
import PlaylistSongList from "./PlaylistSongList"
import RenamePlaylistModal from "./RenamePlaylistModal"
import { usePlaylistContext } from "../../context/PlaylistContext"

const PlaylistDetail = ({ playlist, onBack }) => {
    const { renamePlaylist, deletePlaylist } = usePlaylistContext()

    const [openRename, setOpenRename] = useState(false)

    const handleRename = (playlistId, name) => {
        renamePlaylist(playlistId, name)
        setOpenRename(false)
    }

    const handleDelete = () => {
        if (!window.confirm("Delete this playlist?")) return

        deletePlaylist(playlist.id)
        onBack()
    }

    return (
        <section className="mx-auto w-full max-w-7xl px-10 py-8 xl:px-12">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/40 backdrop-blur-xl">

                <div className="px-10 pt-10 pb-8">
                    <PlaylistHeader
                        playlist={playlist}
                        onBack={onBack}
                    />
                </div>

                <div className="border-t border-white/10">
                    <div className="flex flex-col gap-6 px-8 py-6 lg:flex-row lg:items-center lg:justify-between">

                        <div>
                            <h2 className="text-xl font-semibold text-white">
                                Songs
                            </h2>

                            <p className="mt-2 text-sm text-zinc-400">
                                {playlist.songs.length} songs in this playlist
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setOpenRename(true)}
                                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:border-[#00d4aa]/40 hover:bg-[#00d4aa]/10"
                            >
                                <Pencil size={18} />
                                Rename
                            </button>

                            <button
                                onClick={handleDelete}
                                className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-5 py-3 text-red-400 transition hover:bg-red-500/10"
                            >
                                <Trash2 size={18} />
                                Delete
                            </button>
                        </div>

                    </div>
                </div>

                <div className="border-t border-white/10 px-10 py-8">
                    <PlaylistSongList
                        playlist={playlist}
                    />
                </div>

            </div>

            <RenamePlaylistModal
                open={openRename}
                playlist={playlist}
                onClose={() => setOpenRename(false)}
                onRename={handleRename}
            />
        </section>
    )
}

export default PlaylistDetail