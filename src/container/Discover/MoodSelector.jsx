import MoodPill from "./MoodPill"

const MoodSelector = ({ moods, selected, onSelect }) => {
    return (
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:flex lg:flex-wrap">
            {moods.map((mood) => (
                <MoodPill
                    key={mood.id}
                    mood={mood}
                    isActive={selected?.id === mood.id}
                    onClick={() => onSelect(mood)}
                />
            ))}
        </div>
    )
}
export default MoodSelector