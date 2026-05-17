const Spinner = ({ size = "md" }) => {
    const sizes = {
        sm: "w-4 h-4 border-2",
        md: "w-6 h-6 border-2",
        lg: "w-10 h-10 border-[3px]",
    }

    return (
        <div
            className={`
                ${sizes[size]}
                rounded-full animate-spin border-white/20 border-t-[#00d4aa]
            `}
        />
    )
}

export default Spinner