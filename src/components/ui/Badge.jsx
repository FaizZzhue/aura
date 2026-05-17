const Badge = ({ label, color = "green" }) => {
    const colors = {
        green: "bg-[#00d4aa20] text-[#00d4aa] border-[#00d4aa40]",
        orange: "bg-orange-500/10 text-orange-400 border-orange-500/30",
        blue: "bg-blue-500/10 text-blue-400 border-blue-500/30",
        purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
        pink: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    }

    return (
        <span
            className={`px-2.5 py-0.5 rounded-full border text-xs font-semibold
                ${colors[color]}
            `}
        >
            {label}
        </span>
    )
}

export default Badge