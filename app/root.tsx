import { Links, Meta, Outlet, Scripts, ScrollRestoration, NavLink } from "react-router";
import "./app.css";
import AudioNarration from "./routes/components/AudioNarration";
import { Analytics } from '@vercel/analytics/react';

// 1. The Navbar Component
function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] h-20 flex items-center bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl w-full mx-auto px-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-black italic uppercase tracking-tighter text-lg text-white">
            <a href="/">Project <span className="text-[#F59E0B]">Visionary</span></a>
          </span>
        </div>

        <div className="flex gap-10">
          {[
            { name: "Vision", path: "/" },
            { name: "Receipts", path: "/evidence" },
            { name: "Media", path: "/media" },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-300 ${isActive ? "text-[#F59E0B]" : "text-zinc-100 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block text-[9px] font-bold tracking-[0.3em] text-zinc-400 uppercase">
          Carlos / Daniel / Gedion
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="mt-64 border-t border-white/10 bg-[#080808]/50 backdrop-blur-md px-10 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

        {/* Brand / Copyright */}
        <div className="space-y-4">
          <h4 className="text-white text-2xl font-black italic uppercase tracking-tighter">
            Douglass <span className="text-amber-500">Archives</span>
          </h4>
          <p className="text-zinc-400 text-[11px] font-mono uppercase tracking-[0.3em] leading-loose">
            © 2026 // DIGITAL REPOSITORY <br />
            ALL SOURCES VERIFIED VIA LOC & NARA
          </p>
        </div>

        {/* Status Indicator - Highly Readable */}
        <div className="flex items-center gap-6 px-8 py-4 bg-white/5 rounded-2xl border border-white/5">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[10px] font-black uppercase tracking-widest">System Status</span>
            <span className="text-zinc-500 text-[9px] font-mono uppercase">Operational // Encrypted</span>
          </div>
        </div>

        {/* Nav / Social Links */}
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.2em]">Navigation</span>
            <a href="/evidence" className="text-zinc-300 hover:text-amber-500 text-xs font-bold uppercase transition-colors">Evidence</a>
            <a href="/media" className="text-zinc-300 hover:text-amber-500 text-xs font-bold uppercase transition-colors">Media</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.2em]">Legal</span>
            <a href="#" className="text-zinc-300 hover:text-amber-500 text-xs font-bold uppercase transition-colors">Fair Use</a>
            <a href="#" className="text-zinc-300 hover:text-amber-500 text-xs font-bold uppercase transition-colors">Privacy</a>
          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5">
        <p className="text-zinc-700 text-[9px] font-mono text-center uppercase tracking-[0.5em]">
          Built for Intellectual Independence // No Bloat
        </p>
      </div>
    </footer>
  );
}

// 3. The Main Root Export
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-black antialiased overflow-x-hidden selection:bg-amber-500 selection:text-black">

        {/* --- GLOBAL LIGHT LEAK (Static Vibe) --- */}
        {/* This stays in the background and doesn't follow the mouse, keeping it 100% bug-free */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-zinc-500/5 rounded-full blur-[140px]" />
        </div>

        <Navbar />
        <AudioNarration />

        <main className="relative z-10 pt-20 min-h-screen">

          <Outlet />
          <Footer />
          <Analytics />
        </main>


        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}