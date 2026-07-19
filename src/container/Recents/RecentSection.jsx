import RecentCard from "./RecentCard"

const RecentSection = ({ title, recents }) => {

    if (recents.length === 0) {
        return null
    }

    return (
        <section className="space-y-5">
            <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />

                <h2 className="shrink-0 text-lg font-semibold text-white">
                    {title}
                </h2>

                <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="space-y-3">
                {recents.map(recent => (
                    <RecentCard
                        key={recent.id}
                        recent={recent}
                        recents={recents}
                    />
                ))}
            </div>
        </section>
    )

}

export default RecentSection