import {useMemo,useState} from "react"
import {ArrowUpDown,ChevronDown,ListMusic,Search} from "lucide-react"
import {SORT_OPTIONS} from "../../constants/playlist"
import PlaylistCard from "./PlaylistCard"

const PlaylistGrid = ({playlists, onPlaylistClick})=>{

    const [search,setSearch] = useState("")
    const [sortBy,setSortBy] = useState("recent")
    const [openSort,setOpenSort] = useState(false)
    const currentSortLabel = SORT_OPTIONS.find(({value}) => value === sortBy)?.label ?? "Sort"
    const filteredPlaylists = useMemo(() => {
        const keyword=search.trim().toLowerCase()

        return playlists.filter(({name}) => 
            name.toLowerCase().includes(keyword)
        )
    },[
        playlists,
        search
    ])

    const sortedPlaylists = useMemo(() => {
        const items=[...filteredPlaylists]

        switch(sortBy){
            case"name":
                return items.sort((a,b) =>
                    a.name.localeCompare(b.name)
                )

            case"songs":
                return items.sort((a,b) =>
                    b.songs.length-a.songs.length
                )

            case"oldest":
                return items.sort((a,b) =>
                    new Date(a.createdAt)-new Date(b.createdAt)
                )

            default:
                return items.sort((a,b) =>
                    new Date(b.updatedAt)-new Date(a.updatedAt)
                )
        }
    },[filteredPlaylists, sortBy])

    const handleSearchChange = (e) => {setSearch(e.target.value)}
    const handleSortToggle = () => {setOpenSort((prev) => !prev)}
    const handleSortChange = (value) => {
        setSortBy(value)
        setOpenSort(false)
    }

    return(
        <div className="space-y-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="relative w-full max-w-xl">
                    <Search
                        size={18}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                    />

                    <input
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Search playlists..."
                        className="h-14 w-full rounded-2xl border border-white/10 bg-[#131d31] pl-14 pr-5 text-white outline-none transition focus:border-[#00d4aa]"
                    />
                </div>

                <div className="relative">
                    <button
                        onClick={handleSortToggle}
                        className="flex h-14 min-w-[240px] items-center justify-between rounded-2xl border border-white/10 bg-[#131d31] px-5 text-white transition hover:border-[#00d4aa]/40"
                    >
                        <div className="flex items-center gap-3">
                            <ArrowUpDown
                                size={18}
                                className="text-zinc-400"
                            />

                            <span>
                                {currentSortLabel}
                            </span>
                        </div>

                        <ChevronDown
                            size={18}
                            className={`transition duration-300 ${
                                openSort
                                    ?"rotate-180"
                                    :""
                            }`}
                        />
                    </button>

                    {openSort &&(
                        <div className="absolute right-0 top-16 z-50 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-2xl">
                            {SORT_OPTIONS.map(({label,value}) => {
                                const active=value === sortBy
                                return(
                                    <button
                                        key={value}
                                        onClick={()=>handleSortChange(value)}
                                        className={`flex w-full items-center justify-between px-5 py-4 text-left transition ${
                                            active
                                                ?"bg-[#00d4aa]/15 text-[#00d4aa]"
                                                :"text-white hover:bg-white/5"
                                        }`}
                                    >

                                        <span>
                                            {label}
                                        </span>

                                        {active &&(
                                            <div className="h-2 w-2 rounded-full bg-[#00d4aa]"/>
                                        )}

                                    </button>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>

            {sortedPlaylists.length === 0
                ? (
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
                        {sortedPlaylists.map((playlist)=>(
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