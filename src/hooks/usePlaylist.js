import {useEffect,useState} from "react"

const STORAGE_KEY="playlists"

const usePlaylist = () => {

    const [playlists,setPlaylists] = useState(() => {
        const saved=localStorage.getItem(STORAGE_KEY)
        return saved
            ?JSON.parse(saved)
            :[]

    })

    useEffect(() => {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(playlists)
        )
    },[playlists])

    const createPlaylist = (name) => {

        const playlist = {
            id:Date.now().toString(),
            name,
            description:"",
            cover:null,
            songs:[],
            createdAt:new Date().toISOString(),
            updatedAt:new Date().toISOString()
        }

        setPlaylists((prev)=>[
            ...prev,
            playlist
        ])
    }

    const renamePlaylist = (playlistId,newName) => {
        setPlaylists((prev) => prev.map((playlist) => {

                if(playlist.id !== playlistId) {
                    return playlist
                }

                return{
                    ...playlist,
                    name:newName.trim(),
                    updatedAt:new Date().toISOString()
                }
            })
        )
    }

    const deletePlaylist = (playlistId) => {
        setPlaylists((prev) => prev.filter(
                (playlist) => playlist.id !== playlistId
            )
        )
    }

    const addSongToPlaylist = (playlistId,song) => {
        setPlaylists((prev) => prev.map((playlist) => {

                if(playlist.id !== playlistId) {
                    return playlist
                }

                const exists = playlist.songs.some(
                    (item) => item.id === song.id
                )

                if(exists){
                    return playlist
                }

                return{
                    ...playlist,
                    cover:playlist.cover ?? song.artwork,
                    songs:[
                        ...playlist.songs,
                        {
                            id:song.id,
                            title:song.title,
                            artist:song.artist,
                            album:song.album,
                            artwork:song.artwork,
                            duration:song.duration,
                            preview:song.preview
                        }
                    ],
                    updatedAt:new Date().toISOString()
                }
            })
        )
    }

    const removeSongFromPlaylist = (playlistId,songId) => {
        setPlaylists((prev) => prev.map((playlist) => {

                if(playlist.id !== playlistId) {
                    return playlist
                }

                const songs = playlist.songs.filter(
                    (song) => song.id !== songId
                )

                return{
                    ...playlist,
                    cover:songs.length>0
                        ?songs[0].artwork
                        :null,
                    songs,
                    updatedAt:new Date().toISOString()
                }
            })
        )

    }

    const getPlaylistById = (playlistId) => {
        return playlists.find(
            (playlist) => playlist.id === playlistId
        )
    }

    return{playlists, createPlaylist, renamePlaylist, deletePlaylist, addSongToPlaylist, removeSongFromPlaylist, getPlaylistById}
}

export default usePlaylist