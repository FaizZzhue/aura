import {useEffect,useMemo,useState} from "react"
import{addRecentSong, clearRecentSongs, getRecentSongs, groupRecentSongs, removeRecentSong}from "../utils/recentStorage"

const useRecents = () => {

    const [recents,setRecents] = useState([])

    useEffect(() => {
        setRecents(getRecentSongs())
    },[])

    const addRecent = (song) => {setRecents(addRecentSong(song))}
    const removeRecent = (songId) => {setRecents(removeRecentSong(songId))}
    const clearRecents = () => {
        clearRecentSongs()
        setRecents([])
    }
    const groupedRecents = useMemo(() => groupRecentSongs(recents), [recents])

    return{recents, groupedRecents, addRecent, removeRecent, clearRecents}

}

export default useRecents