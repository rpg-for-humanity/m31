export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center text-white px-6 relative overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-cover bg-[center_60%]"
        style={{ backgroundImage: "url('/m31.jpg')" }}
      ></div>
      
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6 animate-sparkle">
          <span className="text-xl">✦</span>
          <p className="text-base md:text-lg uppercase tracking-[0.3em] text-white">
            coming soon
          </p>
          <span className="text-xl">✦</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          RPG for Human
          <span className="relative">
            ı
            <span className="absolute top-0 left-1/2 -translate-x-1/2 text-sm md:text-lg animate-sparkle">
              ✦
            </span>
          </span>
          ty<span className="text-lg md:text-2xl text-white/70 align-top">™</span>
        </h1>

        <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed mx-auto font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          Master languages and explore cultures through interactions 
          <br />
          with AI companions on M31, Andromeda.
        </p>

        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed mx-auto font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          Every achievement unlocks <span className="text-cyan-400 font-semibold">"Earth Investment"</span>, building habitats 
          <br />
          where humans and AI coexist in a shared future.
        </p>

        <p className="text-sm md:text-base tracking-[0.2em] text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          <span className="mr-3 animate-sparkle">✦</span>
          follow the build →{" "}
          <a href="https://www.tiktok.com/@clair.hur" target="_blank" className="inline-flex items-center gap-7 text-white hover:text-cyan-300 transition animate-subtle-sparkle font-semibold align-middle">
            <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
            <span className="ml-2">tiktok</span>
          </a>
          {" · "}
          <a href="https://www.youtube.com/@clairhur" target="_blank" className="inline-flex items-center gap-7 text-white hover:text-cyan-300 transition animate-subtle-sparkle font-semibold align-middle">
            <svg className="w-4 h-4 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span className="ml-2">youtube</span>
          </a>
        </p>
      </div>

      <footer className="absolute bottom-8 text-white/60 text-sm z-10 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
        © 2025 RPG for Humanity ✦ NYC
      </footer>
    </main>
  );
}
