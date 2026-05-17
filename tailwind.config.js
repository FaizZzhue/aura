export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: { 
        extend: { 
            colors: { 
                aura: {
                    green: "#00d4aa",
                },
            },

            fontFamily: {
                display: ["Outfit", "sans-serif"],
                body: ["DM Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
}