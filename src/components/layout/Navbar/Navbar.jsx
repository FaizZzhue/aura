import { NAV_LINKS } from "../../../constants/navigations"
import NavItem from "./NavItem"
import MobileNav from "./MobileNav"

const Navbar = () => {
    return (
        <>
            <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[240px] bg-[#0f0f18] flex-col z-40">
                <div className="px-6 pt-7 pb-5">
                    <h1 className="font-display text-2xl font-bold text-[#00d4aa]">
                        aura
                    </h1>
                    <p className="text-xs text-zinc-500 mt-0.5 font-body">
                        Mood-Based Music Discovery
                    </p>
                </div>

                <nav className="px-3 pt-5 flex flex-col gap-1">
                    {NAV_LINKS.map((item) => (
                        <NavItem key={item.id} item={item} />
                    ))}
                </nav>

                <div className="mx-3 mt-auto mb-5 p-4 rounded-2xl bg-gradient-to-br from-[#1a1a35] to-[#12122a] border border-[#2a2a45]">
                    <span className="text-lg">✦</span>
                    <p className="text-sm font-display font-semibold text-white mt-1">
                        New here?
                    </p>
                    <p className="text-xs text-zinc-400 font-body mt-1 leading-relaxed">
                        Aura adapts to your mood and finds the perfect soundtrack for you.
                    </p>
                </div>
            </aside>

            <MobileNav />
        </>
    )
}

export default Navbar