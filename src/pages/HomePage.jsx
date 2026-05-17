import Footer from "../components/layout/Footer/Footer"
import Hero from "../container/Home/Hero"

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#050816] text-white overflow-x-hidden">
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,212,170,0.18),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.14),transparent_35%)] pointer-events-none" />

            <main className="relative z-10">
                <Hero />
            </main>

            <Footer />
        </div>
    )
}

export default HomePage