export default function ArtistCard({artist}) {
    return (
        <div 
            onClick={() => {
                if (artist.artistViewUrl) {
                    window.open(artist.artistViewUrl, "_blank")
                }
            }}
            className="rounded-2xl border border-white/10 bg-[#111627] p-5 transition hover:border-[#00d4aa]/40"
        >
            <img
                src={artist.artworkUrl100.replace("100x100","300x300")}
                alt={artist.artistName}
            />

            <h3
                className="mt-4 text-center font-semibold text-white">
                {artist.artistName}
            </h3>

            <p className="mt-2 text-xs text-[#00d4aa] opacity-0 transition-opacity group-hover:opacity-100">
                View on Apple Music →
            </p>
            
        </div>
    )
}