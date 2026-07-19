import SearchMusicCard from "./SearchMusicCard"

export default function SearchResults({ songs }) {

    return (
        <div className="mt-8 space-y-4">
            {songs.map(song => (
                <SearchMusicCard
                    key={song.trackId}
                    song={song}
                    songs={songs}
                />
            ))}
        </div>
    )

}