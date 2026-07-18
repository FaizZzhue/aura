import { useState } from "react"
import { Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import PlaylistGrid from "../container/Playlists/PlaylistGrid"
import EmptyPlaylist from "../container/Playlists/EmptyPlaylist"
import PlaylistModal from "../container/Playlists/PlaylistModal"
import { usePlaylistContext } from "../context/PlaylistContext"

const PlaylistsPage = () => {

    const navigate = useNavigate()
    const {playlists,createPlaylist} = usePlaylistContext()
    const [openModal, setOpenModal] = useState(false)
    const handleCreatePlaylist = (name) => {createPlaylist(name)}
    const handlePlaylistClick = (playlist) => {navigate(`/playlists/${playlist.id}`)}

    return (
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-8 py-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="mt-2 text-5xl font-bold text-white">
                        My Playlists
                    </h1>

                    <p className="mt-4 max-w-2xl text-lg text-zinc-400">
                        Create, organize and manage every playlist in one place.
                    </p>
                </div>

                <button
                    onClick={() => setOpenModal(true)}
                    className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#00d4aa] px-8 text-lg font-semibold text-[#050816] transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,212,170,.25)]"
                >
                    <Plus size={20} />
                    New Playlist
                </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0f172a]/70 to-[#111827]/30 p-6 backdrop-blur-xl">
                <PlaylistGrid
                    playlists={playlists}
                    onPlaylistClick={handlePlaylistClick}
                />
            </div>

            {playlists.length === 0 && (
                <EmptyPlaylist
                    onCreate={() => setOpenModal(true)}
                />
            )}

            <PlaylistModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onSubmit={handleCreatePlaylist}
            />
        </section>
    )

}

export default PlaylistsPage