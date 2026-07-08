import MoodSelector from "../container/Discover/MoodSelector"
import SongList from "../container/Discover/SongList"
import { MOODS } from "../constants/moodConfig"
import useFetchMusic from "../hooks/useFetchMusic"

const DiscoverPage = ({activeMood, onMoodSelect, currentSong, onPlay, toggleFavorite, isFavorite}) => {
    const {songs, loading, error} = useFetchMusic(activeMood?.keyword)

    return (
        <div className="flex-1 px-6 py-6 pb-24 md:pb-6">
            <div className="relative rounded-3xl p-8 min-h-[calc(100vh-120px)] md:min-h-0 bg-gradient-to-br from-[#0f172a]/80 via-[#020617]/80 to-black border border-white/10 backdrop-blur-xl overflow-hidden">
                <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#00d4aa] opacity-20 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl pointer-events-none" />
                <div className="relative z-10">
                    <div className="mb-8">
                        <h2 className="font-display text-3xl font-bold text-white">
                            How are you feeling today?{" "}
                            <span className="text-[#00d4aa]">
                                ✦
                            </span>
                        </h2>

                        <p className="text-zinc-400 font-body mt-2 text-sm">
                            Pick a mood we'll find the perfect soundtrack.
                        </p>

                    </div>

                    <MoodSelector
                        moods={MOODS}
                        selected={activeMood}
                        onSelect={onMoodSelect}
                    />

                    <div className="flex items-center justify-between mt-8 mb-4">
                        <p className="section-label">
                            RESULT FOR{" "}
                            <span className="text-[#00d4aa] uppercase">
                                "{activeMood?.label}"
                            </span>
                        </p>

                        <p className="text-xs text-zinc-500 font-body">
                            Most relevant
                        </p>
                    </div>

                    <SongList
                        songs={songs}
                        loading={loading}
                        error={error}
                        currentSong={currentSong}
                        onPlay={onPlay}
                        toggleFavorite={toggleFavorite}
                        isFavorite={isFavorite}
                        activeMood={activeMood}
                    />
                </div>
            </div>
        </div>
    )
}

export default DiscoverPage