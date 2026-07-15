import {MAX_RECENTS,RECENT_STORAGE_KEY} from "../constants/recent"

export const getRecentSongs = () => {
    try{
        const data = localStorage.getItem(RECENT_STORAGE_KEY)
        return data
            ? JSON.parse(data)
            : []
    }catch{
        return[]
    }
}

export const saveRecentSongs = (recents) => {
    localStorage.setItem(
        RECENT_STORAGE_KEY,
        JSON.stringify(recents)
    )
}

export const addRecentSong = (song) => {
    const recents = getRecentSongs()
    const filteredRecents = recents.filter(
        (item) => item.song.id !== song.id
    )
    const updatedRecents = [
        {
            id:Date.now().toString(),
            playedAt:new Date().toISOString(),
            song
        },
        ...filteredRecents
    ].slice(
        0,
        MAX_RECENTS
    )

    saveRecentSongs(updatedRecents)
    return updatedRecents
}

export const removeRecentSong = (songId) => {
    const updatedRecents = getRecentSongs().filter(
        (item) => item.song.id !== songId
    )

    saveRecentSongs(updatedRecents)
    return updatedRecents
}

export const clearRecentSongs = () => {
    localStorage.removeItem(RECENT_STORAGE_KEY)
}

export const groupRecentSongs = (recents) => {
    const today = []
    const yesterday = []
    const earlier = []
    const now = new Date()

    recents.forEach((item) => {
        const playedDate = new Date(item.playedAt)
        const diff = Math.floor((now-playedDate)/(1000*60*60*24))

        if(diff === 0){
            today.push(item)
        } else if(diff === 1){
            yesterday.push(item)
        }else{
            earlier.push(item)
        }
    })

    return{today, yesterday, earlier}
}