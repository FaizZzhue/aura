import { FaLeaf, FaBolt, FaTint, FaBullseye, FaFire } from "react-icons/fa"

export const MOODS = [
    {
        id: "chill",
        label: "Chill",
        description: "Relax & unwind",
        icon: FaLeaf,
        keyword: "chill ambient lofi",
        color: {
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/40",
            text: "text-emerald-400",
            active: "bg-emerald-500/20",
            shadow: "shadow-[0_0_30px_rgba(74,222,128,0.35)]",
        },
    },
    {
        id: "energetic",
        label: "Energetic",
        description: "Boost your energy",
        icon: FaBolt,
        keyword: "energetic upbeat workout",
        color: {
            bg: "bg-orange-500/10",
            border: "border-orange-500/40",
            text: "text-orange-400",
            active: "bg-orange-500/20",
            shadow: "shadow-[0_0_30px_rgba(251,191,36,0.35)]",
        },
    },
    {
        id: "melancholic",
        label: "Melancholic",
        description: "Feels & emotions",
        icon: FaTint,
        keyword: "melancholic sad emotional",
        color: {
            bg: "bg-blue-500/10",
            border: "border-blue-500/40",
            text: "text-blue-400",
            active: "bg-blue-500/20",
            shadow: "shadow-[0_0_30px_rgba(96,165,250,0.35)]",
        },
    },
    {
        id: "focus",
        label: "Focus",
        description: "Deep concentration",
        icon: FaBullseye,
        keyword: "focus study concentration instrumental",
        color: {
            bg: "bg-purple-500/10",
            border: "border-purple-500/40",
            text: "text-purple-400",
            active: "bg-purple-500/20",
            shadow: "shadow-[0_0_30px_rgba(192,132,252,0.35)]",
        },
    },
    {
        id: "hype",
        label: "Hype",
        description: "Pump up the vibe",
        icon: FaFire,
        keyword: "hype rap hip hop",
        color: {
            bg: "bg-pink-500/10",
            border: "border-pink-500/40",
            text: "text-pink-400",
            active: "bg-pink-500/20",
            shadow: "shadow-[0_0_30px_rgba(244,114,182,0.35)]",
        },
    },
]

export const DEFAULT_MOOD = MOODS[0]