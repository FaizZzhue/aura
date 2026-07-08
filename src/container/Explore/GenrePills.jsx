import { GENRES } from "../../constants/genres"

const GenrePills = () => {
    return (
        <div className="mt-5 flex flex-wrap gap-4">

            {GENRES.map((genre) => (
                <button
                    key={genre}
                    className="rounded-full border border-white/10 bg-[#111627] px-5 py-3 text-sm text-zinc-300 transition-all duration-300 hover:border-[#00d4aa]/40 hover:bg-[#00d4aa]/10 hover:text-[#00d4aa]">
                    {genre}
                </button>
            ))}

        </div>
    )
}

export default GenrePills