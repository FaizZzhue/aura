import { motion } from "framer-motion"
import ExploreHeader from "../container/Explore/ExploreHeader"
import SearchBar from "../container/Explore/SearchBar"
import GenrePills from "../container/Explore/GenrePills"
import SectionTitle from "../container/Explore/SectionTitle"
import { useState, useEffect } from "react"
import useExploreSearch from "../hooks/useExploreSearch"
import SearchSkeleton from "../container/Explore/SearchSkeleton"
import EmptySearch from "../container/Explore/EmptySearch"
import SearchResults from "../container/Explore/SearchResults"
import TrendingSongs from "../container/Explore/TrendingSongs"
import ArtistGrid from "../container/Explore/ArtistGrid"
import AlbumGrid from "../container/Explore/AlbumGrid"

const ExplorePage = () => {
    const [query, setQuery] = useState("")
    const [debouncedQuery, setDebouncedQuery] = useState("")

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query)
        }, 500)

        return () => clearTimeout(timer)
    }, [query])

    const {
        songs,
        loading,
    } = useExploreSearch(debouncedQuery)

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="min-h-screen bg-[#050816] px-8 py-8 max-md:px-5"
        >
            <div className="mx-auto max-w-7xl">
                <ExploreHeader />

                <div className="mt-12">
                    <SectionTitle
                        title="Browse Genres"
                        subtitle="Discover music through different genres."
                    />

                    <GenrePills />
                </div>

                <div className="mt-8">
                    <SearchBar
                        value={query}
                        onChange={setQuery}
                    />
                </div>

                {loading && <SearchSkeleton />}

                {!loading && query.trim() && songs.length === 0 && (
                    <EmptySearch />
                )}

                {!loading && query.trim() && songs.length > 0 && (
                    <SearchResults songs={songs} />
                )}

                <div className="mt-14">
                    <SectionTitle
                        title="Trending Songs"
                        subtitle="Popular songs right now."
                    />
                    <TrendingSongs />
                </div>

                <div className="mt-14">
                    <SectionTitle
                        title="Popular Artists"
                        subtitle="Explore top artists."
                    />
                    <ArtistGrid />
                </div>

                <div className="mt-14">
                    <SectionTitle
                        title="Popular Albums"
                        subtitle="Fresh albums for you."
                    />
                    <AlbumGrid />
                </div>
            </div>
        </motion.div>
    )
}

export default ExplorePage