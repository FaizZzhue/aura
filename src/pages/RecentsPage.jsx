import {Trash2} from "lucide-react"

import RecentHeader from "../container/Recents/RecentHeader"
import RecentGrid from "../container/Recents/RecentGrid"

import useRecents from "../hooks/useRecents"

const RecentsPage=()=>{

    const{
        recents,
        groupedRecents,
        clearRecents
    }=useRecents()

    return(
        <section className="flex-1 px-6 py-6 pb-24 md:pb-6">

            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f172a]/80 via-[#020617]/80 to-black p-8 backdrop-blur-xl">

                <div className="flex items-start justify-between">

                    <RecentHeader
                        total={recents.length}
                    />

                    {recents.length>0&&(
                        <button
                            onClick={clearRecents}
                            className="hidden h-12 items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/5 px-5 text-red-400 transition hover:bg-red-500/10 lg:flex"
                        >
                            <Trash2 size={18}/>
                            Clear History
                        </button>
                    )}

                </div>

                <div className="mt-8">

                    <RecentGrid
                        groupedRecents={groupedRecents}
                    />

                </div>

                {recents.length>0&&(
                    <button
                        onClick={clearRecents}
                        className="mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/5 text-red-400 transition hover:bg-red-500/10 lg:hidden"
                    >
                        <Trash2 size={18}/>
                        Clear History
                    </button>
                )}

            </div>

        </section>
    )

}

export default RecentsPage