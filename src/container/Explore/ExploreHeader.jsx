import { Sparkles } from "lucide-react"

const ExploreHeader = () => {
    return (
        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#151a2d] via-[#121727] to-[#0b2a30] p-8">
            <div className="flex items-center gap-2">

                <h1 className="font-display text-4xl font-bold text-white">
                    Explore Music
                </h1>

                <Sparkles
                    className="text-[#00d4aa]"
                    size={28}
                />

            </div>

            <p className="mt-3 max-w-xl text-zinc-400">
                Search for songs, artists and albums to discover
                your next favorite soundtrack.
            </p>
        </section>
    )
}

export default ExploreHeader