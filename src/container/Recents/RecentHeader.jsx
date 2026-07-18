import {Clock3} from "lucide-react"

const RecentHeader=({total})=>{

    return(
        <div className="space-y-4">

            <span className="text-sm uppercase tracking-[0.3em] text-[#00d4aa]">
                Listening History
            </span>

            <h1 className="text-5xl font-bold text-white">
                Recents
            </h1>

            <p className="flex items-center gap-2 text-zinc-400">
                <Clock3 size={18}/>
                {total} recently played songs
            </p>

        </div>
    )

}

export default RecentHeader