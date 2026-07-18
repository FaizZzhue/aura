import RecentHeader from "../container/Recents/RecentHeader"
import RecentGrid from "../container/Recents/RecentGrid"
import useRecents from "../hooks/useRecents"

const RecentsPage = () => {
    const { recents, groupedRecents, clearRecents } = useRecents()

    return (
        <section className="flex-1 px-6 py-6 pb-24 md:pb-6">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f172a]/80 via-[#020617]/80 to-black p-8 backdrop-blur-xl">
                <RecentHeader
                    total={recents.length}
                    onClear={clearRecents}
                />

                <div className="">
                    <RecentGrid
                        groupedRecents={groupedRecents}
                    />
                </div>
            </div>
        </section>
    )
}

export default RecentsPage