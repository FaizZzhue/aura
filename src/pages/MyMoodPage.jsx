import { MOODS } from "../constants/moodConfig"
import MoodSelector from "../container/Discover/MoodSelector"
import SongCard from "../container/Discover/SongCard"
import { useFavoriteContext } from "../context/FavoriteContext"

const MyMoodPage = ({ activeMood, onMoodSelect }) => {
    const { favorites } = useFavoriteContext()

    const filteredFavorites = favorites.filter(
        (song) => song.mood === activeMood.id
    )

    return (
        <div className="flex-1 px-8 py-8">
            <div className="mb-8">
                <h2 className="font-display text-3xl font-bold text-white">
                    My Mood
                </h2>

                <p className="mt-2 text-sm font-body text-zinc-400">
                    Your mood history and saved playlists.
                </p>
            </div>

            <MoodSelector
                moods={MOODS}
                selected={activeMood}
                onSelect={onMoodSelect}
            />

            {filteredFavorites.length === 0 ? (
                <div className="mt-12 flex flex-col items-center justify-center py-16 text-center">
                    <span className="mb-4 text-4xl">
                        🎵
                    </span>

                    <h3 className="mb-2 font-display text-lg font-semibold text-white">
                        No saved songs yet
                    </h3>

                    <p className="max-w-xs text-sm font-body text-zinc-500">
                        Go to Discover, pick a mood, and start saving songs you love.
                    </p>
                </div>
            ) : (
                <div className="mt-8 flex flex-col gap-3">
                    {filteredFavorites.map((song) => (
                        <SongCard
                            key={song.id}
                            song={song}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyMoodPage