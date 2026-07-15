import {useState,useEffect} from "react"
import {X} from "lucide-react"

const PlaylistModal = ({open, onClose, onSubmit, title="Create Playlist", buttonText="Create", initialValue=""})=>{

    const [name,setName] = useState(initialValue)
    
    useEffect(() => {
        setName(initialValue)
    },[initialValue,open])

    if(!open){
        return null
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const value=name.trim()

        if(!value){
            return
        }
        
        onSubmit(value)
        setName("")
        onClose()
    }

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0b1220] p-6 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
                    >
                        <X size={18}/>
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <div>
                        <label className="mb-2 block text-sm text-zinc-400">
                            Playlist Name
                        </label>

                        <input
                            autoFocus
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            placeholder="My Playlist"
                            className="w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-[#00d4aa]"
                        />
                    </div>

                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-white/10 px-5 py-2 text-white transition hover:bg-white/5"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-xl bg-[#00d4aa] px-5 py-2 font-medium text-[#050816] transition hover:opacity-90"
                        >
                            {buttonText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default PlaylistModal