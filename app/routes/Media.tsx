const gallery = [
    {
        id: "img_01",
        title: "The Visionary (1876)",
        description: "One of the most iconic portraits of Douglass, captured by George Kendall Warren. This image was used to project a sense of stern, unyielding authority.",
        type: "ALBUMEN PRINT",
        source: "Library of Congress",
        loc_id: "LC-DIG-ppmsca-56175",
        link: "https://www.loc.gov/pictures/item/2018651422/"
    },
    {
        id: "img_02",
        title: "Cedar Hill Sanctuary",
        description: "The front view of Douglass’s final home in Anacostia, DC. He named it Cedar Hill for the trees surrounding the estate.",
        type: "HISTORIC PHOTO",
        source: "National Park Service",
        nps_id: "FRDO-36",
        link: "https://www.nps.gov/media/photo/gallery.htm?id=1E9D591D-1DD8-B71C-07A34894CA5EACFA"
    },
    {
        id: "img_03",
        title: "The Cabinet Card (1879)",
        description: "A classic 19th-century cabinet card portrait showing Douglass in his early 60s, maintaining his signature 'stern gaze' for the camera.",
        type: "PHOTOGRAPHIC PORTRAIT",
        source: "National Archives",
        nara_id: "558770",
        link: "https://catalog.archives.gov/id/558770"
    },
    {
        id: "img_04",
        title: "North Star Masthead",
        description: "Digital scan of the original banner from The North Star, featuring the motto: 'Right is of no Sex – Truth is of no Color.'",
        type: "NEWSPAPER ARCHIVE",
        source: "Library of Congress",
        loc_coll: "sn84026365",
        link: "https://www.loc.gov/collections/frederick-douglass-newspapers/about-this-collection/"
    }
];

export default function Media() {
    return (
        <div className="min-h-screen bg-[#050505] text-white p-8 md:p-20 selection:bg-amber-500">
            <header className="max-w-7xl mx-auto mb-32">
                <span className="text-amber-500 font-mono text-xs tracking-[0.5em] uppercase block mb-6">Visual Assets // Phase 02</span>
                <h1 className="text-8xl md:text-[10vw] font-black italic uppercase leading-[0.8] tracking-tighter">
                    Media<br /><span className="text-zinc-800">Archive</span>
                </h1>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {gallery.map((item) => (
                    <div key={item.id} className="group relative bg-zinc-900/20 border border-white/5 p-8 rounded-[3rem] hover:border-amber-500/50 transition-all">
                        <div className="flex justify-between items-start mb-12">
                            <span className="bg-white/5 px-4 py-2 rounded-full text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                                {item.type}
                            </span>
                            <span className="text-zinc-600 font-mono text-[10px]">{item.id}</span>
                        </div>

                        <h3 className="text-4xl font-black italic uppercase mb-4 group-hover:text-amber-500 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-md">
                            {item.description}
                        </p>

                        <div className="pt-8 border-t border-white/5 flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Repository</span>
                                <span className="text-[10px] text-white font-mono">{item.source}</span>
                            </div>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-zinc-800 group-hover:bg-amber-500 text-white group-hover:text-black text-center rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"
                            >
                                Source Record ↗
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}