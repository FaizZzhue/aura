import { Search } from "lucide-react"

const SearchBar = ({value, onChange}) => {
    return (
        <div className="relative">

            <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"/>

            <input
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                type="text"
                placeholder="Search songs, artists or albums..."
                className="w-full rounded-2xl border border-white/10 bg-[#111627] py-4 pl-14 pr-5 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-[#00d4aa]/50 focus:ring-4 focus:ring-[#00d4aa]/10"
            />

        </div>
    )
}

export default SearchBar