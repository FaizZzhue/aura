import { Home, Heart, Clock, Bookmark, Compass } from "lucide-react"

export const NAV_LINKS = [
    {
        id: "discover",
        label: "Discover",
        icon: Home,
        path: "/discover",
    },
    {
        id: "my-mood",
        label: "My Mood",
        icon: Heart,
        path: "/my-mood",
    },
    {
        id: "recents",
        label: "Recents",
        icon: Clock,
        path: "/recents",
    },
    {
        id: "playlists",
        label: "Playlists",
        icon: Bookmark,
        path: "/playlists",
    },
    {
        id: "explore",
        label: "Explore",
        icon: Compass,
        path: "/explore",
    },
]
