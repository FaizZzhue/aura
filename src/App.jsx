import {useState} from "react"
import {BrowserRouter,Routes,Route,useLocation} from "react-router-dom"
import Navbar from "./components/layout/Navbar/Navbar"
import AudioHistoryProvider from "./components/AudioHistoryProvider"
import PlayerBar from "./container/Discover/PlayerBar"
import HomePage from "./pages/HomePage"
import DiscoverPage from "./pages/DiscoverPage"
import MyMoodPage from "./pages/MyMoodPage"
import ExplorePage from "./pages/ExplorePage"
import PlaylistsPage from "./pages/PlaylistsPage"
import PlaylistDetailPage from "./pages/PlaylistDetailPage"
import RecentsPage from "./pages/RecentsPage"
import NotFound from "./pages/NotFound"
import {DEFAULT_MOOD} from "./constants/moodConfig"
import useFavorite from "./hooks/useFavorite"

const AppContent = () => {

    const [activeMood, setActiveMood] = useState(DEFAULT_MOOD)
    const [currentSong, setCurrentSong] = useState(null)
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const {favorites, toggleFavorite, isFavorite} = useFavorite()
    const location = useLocation()
    const isAppPage = location.pathname !=="/"
    const handleSidebarToggle = () => {setSidebarOpen((prev) => !prev)}

    return(
        <div className="app-shell min-h-screen overflow-x-hidden bg-[#050816]">
            {isAppPage && (
                <Navbar
                    open={sidebarOpen}
                    onToggle={handleSidebarToggle}
                />
            )}

            <main
                className={`
                    min-h-screen flex flex-col transition-all duration-300
                    ${
                        isAppPage
                            ?sidebarOpen
                                ?"ml-[240px] max-md:ml-0 max-md:pt-[76px]"
                                :"ml-[88px] max-md:ml-0 max-md:pt-[76px]"
                            :"ml-0"
                    }
                    ${
                        currentSong&&isAppPage
                            ?"pb-32 max-md:pb-56"
                            :""
                    }
                `}
            >
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage/>}
                    />

                    <Route
                        path="/discover"
                        element={
                            <DiscoverPage
                                activeMood={activeMood}
                                onMoodSelect={setActiveMood}
                                currentSong={currentSong}
                                onPlay={setCurrentSong}
                                toggleFavorite={toggleFavorite}
                                isFavorite={isFavorite}
                            />
                        }
                    />

                    <Route
                        path="/my-mood"
                        element={
                            <MyMoodPage
                                activeMood={activeMood}
                                onMoodSelect={setActiveMood}
                                favorites={favorites}
                                currentSong={currentSong}
                                onPlay={setCurrentSong}
                                toggleFavorite={toggleFavorite}
                                isFavorite={isFavorite}
                            />
                        }
                    />

                    <Route
                        path="/explore"
                        element={
                            <ExplorePage
                                currentSong={currentSong}
                                onPlay={setCurrentSong}
                                toggleFavorite={toggleFavorite}
                                isFavorite={isFavorite}
                            />
                        }
                    />

                    <Route
                        path="/playlists"
                        element={<PlaylistsPage/>}
                    />

                    <Route
                        path="/playlists/:id"
                        element={
                            <PlaylistDetailPage
                                currentSong={currentSong}
                                onPlay={setCurrentSong}
                                toggleFavorite={toggleFavorite}
                                isFavorite={isFavorite}
                            />
                        }
                    />

                    <Route
                        path="/recents"
                        element={
                            <RecentsPage
                                currentSong={currentSong}
                                onPlay={setCurrentSong}
                            />
                        }
                    />

                    <Route
                        path="*"
                        element={<NotFound/>}
                    />
                </Routes>
            </main>

            {isAppPage&&(
                <>
                    <PlayerBar
                        currentSong={currentSong}
                        onClose={()=>setCurrentSong(null)}
                        toggleFavorite={toggleFavorite}
                        isFavorite={isFavorite}
                        sidebarOpen={sidebarOpen}
                    />

                    <AudioHistoryProvider
                        currentSong={currentSong}
                    />
                </>
            )}
        </div>
    )

}

const App =()=>{
    return(
        <BrowserRouter>
            <AppContent/>
        </BrowserRouter>
    )
}

export default App