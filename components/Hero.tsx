"use client";

export default function HeroPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ---- Background (clean + professional) ---- */}
      {/* Base vertical wash */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-slate-50 to-white" />
      {/* Soft spotlight behind the hero */}
      <div
        className="pointer-events-none absolute -z-10 left-1/2 -top-40 h-[34rem] w-[80rem] -translate-x-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(37,99,235,0.10), transparent 70%)",
        }}
      />
      {/* Faint dot grid, masked so it fades toward edges */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* ---- Hero ---- */}
      <section className="container mx-auto px-4 text-center py-16 sm:py-24">
        {/* Main Marketing Headlines */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-700 mb-5 leading-tight">
          Your Career Deserves a
          <br className="hidden sm:block" />
          <span className="relative inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent">
            Professional Image
          </span>
        </h1>

        <div className="mx-auto max-w-3xl mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-4">
            Transform Any Photo Into Studio-Quality Headshots in Seconds
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Don&apos;t let a casual selfie hold back your professional
            potential. Our AI creates stunning headshots that make hiring
            managers stop scrolling and start calling.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#uploads"
            className="rounded-full bg-blue-600 hover:bg-blue-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Upload Your Photo
          </a>
          <a
            href="#samples"
            className="rounded-full border-2 border-slate-300 hover:border-slate-400 px-8 py-4 text-base font-semibold text-slate-700 hover:text-slate-900 transition-all duration-300"
          >
            See Sample Results
          </a>
        </div>

        {/* File Format Info */}
        <div className="mb-2 flex items-center justify-center gap-4 text-sm text-slate-500">
          <span className="rounded-full border border-slate-200 px-4 py-2 bg-slate-50">
            JPG, PNG, HEIC
          </span>
          <span className="rounded-full border border-slate-200 px-4 py-2 bg-slate-50">
            Up to 15 MB
          </span>
          <span className="font-medium">No studio needed</span>
        </div>
      </section>
    </main>
  );
}
