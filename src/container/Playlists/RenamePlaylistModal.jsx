import PlaylistModal from "./PlaylistModal"

const RenamePlaylistModal = ({open, playlist, onClose, onRename})=>{

    const handleRename = (name) => {

        if(!playlist){
            return
        }

        onRename(
            playlist.id,
            name
        )

    }

    return(
        <PlaylistModal
            open={open}
            onClose={onClose}
            onSubmit={handleRename}
            title="Rename Playlist"
            buttonText="Save"
            initialValue={playlist?.name??""}
        />
    )

}

export default RenamePlaylistModal