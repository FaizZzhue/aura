import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaRandom, FaRedo, FaVolumeUp, FaHeart } from "react-icons/fa"
import { usePlayer } from "../../context/PlayerContext"
import { useFavoriteContext } from "../../context/FavoriteContext"
import { useAudioPlayer } from "../../hooks/useAudioPlayer"
import { formatTime } from "../../utils/formatTime"

const PlayerBar = ({ onClose, sidebarOpen }) => {
    const { currentSong } = usePlayer()
    const { toggleFavorite, isFavorite } = useFavoriteContext()

    const liked = currentSong
        ? isFavorite(currentSong.id)
        : false

    const { audioRef, isPlaying, currentTime, duration, volume, progress, setVolume, setCurrentTime, setDuration, setIsPlaying, togglePlay, handleSeek } = useAudioPlayer()

    if (!currentSong) return null

    return (
        <>
            <audio
                ref={audioRef}
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onLoadedMetadata={() => setDuration(audioRef.current.duration)}
                onEnded={() => setIsPlaying(false)}
            />

            <div
                className={`fixed bottom-[90px] left-0 right-0 z-40 px-4 transition-all duration-300 md:bottom-4 md:px-0 md:right-4 ${
                    sidebarOpen
                        ? "md:left-[255px]"
                        : "md:left-[95px]"
                }`}
            >
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#10131f]/85 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                    <div className="relative z-10 flex items-center justify-between px-4 py-3 lg:grid lg:grid-cols-[280px_1fr_260px] lg:gap-6 lg:px-6 lg:py-5">
                        <div className="flex items-center gap-3 min-w-0 lg:gap-4">
                            <img
                                src={currentSong.artwork?.replace("100x100", "140x140")}
                                alt={currentSong.title}
                                className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg lg:rounded-xl object-cover"
                            />

                            <div className="min-w-0">
                                <p className="text-sm lg:text-base font-bold text-white truncate">
                                    {currentSong.title}
                                </p>

                                <p className="text-xs lg:text-sm text-zinc-400 truncate">
                                    {currentSong.artist}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 lg:hidden">
                            <button
                                onClick={() => toggleFavorite(currentSong)}
                                className={`text-xl transition-all duration-200 ${
                                    liked
                                        ? "text-red-500 scale-110"
                                        : "text-zinc-400"
                                }`}
                            >
                                <FaHeart />
                            </button>

                            <button
                                onClick={togglePlay}
                                className="text-white text-xl"
                            >
                                {isPlaying
                                    ? <FaPause />
                                    : <FaPlay className="ml-0.5" />
                                }
                            </button>
                        </div>

                        <div className="absolute left-0 bottom-0 w-full lg:hidden">
                            <div className="relative h-[2px] bg-white/10 overflow-hidden">
                                <div
                                    className="absolute left-0 top-0 h-full bg-[#6ee7c8]"
                                    style={{ width: `${progress}%` }}
                                />

                                <input
                                    type="range"
                                    min={0}
                                    max={duration || 0}
                                    value={currentTime}
                                    onChange={handleSeek}
                                    className="absolute inset-0 w-full opacity-0 cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="hidden lg:flex flex-col items-center gap-4">
                            <div className="flex items-center gap-8 text-zinc-300">
                                <button>
                                    <FaRandom />
                                </button>

                                <button>
                                    <FaStepBackward />
                                </button>

                                <button
                                    onClick={togglePlay}
                                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6ee7c8] text-black"
                                >
                                    {isPlaying
                                        ? <FaPause />
                                        : <FaPlay className="ml-1" />
                                    }
                                </button>

                                <button>
                                    <FaStepForward />
                                </button>

                                <button>
                                    <FaRedo />
                                </button>
                            </div>

                            <div className="flex w-full max-w-[560px] items-center gap-4">
                                <span className="w-10 text-right text-xs text-zinc-400">
                                    {formatTime(currentTime)}
                                </span>

                                <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                                    <div
                                        className="absolute left-0 top-0 h-full bg-[#6ee7c8]"
                                        style={{ width: `${progress}%` }}
                                    />

                                    <input
                                        type="range"
                                        min={0}
                                        max={duration || 0}
                                        value={currentTime}
                                        onChange={handleSeek}
                                        className="absolute inset-0 w-full cursor-pointer opacity-0"
                                    />
                                </div>

                                <span className="w-10 text-xs text-zinc-400">
                                    {formatTime(duration)}
                                </span>
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center justify-end gap-4">
                            <FaVolumeUp className="text-zinc-300" />

                            <input
                                type="range"
                                min={0}
                                max={1}
                                step={0.01}
                                value={volume}
                                onChange={(e) => setVolume(Number(e.target.value))}
                                className="w-28 accent-[#6ee7c8]"
                            />

                            <button
                                onClick={onClose}
                                className="text-xl text-zinc-500 transition hover:text-white"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayerBar