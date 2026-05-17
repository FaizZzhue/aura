import { Link } from "react-router-dom"

const CTA = () => {
    return (
        <section className="max-w-5xl mx-auto px-5 py-20">
            <div className="rounded-3xl border border-[#7fffd4]/30 bg-[#7fffd4]/10 p-10 text-center shadow-[0_0_70px_rgba(127,255,212,0.25)]">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Ready to feel the music?
                </h2>

                <p className="text-zinc-400 mt-3">
                    Start discovering songs that match your vibe.
                </p>

                <Link to="/discover" className="inline-block mt-8 rounded-full bg-white px-6 py-3 font-semibold text-black hover:scale-105 transition">
                    Try Aura Now
                </Link>
            </div>
        </section>
    )
}

export default CTA