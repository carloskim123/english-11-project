import { useEffect, useState } from "react";

export default function Home() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Smooth mouse tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-amber-500 selection:text-black overflow-x-hidden font-sans">

            {/* --- PREMIUM STAGGERED LIGHT LEAKS --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Main Amber Light - Tight follow, screen blend mode */}
                <div
                    className="absolute w-[800px] h-[800px] bg-amber-600/20 rounded-full blur-[160px] transition-all duration-[1500ms] ease-out mix-blend-screen opacity-80"
                    style={{
                        left: `${mousePos.x}px`,
                        top: `${mousePos.y}px`,
                        transform: `translate(-50%, -50%) scale(1.2)`
                    }}
                />
                {/* Deep Zinc Light - Heavy stagger, creates the "Ghosting" effect */}
                <div
                    className="absolute w-[600px] h-[600px] bg-zinc-400/10 rounded-full blur-[140px] transition-all duration-[3000ms] ease-out mix-blend-overlay"
                    style={{
                        left: `${mousePos.x}px`,
                        top: `${mousePos.y}px`,
                        transform: `translate(-50%, -50%) scale(0.8)`
                    }}
                />
            </div>

            {/* --- HERO SECTION --- */}
            <section className="relative h-screen flex flex-col items-center justify-center px-6 z-10">
                <div className="text-center w-full">
                    {/* THE METALLIC TITLE: Fixed leading and tracking */}
                    <h1 className="text-[14vw] font-black uppercase italic 
            bg-gradient-to-b from-white via-zinc-400 to-zinc-700 bg-clip-text text-transparent
            leading-[0.85] tracking-[-0.05em] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                        Douglass
                    </h1>

                    <div className="mt-8 flex flex-col items-center">
                        {/* Cinematic Subtitle */}
                        <p className="text-[#F59E0B] font-black tracking-[0.7em] uppercase text-[clamp(0.6rem,2vw,0.85rem)]">
                            Visionary Architect of Liberty
                        </p>
                        {/* Minimalist Accent Line */}
                        <div className="mt-6 h-[1px] w-16 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                    </div>
                </div>
            </section>

            {/* --- THE BENTO GRID (The Receipts) --- */}
            <section className="relative z-20 py-32 px-6 bg-[#050505]/80 backdrop-blur-3xl shadow-[0_-100px_100px_rgba(0,0,0,1)]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Main Claim */}
                    <div className="md:col-span-8 bg-zinc-900/40 border border-white/5 p-16 rounded-[3.5rem] flex flex-col justify-center min-h-[450px]">
                        <h2 className="text-[#F59E0B] text-[10px] font-black tracking-[0.4em] uppercase mb-12 opacity-80">The Core Argument</h2>
                        <p className="text-4xl md:text-7xl font-bold leading-[1.05] text-white tracking-tight">
                            Frederick Douglass <span className="text-[#F59E0B]">weaponized truth</span> to reshape the American soul.
                        </p>
                    </div>

                    {/* Reason 1 */}
                    <div className="md:col-span-4 bg-[#F59E0B] p-12 rounded-[3.5rem] flex flex-col justify-end text-black group overflow-hidden relative">
                        <span className="text-7xl font-black mb-6 opacity-20 group-hover:opacity-40 transition-opacity">01</span>
                        <h3 className="text-2xl font-black uppercase tracking-tight leading-none">Inclusive Identity</h3>
                        <p className="mt-4 text-black/80 font-bold leading-tight text-lg">
                            Demanded an America that refused to exclude any race or gender.
                        </p>
                    </div>

                    {/* Reason 2 */}
                    <div className="md:col-span-6 bg-zinc-900/40 border border-white/5 p-12 rounded-[3.5rem] hover:bg-zinc-800/60 transition-all group">
                        <span className="text-amber-500 font-mono text-xl italic font-bold">/ 02</span>
                        <h3 className="text-4xl font-black mt-6 text-white uppercase tracking-tighter">Constitutional Pivot</h3>
                        <p className="mt-6 text-zinc-300 text-xl leading-relaxed font-medium">
                            He reframed the Constitution as a "glorious liberty document" to legally dismantle slavery.
                        </p>
                    </div>

                    {/* Reason 3 */}
                    <div className="md:col-span-6 bg-zinc-900/40 border border-white/5 p-12 rounded-[3.5rem] hover:bg-zinc-800/60 transition-all group">
                        <span className="text-amber-500 font-mono text-xl italic font-bold">/ 03</span>
                        <h3 className="text-4xl font-black mt-6 text-white uppercase tracking-tighter">Visual Disruption</h3>
                        <p className="mt-6 text-zinc-300 text-xl leading-relaxed font-medium">
                            He used photography to ensure the world could not ignore the humanity of the oppressed.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- VIDEO SECTION --- */}
            <section className="relative z-20 py-40 px-4 bg-[#050505]">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(245,158,11,0.1)] bg-black aspect-video">
                        <iframe
                            className="w-full h-full grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                            src="https://www.youtube.com/embed/8tTkHJWxfP0?rel=0"
                            title="Douglass Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* --- FINAL QUOTE --- */}
            <section className="relative z-20 py-72 px-6 text-center">
                <h2 className="text-4xl md:text-8xl font-bold italic text-zinc-200 leading-[1] tracking-tight max-w-5xl mx-auto">
                    "I would unite with <span className="text-[#F59E0B]">anybody</span> to do right and with <span className="text-zinc-800 italic">nobody</span> to do wrong."
                </h2>
            </section>

           
        </div>
    );
}