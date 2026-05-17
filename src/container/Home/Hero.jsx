import { Link } from "react-router-dom"
import MiniSongList from "./MiniSongList"
import { MOODS } from "../../constants/moodConfig"

const Hero = () => {
    return (
        <section
            className="w-full min-h-screen lg:min-h-0 flex flex-col justify-center items-center text-center lg:grid lg:grid-cols-2 lg:items-center lg:text-left gap-12 max-w-7xl mx-auto px-4 sm:px-5 py-0 lg:py-20"
        >
            <div className="order-1 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
                    Music that understands your mood.
                </h2>

                <p className="mt-4 sm:mt-6 text-zinc-400 text-sm sm:text-base lg:text-lg max-w-md lg:max-w-xl mx-auto lg:mx-0">
                    Discover songs that match how you feel instantly.
                </p>

                <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
                    <Link
                        to="/discover"
                        className="inline-block rounded-full bg-[#7fffd4] text-black px-6 py-3 text-sm sm:text-base font-semibold hover:scale-105 transition"
                    >
                        Start Exploring
                    </Link>
                </div>
            </div>

            <div className="order-2 hidden lg:block">
                <div className="rounded-3xl border border-[#7fffd4]/30 bg-white/5 p-4 shadow-[0_0_70px_rgba(127,255,212,0.25)]">
                    <div className="rounded-2xl bg-[#0d1220] p-5">

                        <div className="mb-5">
                            <h3 className="text-xl font-bold">
                                How are you feeling today? ✦
                            </h3>
                            <p className="text-sm text-zinc-400 mt-1">
                                Pick a mood we’ll find the perfect soundtrack.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-5">
                            {MOODS.map((mood) => {
                                const Icon = mood.icon

                                return (
                                    <div
                                        key={mood.label}
                                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                                    >
                                        <Icon className={`text-xl sm:text-2xl ${mood.color.text}`} />

                                        <span className="text-sm">
                                            {mood.label}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>

                        <MiniSongList />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero