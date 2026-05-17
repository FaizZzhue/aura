import { NAV_LINKS } from "../../../constants/navigations"
import { MobileNavItem } from "./NavItem"

const MobileNav = () => {
    return (
        <>
            <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#070914]/85 backdrop-blur-xl border-b border-white/10">
                <div className="px-4 py-4 flex items-center justify-between">
                    <div>
                        <h1 className="font-display text-xl font-bold text-[#00d4aa]">
                            aura
                        </h1>
                        <p className="text-[11px] text-zinc-500">
                            Mood-Based Music Discovery
                        </p>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-[#00d4aa]/15 border border-[#00d4aa]/30 flex items-center justify-center text-[#00d4aa]">
                        ✦
                    </div>
                </div>
            </header>

            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#070914]/95 backdrop-blur-2xl border-t border-white/10">
                <div className="grid grid-cols-5 px-2 py-2">
                    {NAV_LINKS.slice(0, 5).map((item) => (
                        <MobileNavItem key={item.id} item={item} />
                    ))}
                </div>
            </nav>
        </>
    )
}

export default MobileNav