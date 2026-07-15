import {useState} from "react"
import {Search} from "lucide-react"
import PlaylistCard from "./PlaylistCard"

const PlaylistGrid = ({playlists, onPlaylistClick})=>{

    const [search,setSearch] = useState("")
    const filteredPlaylists = playlists.filter((playlist) =>
        playlist.name
            .toLowerCase()
            .includes(search.toLowerCase())
    )

    return(
        <div className="space-y-6">
            <div className="relative max-w-md">
                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder="Search playlist..."
                    className="w-full rounded-xl border border-white/10 bg-[#0f172a]/50 py-3 pl-11 pr-4 text-white outline-none transition focus:border-[#00d4aa]"
                />
            </div>

            {filteredPlaylists.length === 0
                ?(
                    <div className="flex h-52 items-center justify-center rounded-2xl border border-dashed border-white/10">
                        <p className="text-zinc-500">
                            Playlist not found.
                        </p>
                    </div>
                ):(
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredPlaylists.map((playlist)=>(
                            <PlaylistCard
                                key={playlist.id}
                                playlist={playlist}
                                onClick={onPlaylistClick}
                            />
                        ))}
                    </div>
                )
            }
        </div>
    )

}

export default PlaylistGrid