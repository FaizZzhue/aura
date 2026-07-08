import SongCard from "./SongCard"

const SongList = ({ songs, loading, error, onPlay, currentSong, toggleFavorite, isFavorite, activeMood }) => {

    if (loading) {
        return <div className="text-zinc-400">Loading...</div>
    }

    if (error) {
        return <div className="text-red-400">{error}</div>
    }

    return (
        <div className="mt-4 space-y-2">
            {songs.map((item) => {

                const song = {
                    id: item.trackId,
                    title: item.trackName,
                    artist: item.artistName,
                    album: item.collectionName,
                    artwork: item.artworkUrl100,
                    duration: item.trackTimeMillis,
                    previewUrl: item.previewUrl,
                    mood: activeMood.id,
                }

                return (
                    <SongCard
                        key={song.id}
                        song={song}
                        isPlaying={currentSong?.id === song.id}
                        onPlay={() => onPlay(song)}
                        toggleFavorite={toggleFavorite}
                        isFavorite={isFavorite}
                    />
                )
            })}
        </div>
    )
}

export default SongList