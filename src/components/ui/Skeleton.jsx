const Skeleton = ({ className = "" }) => {
    return (
        <div
            className={`
                bg-white/5 animate-pulse rounded-lg
                ${className}
            `}
        />
    )
}

export default Skeleton