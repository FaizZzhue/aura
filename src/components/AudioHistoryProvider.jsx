import {useEffect} from "react"
import useRecents from "../hooks/useRecents"

const AudioHistoryProvider = ({currentSong}) => {

    const{addRecent} = useRecents()

    useEffect(() => {

        if(!currentSong){
            return
        }

        addRecent(currentSong)
    },[currentSong])
    return null
}

export default AudioHistoryProvider