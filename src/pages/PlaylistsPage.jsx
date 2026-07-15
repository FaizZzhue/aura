import {useState} from "react"
import {Plus} from "lucide-react"
import {useNavigate} from "react-router-dom"
import PlaylistGrid from "../container/Playlists/PlaylistGrid"
import EmptyPlaylist from "../container/Playlists/EmptyPlaylist"
import PlaylistModal from "../container/Playlists/PlaylistModal"
import usePlaylist from "../hooks/usePlaylist"

const PlaylistsPage = () => {

    const navigate=useNavigate()
    const {playlists, createPlaylist} = usePlaylist()
    const [openModal,setOpenModal] = useState(false)
    const handleCreatePlaylist = (name) => {
        createPlaylist(name)
    }

    const handlePlaylistClick = (playlist) => {
        navigate(`/playlists/${playlist.id}`)
    }

    return(
        <section className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        My Playlists
                    </h1>

                    <p className="mt-2 text-zinc-400">
                        Organize your favorite songs into playlists.
                    </p>
                </div>

                <button
                    onClick={()=>setOpenModal(true)}
                    className="flex items-center gap-2 rounded-xl bg-[#00d4aa] px-5 py-3 font-medium text-[#050816] transition hover:opacity-90"
                >
                    <Plus size={18}/>
                    New Playlist
                </button>
            </div>

            <PlaylistModal
                open={openModal}
                onClose={()=>setOpenModal(false)}
                onSubmit={handleCreatePlaylist}
            />

            {playlists.length === 0
                ?(
                    <EmptyPlaylist/>
                ):(
                    <PlaylistGrid
                        playlists={playlists}
                        onPlaylistClick={handlePlaylistClick}
                    />
                )
            }
        </section>
    )

}

export default PlaylistsPage