import SongCard from "./SongCard"

const SongList = ({ songs, loading, error, activeMood }) => {

    if (loading) {
        return <div className="text-zinc-400">Loading...</div>
    }

    if (error) {
        return <div className="text-red-400">{error}</div>
    }

    const normalizedSongs = songs.map(item => ({
        id: item.trackId,
        title: item.trackName,
        artist: item.artistName,
        album: item.collectionName,
        artwork: item.artworkUrl100,
        duration: item.trackTimeMillis,
        previewUrl: item.previewUrl,
        mood: activeMood.id
    }))

    return (
        <div className="mt-4 space-y-2">
            {normalizedSongs.map(song => (
                <SongCard
                    key={song.id}
                    song={song}
                    songs={normalizedSongs}
                />
            ))}
        </div>
    )

}

export default SongList