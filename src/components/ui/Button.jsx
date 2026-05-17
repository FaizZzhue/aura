const Button = ({ label, onClick,variant = "primary", disabled = false }) => {

    const base = "px-4 py-2 rounded-xl text-sm font-semibold transition-all"

    const variants = {
        primary:"bg-[#00d4aa] text-[#0a0a0f] hover:bg-[#00b894]",
        ghost:"border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500",
        icon:"w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10",
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${base} ${variants[variant]} ${
            disabled ? "opacity-40 cursor-not-allowed" : ""
            }`}
        >
            {label}
        </button>
    )
}

export default Button