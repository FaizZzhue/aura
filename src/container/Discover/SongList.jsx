import SongCard from "./SongCard"

const SongList = ({ songs, loading, error, onPlay, currentSong, toggleFavorite, isFavorite }) => {

    if (loading) {
        return <div className="text-zinc-400">Loading...</div>
    }

    if (error) {
        return <div className="text-red-400">{error}</div>
    }

    return (
        <div className="mt-4 space-y-2">
            {songs.map((song, i) => (
                <SongCard
                    key={song.trackId}
                    trackId={song.trackId}
                    index={i + 1}
                    title={song.trackName}
                    artist={song.artistName}
                    album={song.collectionName}
                    artwork={song.artworkUrl100}
                    duration={song.trackTimeMillis}
                    isPlaying={currentSong?.trackId === song.trackId}
                    onPlay={() => onPlay(song)}
                    toggleFavorite={toggleFavorite}
                    isFavorite={isFavorite}
                />
            ))}
        </div>
    )
}

export default SongList