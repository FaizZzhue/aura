import { useNavigate, useParams } from "react-router-dom"

import PlaylistDetail from "../container/Playlists/PlaylistDetail"

import { usePlaylistContext } from "../context/PlaylistContext"

const PlaylistDetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { getPlaylistById } = usePlaylistContext()
    const playlist = getPlaylistById(id)
    const handleBack = () => {
        navigate("/playlists")
    }

    if (!playlist) {
        return (
            <section className="mx-auto flex min-h-[60vh] w-full max-w-7xl flex-col items-center justify-center gap-6 px-10">
                <h1 className="text-3xl font-bold text-white">
                    Playlist Not Found
                </h1>

                <p className="text-zinc-400">
                    This playlist doesn't exist.
                </p>

                <button
                    onClick={handleBack}
                    className="rounded-xl bg-[#00d4aa] px-6 py-3 font-medium text-[#050816] transition hover:opacity-90"
                >
                    Back to Playlists
                </button>
            </section>
        )
    }

    return (
        <PlaylistDetail
            playlist={playlist}
            onBack={handleBack}
        />
    )
}

export default PlaylistDetailPage