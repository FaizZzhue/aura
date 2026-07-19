import EmptyRecent from "./EmptyRecent"
import RecentSection from "./RecentSection"

const RecentGrid = ({ groupedRecents }) => {

    const { today, yesterday, earlier } = groupedRecents

    const isEmpty =
        today.length === 0 &&
        yesterday.length === 0 &&
        earlier.length === 0

    if (isEmpty) {
        return <EmptyRecent />
    }

    return (
        <div className="space-y-10">
            <RecentSection
                title="Today"
                recents={today}
            />

            <RecentSection
                title="Yesterday"
                recents={yesterday}
            />

            <RecentSection
                title="Earlier"
                recents={earlier}
            />
        </div>
    )

}

export default RecentGrid