import SongCard from "../Discover/SongCard"

const PlaylistSongList = ({ playlist }) => {

    if (playlist.songs.length === 0) {
        return (
            <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5 text-center">
                <h2 className="text-2xl font-semibold text-white">
                    Playlist is Empty
                </h2>

                <p className="mt-3 max-w-md text-zinc-400">
                    Add songs from Discover or Explore to start listening from this playlist.
                </p>
            </div>
        )
    }

    return (
        <div className="space-y-3">
            {playlist.songs.map((song) => (
                <SongCard
                    key={song.id}
                    song={song}
                />
            ))}
        </div>
    )
}

export default PlaylistSongList