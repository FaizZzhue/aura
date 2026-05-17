const Avatar = ({ src, alt = "avatar", size = "md", fallback = "?" }) => {
    const sizes = {
        sm: "w-7 h-7 text-xs",
        md: "w-9 h-9 text-sm",
        lg: "w-12 h-12 text-base",
    }

    if (!src) {
        return (
            <div
                className={`
                    ${sizes[size]}
                    rounded-full flex items-center justify-center bg-[#00d4aa20] border border-[#00d4aa40] text-[#00d4aa] font-semibold
                `}
            >
                {fallback}
            </div>
        )
    }

    return (
        <img
            src={src}
            alt={alt}
            className={`${sizes[size]} rounded-full object-cover`}
        />
    )
}

export default Avatar