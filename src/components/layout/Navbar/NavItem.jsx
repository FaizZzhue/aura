import { NavLink } from "react-router-dom"

export const MobileNavItem = ({ item }) => {
    const Icon = item.icon

    return (
        <NavLink to={item.path}>
            {({ isActive }) => (
                <div className="flex flex-col items-center justify-center gap-1 py-1">
                    <div
                        className={`
                            w-11 h-9 rounded-2xl flex items-center justify-center
                            transition-all duration-300
                            ${isActive
                                ? "bg-[#00d4aa]/20 text-[#00d4aa] shadow-[0_0_18px_rgba(0,212,170,0.25)]"
                                : "text-zinc-500"
                            }
                        `}
                    >
                        <Icon className="w-5 h-5" />
                    </div>

                    <span
                        className={`
                            text-[10px] font-medium
                            ${isActive ? "text-[#00d4aa]" : "text-zinc-500"}
                        `}
                    >
                        {item.label}
                    </span>
                </div>
            )}
        </NavLink>
    )
}

const NavItem = ({ item }) => {
    const Icon = item.icon

    return (
        <NavLink to={item.path}>
            {({ isActive }) => (
                <div
                    className={`
                        flex items-center gap-3 px-4 py-3 rounded-xl
                        transition-all duration-300 group relative overflow-hidden
                        ${isActive
                            ? "bg-gradient-to-r from-[#00d4aa]/20 via-[#00d4aa]/10 to-transparent text-[#00d4aa] shadow-[0_0_20px_rgba(0,212,170,0.15)]"
                            : "text-zinc-400 hover:text-white hover:bg-[#141420]"
                        }
                    `}
                >
                    {isActive && (
                        <div className="absolute inset-0 bg-[#00d4aa]/10 blur-xl opacity-60" />
                    )}

                    <Icon
                        className={`
                            w-5 h-5 relative z-10
                            ${isActive
                                ? "text-[#00d4aa]"
                                : "text-zinc-500 group-hover:text-white"
                            }
                        `}
                    />

                    <span className="font-body text-sm relative z-10">
                        {item.label}
                    </span>
                </div>
            )}
        </NavLink>
    )
}

export default NavItem