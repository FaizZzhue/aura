
export default function AlbumCard({album}) {

    return (
        <div 
            onClick={() => {
                if (album.collectionViewUrl) {
                    window.open(album.collectionViewUrl, "_blank")
                }
            }}
            className="rounded-2xl border border-white/10 bg-[#111627] overflow-hidden transition hover:border-[#00d4aa]/40"
        >
            <img
                src={album.artworkUrl100}
                className="w-full"
            />

            <div className="p-4">
                <h3 className=" truncate font-semibold text-white">
                    {album.collectionName}
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                    {album.artistName}
                </p>
            </div>
        </div>
    )
}