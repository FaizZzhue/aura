import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8 py-20 min-h-screen">

            <div className="mb-6 relative">
                <p className="font-display text-[120px] font-bold text-[#1a1a2e] leading-none select-none">
                    404
                </p>
                <span className="absolute inset-0 flex items-center justify-center text-5xl">
                    🎵
                </span>
            </div>

            <h2 className="font-display text-2xl font-bold text-white mb-3">
                Lost in the void
            </h2>
            <p className="text-zinc-400 font-body text-sm max-w-sm leading-relaxed mb-8">
                The page you're looking for doesn't exist. 
                Let's get you back to the music.
            </p>

            <button
                onClick={() => navigate("/")}
                className="btn-primary"
            >
                Back to Discover
            </button>

        </div>
    )
}

export default NotFound