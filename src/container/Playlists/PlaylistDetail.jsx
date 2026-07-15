import {useState} from "react"
import {Pencil,Trash2} from "lucide-react"

import PlaylistHeader from "./PlaylistHeader"
import PlaylistSongList from "./PlaylistSongList"
import RenamePlaylistModal from "./RenamePlaylistModal"
import usePlaylist from "../../hooks/usePlaylist"

const PlaylistDetail = ({playlist, currentSong, onPlay, toggleFavorite, isFavorite, onBack})=>{

    const{renamePlaylist, deletePlaylist }=usePlaylist()
    const[openRename,setOpenRename]=useState(false)
    const handleRename = (playlistId,name) => {
        renamePlaylist(playlistId, name)
        setOpenRename(false)
    }

    const handleDelete=()=>{
        const confirmDelete = window.confirm("Delete this playlist?")

        if(!confirmDelete){
            return
        }

        deletePlaylist(playlist.id)
        onBack()
    }

    return(
        <section className="space-y-8">
            <PlaylistHeader
                playlist={playlist}
                onBack={onBack}
            />

            <div className="flex flex-wrap items-center gap-3">
                <button
                    onClick={()=>setOpenRename(true)}
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-white transition hover:bg-white/5"
                >
                    <Pencil size={18}/>
                    Rename
                </button>

                <button
                    onClick={handleDelete}
                    className="flex items-center gap-2 rounded-xl border border-red-500/30 px-5 py-3 text-red-400 transition hover:bg-red-500/10"
                >
                    <Trash2 size={18}/>
                    Delete
                </button>
            </div>

            <PlaylistSongList
                playlist={playlist}
                currentSong={currentSong}
                onPlay={onPlay}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
            />

            <RenamePlaylistModal
                open={openRename}
                playlist={playlist}
                onClose={()=>setOpenRename(false)}
                onRename={handleRename}
            />
        </section>
    )

}

export default PlaylistDetail