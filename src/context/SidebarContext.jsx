import { createContext, useContext, useMemo, useState } from "react"

const SidebarContext = createContext(null)

export const SidebarProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev)
    }

    const value = useMemo(() => ({
            sidebarOpen,
            setSidebarOpen,
            toggleSidebar
        }),
        [sidebarOpen]
    )

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => {
    const context = useContext(SidebarContext)

    if (!context) {
        throw new Error("useSidebar harus digunakan di dalam SidebarProvider")
    }

    return context
}