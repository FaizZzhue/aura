import RecentHeader from "../container/Recents/RecentHeader"
import RecentGrid from "../container/Recents/RecentGrid"
import useRecents from "../hooks/useRecents"

const RecentsPage = () => {
    const { recents, groupedRecents, clearRecents } = useRecents()

    return (
        <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-8 py-10">
            <RecentHeader
                total={recents.length}
                onClear={clearRecents}
            />

            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0f172a]/70 to-[#111827]/30 p-6 backdrop-blur-xl">
                <RecentGrid
                    groupedRecents={groupedRecents}
                />
            </div>
        </section>
    )
}

export default RecentsPage