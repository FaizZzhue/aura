import EmptyRecent from "./EmptyRecent"
import RecentSection from "./RecentSection"

const RecentGrid = ({groupedRecents, currentSong, onPlay})=>{

    const {today, yesterday, earlier} = groupedRecents
    const isEmpty = today.length === 0 && yesterday.length === 0 && earlier.length === 0

    if(isEmpty){
        return(
            <EmptyRecent/>
        )
    }

    return(
        <div className="space-y-10">
            <RecentSection
                title="Today"
                recents={today}
                currentSong={currentSong}
                onPlay={onPlay}
            />

            <RecentSection
                title="Yesterday"
                recents={yesterday}
                currentSong={currentSong}
                onPlay={onPlay}
            />

            <RecentSection
                title="Earlier"
                recents={earlier}
                currentSong={currentSong}
                onPlay={onPlay}
            />
        </div>
    )

}

export default RecentGrid