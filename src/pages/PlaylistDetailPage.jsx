import {useParams,useNavigate} from "react-router-dom"
import PlaylistDetail from "../container/Playlists/PlaylistDetail"
import usePlaylist from "../hooks/usePlaylist"

const PlaylistDetailPage = ({currentSong, onPlay, toggleFavorite, isFavorite})=>{

    const {id} = useParams()
    const navigate=useNavigate()
    const {getPlaylistById} = usePlaylist()
    const playlist = getPlaylistById(id)

    if(!playlist){
        return(
            <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6">
                <h1 className="text-3xl font-bold text-white">
                    Playlist Not Found
                </h1>

                <p className="text-zinc-400">
                    This playlist doesn't exist.
                </p>

                <button
                    onClick={()=>navigate("/playlists")}
                    className="rounded-xl bg-[#00d4aa] px-6 py-3 font-medium text-[#050816] transition hover:opacity-90"
                >
                    Back to Playlists
                </button>
            </section>
        )
    }

    return(
        <PlaylistDetail
            playlist={playlist}
            currentSong={currentSong}
            onPlay={onPlay}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
        />
    )

}

export default PlaylistDetailPage