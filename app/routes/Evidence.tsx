import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Evidence() {
    const [selectedId, setSelectedId] = useState<null | number>(null);

    // Hard-Verified Sources Only
    const timeline = [
        {
            id: 1, year: "1845", label: "ENTRY_01", title: "The Narrative",
            surface: "Douglass's first autobiography was a tactical weapon. By documenting specific names and locations, he destroyed the pro-slavery myth.",
            expanded: "Published by the Anti-Slavery Office, this text served as a legal deposition of his humanity. It was one of the most influential 'Books That Shaped America.'",
            stats: "30K+ COPIES SOLD",
            citation: "Douglass, Frederick. Narrative of the life of Frederick Douglass, an American slave. Boston: Anti-Slavery Office, 1845.",
            link: "https://www.loc.gov/item/82225385/"
        },
        {
            id: 2, year: "1847", label: "ENTRY_02", title: "The North Star",
            surface: "Douglass founded his own newspaper in Rochester to assert Black intellectual independence.",
            expanded: "The paper's motto: 'Right is of no Sex – Truth is of no Color.' It was a logistical hub for the Underground Railroad.",
            stats: "ROCHESTER, NY",
            citation: "The North Star (Rochester, N.Y.), 1847-1851.",
            link: "https://www.loc.gov/collections/frederick-douglass-newspapers/about-this-collection/"
        },
        {
            id: 3, year: "1852", label: "ENTRY_03", title: "The Oration",
            surface: "His 'What to the Slave is the Fourth of July?' address is a surgical critique of American hypocrisy.",
            expanded: "Delivered at Corinthian Hall, Douglass argued the Constitution was actually a 'glorious liberty document.'",
            stats: "CORINTHIAN HALL",
            citation: "Douglass, Frederick. 'Oration, Delivered in Corinthian Hall, Rochester, July 5th, 1852'.",
            link: "https://hdl.loc.gov/loc.rbc/rbpe.12101200"
        },
        {
            id: 4, year: "1855", label: "ENTRY_04", title: "My Bondage",
            surface: "A massive expansion of his first book, shifting to a structural analysis of the political economy of slavery.",
            expanded: "Douglass used this edition to advocate for political action and, if necessary, armed resistance.",
            stats: "STRUCTURAL SHIFT",
            citation: "Douglass, Frederick. My bondage and my freedom. New York: Miller, Orton & Mulligan, 1855.",
            link: "https://www.loc.gov/item/02020044/"
        },
        {
            id: 5, year: "1863", label: "ENTRY_05", title: "Men of Color",
            surface: "Douglass personally recruited for the 54th Massachusetts Infantry, meeting Lincoln to demand Black soldiers' rights.",
            expanded: "He argued that once a Black man had 'the brass letters U.S. on his button,' no power could deny his citizenship.",
            stats: "54TH INFANTRY",
            citation: "Douglass, Frederick. 'Men of Color, To Arms!', March 2, 1863.",
            link: "https://catalog.archives.gov/id/716292"
        },
        {
            id: 6, year: "1877", label: "ENTRY_06", title: "U.S. Marshal",
            surface: "Douglass broke the federal glass ceiling when appointed as the U.S. Marshal for the District of Columbia.",
            expanded: "This was the first high-level presidential appointment for a Black man requiring Senate confirmation.",
            stats: "FEDERAL APPOINTMENT",
            citation: "U.S. National Archives, Record Group 60 (1877).",
            link: "https://catalog.archives.gov/id/1118312"
        },
        {
            id: 7, year: "1881", label: "ENTRY_07", title: "Life and Times",
            surface: "His final autobiography documented his time as a diplomat and the failure of Reconstruction.",
            expanded: "Douglass warned that slavery had simply changed form through sharecropping and convict leasing.",
            stats: "FINAL TESTIMONY",
            citation: "Douglass, Frederick. Life and times of Frederick Douglass. Hartford, Conn.: Park Publishing Co., 1881.",
            link: "https://www.loc.gov/item/02020045/"
        },
        {
            id: 8, year: "1895", label: "ENTRY_08", title: "The Final Act",
            surface: "Hours before his death, Douglass attended a women's suffrage meeting, maintaining his commitment to justice.",
            expanded: "He died at his home, Cedar Hill, leaving a legacy of universal suffrage and resistance.",
            stats: "CEDAR HILL, DC",
            citation: "National Park Service, Frederick Douglass National Historic Site.",
            link: "https://www.nps.gov/people/frederick-douglass.htm"
        }
    ];

    const active = timeline.find(r => r.id === selectedId);

    return (
        <div className="min-h-screen bg-black text-white py-24 px-6 overflow-x-hidden selection:bg-amber-500">
            <style>{`::-webkit-scrollbar { display: none; } * { -ms-overflow-style: none; scrollbar-width: none; }`}</style>

            <div className="max-w-7xl mx-auto relative">
                <header className="mb-48 text-center relative z-30">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[12vw] font-black uppercase italic tracking-tighter leading-[0.75]"
                    >
                        Archives
                    </motion.h1>
                    <p className="text-amber-500 font-mono text-[10px] tracking-[0.6em] uppercase mt-8">Phase 01: The Evidence Archive</p>
                </header>

                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-zinc-900 z-10" />
                    <div className="space-y-4">
                        {timeline.map((item, index) => (
                            <div key={item.id} className="grid grid-cols-2 w-full relative items-start">
                                <div className={`flex flex-col p-4 md:p-12 ${index % 2 === 0 ? 'justify-end items-end' : 'justify-start items-start mt-32'}`}>
                                    {index % 2 === 0 ? (
                                        <span className="text-[14vw] font-black italic  text-zinc-300/70 tracking-tighter leading-none select-none transition-colors duration-700 hover:text-zinc-700">{item.year}</span>
                                    ) : (
                                        <Card item={item} onSelect={setSelectedId} />
                                    )}
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 top-16 w-4 h-4 bg-amber-500 rounded-full z-40 shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
                                <div className={`flex flex-col p-4 md:p-12 ${index % 2 === 0 ? 'justify-start items-start mt-32' : 'justify-end items-end'}`}>
                                    {index % 2 === 0 ? (
                                        <Card item={item} onSelect={setSelectedId} />
                                    ) : (
                                        <span className="text-[14vw] font-black italic text-zinc-300/70 tracking-tighter leading-none select-none transition-colors duration-700 hover:text-zinc-700">{item.year}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <AnimatePresence>
                    {selectedId && active && (
                        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                            />
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="relative bg-[#0D0D0D] border border-white/10 w-full max-w-6xl rounded-[3rem] overflow-y-auto z-[1001] max-h-[90vh] shadow-2xl"
                            >
                                <div className="p-12 md:p-20">
                                    <div className="flex justify-between items-start mb-20">
                                        <div>
                                            <span className="text-amber-500 font-mono text-[12px] font-black tracking-widest">{active.year} // SOURCE_VERIFIED</span>
                                            <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.8] mt-6">{active.title}</h2>
                                        </div>
                                        <button
                                            onClick={() => setSelectedId(null)}
                                            className="bg-white text-black px-8 py-3 rounded-full font-black uppercase text-[10px] hover:bg-amber-500 transition-colors"
                                        >
                                            Close
                                        </button>
                                    </div>
                                    <div className="grid lg:grid-cols-12 gap-20">
                                        <div className="lg:col-span-8 space-y-12">
                                            <p className="text-3xl text-zinc-200 font-bold italic leading-tight">"{active.surface}"</p>
                                            <div className="p-10 border-l-2 border-amber-500 bg-white/5 rounded-r-3xl">
                                                <p className="text-lg text-zinc-400 leading-relaxed">{active.expanded}</p>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-4 mr-10">
                                            <div className="p-8 bg-zinc-900/50 border border-white/10 rounded-[2.5rem] space-y-8">
                                                <div>
                                                    <h4 className="text-amber-500 text-[10px] font-black uppercase mb-4 tracking-[0.2em]">Official Citation</h4>
                                                    <p className="text-[11px] font-mono text-zinc-500 uppercase leading-relaxed">{active.citation}</p>
                                                </div>
                                                <a
                                                    href={active.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block w-full py-4 bg-white text-black hover:bg-amber-500 rounded-full text-center text-[10px] font-black uppercase tracking-widest transition-all"
                                                >
                                                    View Source ↗
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// Separate component for the Apple-style hover card
function Card({ item, onSelect }: { item: any, onSelect: (id: number) => void }) {
    return (
        <motion.div
            layoutId={`card-${item.id}`}
            onClick={() => onSelect(item.id)}
            whileHover={{
                scale: 1.03,
                y: -10,
                backgroundColor: "#141414"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 30
            }}
            className="w-full max-w-xl bg-[#0C0C0C] border border-white/5 p-10 rounded-[2.5rem] cursor-pointer group hover:border-amber-500/50 transition-colors z-30 shadow-xl"
        >
            <span className="text-amber-500 font-mono text-[9px] font-black tracking-widest uppercase mb-4 block opacity-50 group-hover:opacity-100 transition-opacity">
                {item.label}
            </span>
            <h3 className="text-5xl font-black italic text-white uppercase leading-[0.9] group-hover:text-amber-500 transition-colors">
                {item.title}
            </h3>
            <p className="text-zinc-500 text-sm mt-6 italic group-hover:text-zinc-300 transition-colors">
                {item.surface}
            </p>
        </motion.div>
    );
}