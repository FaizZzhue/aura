import {Clock3,Trash2} from "lucide-react"

const RecentHeader = ({total, onClear})=>{

    return(
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
                <span className="text-sm uppercase tracking-[0.3em] text-[#00d4aa]">
                    Listening History
                </span>

                <h1 className="mt-2 text-5xl font-bold text-white">
                    Recents
                </h1>

                <p className="mt-4 flex items-center gap-2 text-zinc-400">
                    <Clock3 size={18}/>
                    {total} recently played songs
                </p>
            </div>

            {total > 0 && (
                <button
                    onClick={onClear}
                    className="flex h-12 items-center gap-3 self-start rounded-2xl border border-red-500/20 bg-red-500/5 px-5 text-red-400 transition hover:bg-red-500/10"
                >
                    <Trash2 size={18}/>
                    Clear History
                </button>
            )}
        </div>
    )

}

export default RecentHeader