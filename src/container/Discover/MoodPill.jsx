const MoodPill = ({ mood, isActive, onClick }) => {
    const Icon = mood.icon
    const base = `flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl w-full lg:w-auto lg:min-w-[210px] border backdrop-blur-xl cursor-pointer transition-all duration-300`
    const inactive = `bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white hover:-translate-y-1 hover:${mood.color.border}`
    const active = `
        ${mood.color.bg}
        ${mood.color.border}
        ${mood.color.text}
        ${mood.color.shadow}
    `

    return (
        <button
            onClick={onClick}
            className={`${base} ${isActive ? active : inactive}`}
        >
            <Icon className={`text-xl sm:text-2xl shrink-0 ${mood.color.text}`} />

            <div className="flex flex-col items-start min-w-0">
                <span className="font-semibold text-sm sm:text-base">
                    {mood.label}
                </span>
                <span className="hidden lg:block text-xs sm:text-sm text-zinc-500">
                    {mood.description}
                </span>
            </div>
        </button>
    )
}

export default MoodPill;
