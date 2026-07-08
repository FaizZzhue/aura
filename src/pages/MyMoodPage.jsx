import { MOODS } from "../constants/moodConfig"
import MoodSelector from "../container/Discover/MoodSelector"
import SongCard from "../container/Discover/SongCard"

const MyMoodPage = ({activeMood, onMoodSelect, favorites, currentSong, onPlay, toggleFavorite, isFavorite}) => {
    const filteredFavorites = favorites.filter(
        song => song.mood === activeMood.id
    )

    return (
        <div className="flex-1 px-8 py-8">
            <div className="mb-8">
                <h2 className="font-display text-3xl font-bold text-white">
                    My Mood
                </h2>

                <p className="text-zinc-400 font-body mt-2 text-sm">
                    Your mood history and saved playlists.
                </p>
            </div>

            <MoodSelector
                moods={MOODS}
                selected={activeMood}
                onSelect={onMoodSelect}
            />

            {filteredFavorites.length === 0 ? (
                <div className="mt-12 flex flex-col items-center justify-center text-center py-16">
                    <span className="text-4xl mb-4">
                        🎵
                    </span>

                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                        No saved songs yet
                    </h3>

                    <p className="text-sm text-zinc-500 font-body max-w-xs">
                        Go to Discover, pick a mood,
                        and start saving songs you love.
                    </p>
                </div>
            ) : (
                <div className="mt-8 flex flex-col gap-3">
                    {filteredFavorites.map((song) => (
                        <SongCard
                            key={song.id}
                            song={song}
                            onPlay={() => onPlay(song)}
                            isPlaying={currentSong?.id === song.id}
                            toggleFavorite={toggleFavorite}
                            isFavorite={isFavorite}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyMoodPage