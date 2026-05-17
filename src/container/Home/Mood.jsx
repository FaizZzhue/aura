// import { MOODS } from "../../constants/moodConfig"

// const Mood = () => {
//     return (
//         <section className="max-w-6xl mx-auto px-5 py-10 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8">
//                 How are you feeling today?
//             </h2>

//             <div className="flex flex-wrap justify-center gap-4">
//                 {MOODS.map(({ id, label, icon: Icon, color }) => (
//                     <div
//                         key={id}
//                         className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 shadow-[0_0_25px_rgba(127,255,212,0.08)]"
//                     >
//                         <Icon
//                             className={`text-xl sm:text-2xl shrink-0 ${color.text}`}
//                         />

//                         <span className="font-semibold">
//                             {label}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }

// export default Mood