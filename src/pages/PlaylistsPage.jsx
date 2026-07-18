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
        <section className="flex-1 px-6 py-6 pb-24 md:pb-6">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f172a]/80 via-[#020617]/80 to-black p-8 backdrop-blur-xl">
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

                <div className= "mt-8">
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
            </div>
        </section>
    )

}

export default PlaylistsPage