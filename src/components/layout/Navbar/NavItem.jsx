import {NavLink} from "react-router-dom"
import {motion,AnimatePresence} from "framer-motion"

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

const NavItem = ({ item, open }) => {
    const Icon = item.icon

    return (
        <NavLink to={item.path}>
            {({isActive})=>(
                <div
                    className={`relative overflow-visiblegroup`}
                >
                    <div
                        className={`relative overflow-hidden rounded-2xl transition-all duration-300
                            ${
                                open
                                    ?"flex items-center gap-3 px-4 py-3"
                                    :"flex h-14 items-center justify-center"
                            }
                            ${
                                isActive
                                    ?"bg-gradient-to-r from-[#00d4aa]/20 via-[#00d4aa]/10 to-transparent text-[#00d4aa] shadow-[0_0_24px_rgba(0,212,170,.18)]"
                                    :"text-zinc-400 hover:bg-[#141420] hover:text-white"
                            }
                        `}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="sidebar-active"
                                className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-[#00d4aa]"
                            />
                        )}
                        <Icon
                            className={`relative z-10 h-5 w-5 shrink-0 transition-colors duration-300
                                ${
                                    isActive
                                        ?"text-[#00d4aa]"
                                        :"text-zinc-500 group-hover:text-white"
                                }
                            `}
                        />
                        <AnimatePresence>
                            {open && (
                                <motion.span
                                    initial={{opacity:0, x:-10}}
                                    animate={{opacity:1, x:0}}
                                    exit={{opacity:0, x:-10}}
                                    transition={{duration:.2}}
                                    className="relative z-10 whitespace-nowrap text-sm font-body"
                                >
                                    {item.label}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>

                    {!open && (
                        <div className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 rounded-xl bg-[#141420] px-3 py-2 text-sm text-white opacity-0 shadow-2xl transition-all duration-200 group-hover:translate-x-2 group-hover:opacity-100">
                            {item.label}
                        </div>
                    )}
                </div>
            )}
        </NavLink>
    )
}

export default NavItem