import {Menu} from "lucide-react"
import {NAV_LINKS} from "../../../constants/navigations"
import NavItem from "./NavItem"
import MobileNav from "./MobileNav"

const Navbar = ({open, onToggle})=>{
    return (
        <>
            <aside
                className={`hidden md:flex fixed left-0 top-0 z-40 h-screen flex-col border-r border-white/10 bg-[#0f0f18]/95 backdrop-blur-xl transition-all duration-300
                    ${
                        open
                            ?"w-[240px]"
                            :"w-[88px]"
                    }
                `}
            >
                <div className="px-6 pt-7 pb-5">
                    <div className="flex items-center justify-between">
                        <div
                            className={`transition-all duration-300 overflow-hidden ${
                                open
                                    ?"w-auto opacity-100"
                                    :"w-0 opacity-0"
                            }`}
                        >
                            <h1 className="font-display text-2xl font-bold text-[#00d4aa]">
                                aura
                            </h1>

                            <p className="mt-0.5 text-xs text-zinc-500">
                                Mood-Based Music Discovery
                            </p>
                        </div>

                        <button
                            onClick={onToggle}
                            className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-[#141420] hover:text-white"
                        >
                            <Menu size={20}/>
                        </button>
                    </div>
                </div>

                <nav
                    className={`flex flex-1 flex-col gap-1 pt-5 transition-all duration-300
                        ${
                            open
                                ?"px-3"
                                :"px-2"
                        }
                    `}
                >
                    {NAV_LINKS.map((item)=>(
                        <NavItem
                            key={item.id}
                            item={item}
                            open={open}
                        />
                    ))}
                </nav>

                <div
                    className={`mx-3 mb-5 mt-auto rounded-2xl border border-[#2a2a45] bg-gradient-to-br from-[#1a1a35] to-[#12122a] transition-all duration-300
                        ${
                            open
                                ?"p-4"
                                :"flex h-14 items-center justify-center p-0"
                        }
                    `}
                >

                    {open?(
                        <>
                            <span className="text-lg">
                                ✦
                            </span>

                            <p className="mt-2 font-display text-sm font-semibold text-white">
                                New here?
                            </p>

                            <p className="mt-1 text-xs leading-relaxed text-zinc-400 font-body">
                                Aura adapts to your mood and finds the perfect soundtrack for you.
                            </p>
                        </>
                    ):(
                        <span className="text-xl text-[#00d4aa]">
                            ✦
                        </span>
                    )}

                </div>
            </aside>
            <MobileNav />
        </>
    )
}

export default Navbar