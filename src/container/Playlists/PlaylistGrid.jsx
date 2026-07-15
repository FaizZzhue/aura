import {useMemo,useState} from "react"
import {ArrowUpDown,ListMusic,Search} from "lucide-react"

import PlaylistCard from "./PlaylistCard"

const PlaylistGrid=({
    playlists,
    onPlaylistClick
})=>{

    const[search,setSearch]=useState("")
    const[sortBy,setSortBy]=useState("recent")

    const filteredPlaylists=useMemo(()=>{

        const keyword=search.toLowerCase()

        const items=playlists.filter((playlist)=>
            playlist.name
                .toLowerCase()
                .includes(keyword)
        )

        switch(sortBy){

            case"name":
                return items.sort((a,b)=>
                    a.name.localeCompare(b.name)
                )

            case"songs":
                return items.sort((a,b)=>
                    b.songs.length-a.songs.length
                )

            case"oldest":
                return items.sort((a,b)=>
                    new Date(a.createdAt)-new Date(b.createdAt)
                )

            default:
                return items.sort((a,b)=>
                    new Date(b.updatedAt)-new Date(a.updatedAt)
                )

        }

    },[playlists,search,sortBy])

    return(
        <div className="space-y-8">

            <div className="flex flex-col gap-5 rounded-3xl lg:flex-row lg:items-center lg:justify-between">

                <div className="relative w-full max-w-xl">

                    <Search
                        size={18}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                    />

                    <input
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        placeholder="Search playlists..."
                        className="h-14 w-full rounded-2xl border border-white/10 bg-[#131d31] pl-14 pr-5 text-white outline-none transition focus:border-[#00d4aa]"
                    />

                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#131d31] px-5">

                    <ArrowUpDown
                        size={18}
                        className="text-zinc-400"
                    />

                    <select
                        value={sortBy}
                        onChange={(e)=>setSortBy(e.target.value)}
                        className="h-14 bg-transparent text-white outline-none"
                    >

                        <option
                            value="recent"
                            className="bg-[#131d31]"
                        >
                            Recently Updated
                        </option>

                        <option
                            value="oldest"
                            className="bg-[#131d31]"
                        >
                            Oldest
                        </option>

                        <option
                            value="name"
                            className="bg-[#131d31]"
                        >
                            Name
                        </option>

                        <option
                            value="songs"
                            className="bg-[#131d31]"
                        >
                            Most Songs
                        </option>

                    </select>

                </div>

            </div>

            {filteredPlaylists.length===0?(
                <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-[#0f172a]/25">

                    <ListMusic
                        size={56}
                        className="mb-6 text-zinc-500"
                    />

                    <h2 className="text-2xl font-semibold text-white">
                        Playlist not found
                    </h2>

                    <p className="mt-3 text-zinc-500">
                        Try another keyword.
                    </p>

                </div>
            ):(
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

                    {filteredPlaylists.map((playlist)=>(
                        <PlaylistCard
                            key={playlist.id}
                            playlist={playlist}
                            onClick={onPlaylistClick}
                        />
                    ))}

                </div>
            )}

        </div>
    )

}

export default PlaylistGrid