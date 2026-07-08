import { SearchX } from "lucide-react"

export default function EmptySearch() {
    return (
        <div className="mt-16 flex flex-col items-center gap-4 text-center ">
            <SearchX
                size={46}
                className="text-zinc-600"
            />

            <h3 className="text-xl font-semibold text-white">
                No songs found
            </h3>

            <p className="text-zinc-500">
                Try another keyword.
            </p>
        </div>
    )
}