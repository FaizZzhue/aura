const SectionTitle = ({title, subtitle }) => {
    return (
        <div>
            <h2 className="font-display text-2xl font-bold text-white">
                {title}
            </h2>

            <p className="mt-2 text-zinc-400">
                {subtitle}
            </p>
        </div>
    )
}

export default SectionTitle