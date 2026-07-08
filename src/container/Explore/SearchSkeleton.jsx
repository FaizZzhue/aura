export default function SearchSkeleton() {
    return (
        <div className="mt-6 space-y-4">
            {
                [...Array(6)].map((_, index)=>(
                    <div
                        key={index}
                        className="h-20 rounded-2xl animate-pulse bg-white/5"
                    />
                ))
            }
        </div>
    )
}