"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function Hero() {
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [showUrl, setShowUrl] = useState(false);
  const [urlValue, setUrlValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) setFileName(f.name);
  }, []);

  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const f = e.clipboardData?.files?.[0];
      if (f) setFileName(f.name);
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background with subtle, artistic blur shapes */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 via-white to-sky-50" />
      <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-3/4 w-3/4 rounded-full bg-cyan-100/30 blur-3xl animate-blob-slow" />
      <div className="pointer-events-none absolute -right-1/3 bottom-1/4 h-3/4 w-3/4 rounded-full bg-indigo-100/30 blur-3xl animate-blob-reverse" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100svh-4rem)] items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          {/* LEFT — Marketing copy and upload functionality */}
          <div className="lg:pr-12">
            <h1 className="max-w-xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Turn a{" "}
              <span className="relative inline-block">
                selfie
                <span className="absolute left-0 bottom-0 h-2 w-full bg-pink-300/60 rounded-full -z-10" />
              </span>{" "}
              into a professional headshot.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-600">
              Our AI-powered tool transforms your casual photos into polished,
              studio-quality headshots perfect for your LinkedIn profile, CV,
              and more.
            </p>

            {/* Main upload area */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={onDrop}
              className={[
                "mt-8 p-6 rounded-2xl border-2 border-dashed transition-colors duration-200",
                dragOver
                  ? "border-indigo-400 bg-indigo-50/50"
                  : "border-slate-300 bg-white",
              ].join(" ")}
              aria-label="Image upload area"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-slate-700">
                  {fileName
                    ? `Selected: ${fileName}`
                    : "Drag & drop a file here"}
                </p>
                <button
                  onClick={() => inputRef.current?.click()}
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  {fileName ? "Change Photo" : "Browse Files"}
                </button>
              </div>
              <input
                id="hero-file-input"
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
              />
            </div>

            {/* URL input and other options */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setShowUrl((v) => !v)}
                className="text-sm text-slate-700 underline decoration-slate-300 hover:text-slate-900 hover:decoration-slate-400"
              >
                {showUrl ? "Hide URL input" : "Or paste a link instead"}
              </button>
              {showUrl && (
                <form
                  className="flex items-center gap-2 flex-grow"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (urlValue.trim()) setFileName(urlValue.trim());
                  }}
                >
                  <input
                    type="url"
                    placeholder="https://example.com/photo.jpg"
                    value={urlValue}
                    onChange={(e) => setUrlValue(e.target.value)}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700">
                    Add
                  </button>
                </form>
              )}
            </div>

            {/* Legal and information text */}
            <div className="mt-6 flex flex-wrap justify-start items-center gap-3 text-xs text-slate-500">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                JPG, PNG, HEIC
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                Up to 15 MB
              </span>
              <p>We never store your photos.</p>
            </div>
          </div>

          {/* RIGHT — Hero GIF with modern framing (hidden on small screens) */}
          <div className="relative hidden lg:block h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square">
                <div
                  className="absolute -inset-10 rounded-full bg-gradient-to-br from-pink-200/50 to-purple-200/50 blur-3xl animate-blob-pulse"
                  aria-hidden
                />
                <img
                  src="/hero.gif" // put your GIF at /public/hero.gif
                  alt="Preview of a professional headshot"
                  className="relative z-10 w-full rounded-[40px] shadow-[0_24px_80px_rgba(2,6,23,0.12)]"
                />
              </div>
            </div>
          </div>

          {/* GIF for smaller screens (visible on small screens) */}
          <div className="relative mx-auto mt-12 w-64 sm:w-72 lg:hidden">
            <div
              className="absolute -left-8 -top-8 h-48 w-48 rounded-[40%] bg-pink-300/70 blur-xl md:-left-12 md:-top-12 md:h-64 md:w-64 animate-blob"
              aria-hidden
            />
            <img
              src="/hero.gif"
              alt="Preview of a professional headshot"
              className="relative z-10 w-full rounded-2xl shadow-[0_24px_80px_rgba(2,6,23,0.12)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
